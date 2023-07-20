import { WebPubSubServiceClient } from "@azure/web-pubsub";
import environment from "../environment";

export default class PubSubService {

	private pubsubServiceClient: WebPubSubServiceClient;

	// passing pubSub clients in constructor to stub method for unit tests
	constructor(pubSubServiceClient?: WebPubSubServiceClient) {
		if (pubSubServiceClient) {
			this.pubsubServiceClient = pubSubServiceClient;
		}
		else {
			this.pubsubServiceClient = new WebPubSubServiceClient(environment.CONNECTIONSTRING, environment.PUBSUBHUB);
		}
	}

	public async getClientAccessToken(id: string): Promise<any> {

		let tokenOptions: any = {};

		if (id) {
			tokenOptions.userId = id;
		}

		// assign the client a userId
		let token = await this.pubsubServiceClient.getClientAccessToken(tokenOptions);
		
		return { token: token.url };
	}

	public async sendToAll(message: string): Promise<null> {

		let content = {

			arguments: message,
			origin: "allUsers"
		};
		await this.pubsubServiceClient.sendToAll(content);
		return null;
	}

	public async sendToUser(userId: string, message: string): Promise<null> {

		let content = {

			arguments: message,
			origin: "userId"
		};

		await this.pubsubServiceClient.sendToUser(userId, content);
		return null;
	}
}
