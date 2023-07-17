import NotificationService from "../services/notification.service";
import PubSubService from "../services/pubsub.service";

fdescribe('test the notifications service class', () => {

	fdescribe('test function getClientAccessToken', () => {
		it('should return the token', async () => {
			let token = { token: 'wss:something' };
			
			let pubSubService = new PubSubService();

			jest.spyOn(pubSubService, 'getClientAccessToken').mockImplementation(() => Promise.resolve(token));

			let notificationService = new NotificationService(pubSubService);

			const result = await notificationService.getClientAccessToken('1');
			
			expect(pubSubService.getClientAccessToken).toHaveBeenCalled();
			expect(result.token).toEqual(token.token);
		});
	});

	fdescribe('test function sendNotificationToUser', () => {
		it('should call pubsub function and return null', async () => {
			let pubSubService = new PubSubService();

			jest.spyOn(pubSubService, 'sendToUser').mockImplementation(() => Promise.resolve(null));

			let notificationService = new NotificationService(pubSubService);

			const result = await notificationService.sendNotificationToUser('1', 'qwertyuiop');
			
			expect(pubSubService.sendToUser).toHaveBeenCalled();
			expect(result).toEqual(null);
		});
	});

	fdescribe('test function sendNotificationToEveryUser', () => {
		it('should call pubsub function and return null', async () => {

			let pubSubService = new PubSubService();

			jest.spyOn(pubSubService, 'sendToAll').mockImplementation(() => Promise.resolve(null));

			let notificationService = new NotificationService(pubSubService);

			const result = await notificationService.sendNotificationToEveryUser('poiuytrewq');
			
			expect(pubSubService.sendToAll).toHaveBeenCalled();
			expect(result).toEqual(null);
		});
	});
});