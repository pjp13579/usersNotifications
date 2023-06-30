
import express, { NextFunction, Request, Response, urlencoded } from 'express';
import { RegisterRoutes } from '../dist/routes';
import swaggerUI from 'swagger-ui-express';
import logger from 'morgan';
import environment from './environment';

const app = express();

// // setting necessary headers to allow cors on all endpoints
// app.all('/*', function (req, res, next) {
// 	// define header origin to allow requests from port 8081
// 	res.header("Access-Control-Allow-Origin", "localhost:8081");
// 	// define allowed headers in the request
// 	res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
// 	// continue
// 	next();
// });

app.listen(80);

app.use(logger(environment.LOG_LEVEL));
app.use(urlencoded({ extended: true }));
app.use(express.json());
RegisterRoutes(app);

if (!environment.PRODUCTION) {
	app.use('/docs', swaggerUI.serve, async (req: Request, res: Response) => {
		return res.send(swaggerUI.generateHTML(await import('../dist/swagger.json')));
	});
}

export default app;