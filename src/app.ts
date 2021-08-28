import express, { Application, Router } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes/routes';

class App {
	public readonly app: Application;

	constructor() {
		this.app = express();
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		this.middlewares();
	}

	private async middlewares(): Promise<void> {
		this.app.use(routes);
		this.app.use(errors());
	}

}

export default new App();
