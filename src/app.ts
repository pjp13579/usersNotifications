
import express, { NextFunction, Request, Response, urlencoded } from 'express';
import logger from 'morgan';
import swaggerUI from 'swagger-ui-express';
import { ValidateError } from 'tsoa';
import { RegisterRoutes } from '../dist/routes';
import initializeMongoClient from './database/client';
import environment from './environment';
import { StatusError } from './interfaces/error.interface';

const app = express();
initializeMongoClient();

// // setting necessary headers to allow cors on all endpoints
// app.all('/*', function (req, res, next) {
// 	// define header origin to allow requests from port 8081
// 	res.header("Access-Control-Allow-Origin", "localhost:8081");
// 	// define allowed headers in the request
// 	res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
// 	// continue
// 	next();
// });

app.listen(environment.PORT);

app.use(logger(environment.LOG_LEVEL));
app.use(urlencoded({ extended: true }));
app.use(express.json());

// 
RegisterRoutes(app);

// error handling middleware
app.use(function errorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction): Response | void {

	if (err instanceof ValidateError) {
		console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
		return res.status(422).json({
			message: "Validation Failed",
			details: err?.fields,
		});
	}
	if (err instanceof SyntaxError) {
		return res.status(400).json({
			message: err.message,
		});
	}
	if (err instanceof StatusError) {
		return res.status(err.status).json({
			message: err.message,
		});
	}
	if (err instanceof Error) {
		return res.status(500).json({
			message: "Internal Server Error",
		});
	}
	next();
});

if (!environment.PRODUCTION) {
	app.use('/docs', swaggerUI.serve, async (req: Request, res: Response) => {
		return res.send(swaggerUI.generateHTML(await import('../dist/swagger.json')));
	});
}


export default app;