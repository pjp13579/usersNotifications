import { PubSubToken } from "../interfaces/pubSubtoken.interface";
import PubSubService from "./pubsub.service";


export default class NotificationService {
	//! if client connection is lost momentarily, the socket will not automatically reconnect

	private pubSubService: PubSubService;

	// passing database in constructor to stub methods for unit tests
	// passing PubSub Client in the constructor to stub methods for unit tests
	constructor(pubsub?: PubSubService) {
		
		if (pubsub) {
			this.pubSubService = pubsub;
		}
		else {
			this.pubSubService = new PubSubService();
		}
	}

	public async getClientAccessToken(id: string): Promise<PubSubToken> {

		// assign the client a userId
		let token = await this.pubSubService.getClientAccessToken(id);

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




