export default class AppError {
	public readonly message: string;

	public readonly stackTrace: string;

	public readonly statusCode: number;

	constructor(message: string, stackTrace: string, statusCode = 400) {
		this.message = message;
		this.statusCode = statusCode;
		this.stackTrace = stackTrace;
	}
}

// #TODO - When the application log is ready, add a new property
//  at AppError class to call a new ApplicationLog with Error
