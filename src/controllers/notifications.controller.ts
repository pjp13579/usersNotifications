import {
	Body,
	Controller,
	Post,
	Route,
	SuccessResponse,
	Tags
} from "tsoa";
import { AccessTokenCreationParams } from "../interfaces/accessToken-creation-params.interface";
import { AllUsersGroupCreationParams } from "../interfaces/allUsers-notifications-creation-params.interface";
import { NotificationUserCreationParams } from "../interfaces/user-notification-creation-params.interface";
import NotificationService from "../services/notification.service";
import { PubSubToken } from "../interfaces/pubSubtoken.interface";
import { StatusError } from "../interfaces/error.interface";

@Tags('Notification')
@Route('notification')
export class NotificationsController extends Controller {
	//! if client connection is lost momentarily, the socket will not automatically reconnect

	private notificationService: NotificationService;

	// passing service in constructor to stub method for unit tests
	constructor(service?: NotificationService) {
		super();
		if (service) {
			this.notificationService = service!;
		}
		else {
			this.notificationService = new NotificationService();
		}
	}


	/**
	 * Get uri token to subscribe to notifications web-socket
	 * 
	 * Using post method because tsoa Get() does not support body content 
	 */
	@Post('/accesstoken')
	@SuccessResponse("200", "Ok")
	public async getClientAccessToken(
		@Body() body: AccessTokenCreationParams
	): Promise<PubSubToken> {

		if(body.userId){
			return this.notificationService.getClientAccessToken(body.userId);
		}
		throw new StatusError(400, 'UserId not valid');
	}

	/**
	 * Send notification to user by userId
	 * 
	 */
	@Post("/user")
	@SuccessResponse("201", "Created")
	public async postNotificationToUser(
		@Body() body: NotificationUserCreationParams): Promise<null> {
		this.setStatus(201);

		return await this.notificationService.sendNotificationToUser(body.userId, body.text);
	}


	/**
	 * Send notification to every user connected
	 * 
	 */
	@Post("/all")
	@SuccessResponse("201", "Created")
	public async postNotificationToEveryUsers(
		@Body() body: AllUsersGroupCreationParams): Promise<null> {
		this.setStatus(201);

		return await this.notificationService.sendNotificationToEveryUser(body.text);
	}

}