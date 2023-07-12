import NotificationDatabase from "../database/notification.database";
import PubSubService from "./pubsub.service";


export default class NotificationService {
	//! if client connection is lost momentarily, the socket will not automatically reconnect

	private notificationDatabase: NotificationDatabase;
	private pubSubService: PubSubService;

	// passing database in constructor to stub methods for unit tests
	// passing PubSub Client in the constructor to stub methods for unit tests
	constructor(database?: NotificationDatabase, pubsub?: PubSubService) {
		if (database) {
			this.notificationDatabase = database!;
		}
		else {
			this.notificationDatabase = new NotificationDatabase();
		}

		if (pubsub) {
			this.pubSubService = pubsub;
		}
		else {
			this.pubSubService = new PubSubService();
		}
	}


	public async getClientAccessToken(id: string, group: string[]): Promise<any> {

		// assign the client a userId
		let token = await this.pubSubService.getClientAccessToken(id, group);

		// assign the client a userId and join group GroupA when it connects using the access token
		//token = await serviceClient.getClientAccessToken({ userId: "id", groups: [ "GroupA" ] });	

		return { token: token.token };
	}

	public async sendNotificationToUser(userId: string, message: string): Promise<null> {

		this.pubSubService.sendToUser(userId, message);

		return null;
	}

	public async sendNotificationToEveryUser(text: string): Promise<null> {

		this.pubSubService.sendToAll(text);

		return null;
	}

}




