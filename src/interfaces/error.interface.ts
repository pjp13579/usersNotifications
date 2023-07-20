export class StatusError extends Error{

	public message: string;
	public status: number;
   
	constructor(status: number, message:string) {
	     super();
	     this.status = status;
	     this.message = message;
	};
	
   }