import * as dotenv from 'dotenv';

// loads .env file contents into process.env
dotenv.config();

export interface Environment {
	PORT: string;
	LOG_LEVEL: string;
	PRODUCTION: boolean;
	DATABASE_URI: string;
	CONNECTIONSTRING: string;
	PUBSUBHUB: string;
}

const environment: Environment = {
	PORT: process.env.PORT!,
	LOG_LEVEL: process.env.LOG_LEVEL!,
	PRODUCTION: process.env.NODE_ENV == "prod",
	DATABASE_URI: process.env.DATABASE_URI!,
	CONNECTIONSTRING: process.env.CONNECTIONSTRING!,
	PUBSUBHUB: process.env.PUBSUBHUB!
};

export default environment;

