import {
	Controller,
	Get,
	Route,
	Tags
} from "tsoa";

@Tags('User')
@Route('user')
export class NotificationsController extends Controller {


	/**
	 * Get random number
	 */
	@Get('/randomnumber')
	public async getRandomIdNumber(): Promise<number> {

		return Math.floor(Math.random() * 24);
	};
}