import { createConnection } from 'typeorm';
import AppError from './errors/AppError';
import ERRORS from './constants/messages/ERRORS';

try {
	async function main() {
		const server = (await import('@config/index')).server;
		await createConnection();
		const express = (await import('./app')).default;

		express.app.listen(server.port, () => {
			console.info('🚀 Server started on', {
				port: server.port,
				env: server.env,
			});
		});
	}

	main();
} catch (e) {
	throw new AppError(ERRORS.server.code500, e, 500);
}

