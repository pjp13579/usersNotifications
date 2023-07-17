import { NotificationsController } from "../controllers/notifications.controller";
import { StatusError } from "../interfaces/error.interface";
import NotificationService from "../services/notification.service";

fdescribe('test the notifications controller class', () => {
	fdescribe('test endpoint @Post(\'/accesstoken\')', () => {
		it('should resolve service function return value', async () => {

			// modifying the service class and stubbing the return value on the target function.
			// then we're injecting the stubbed service class into the controller by it's constructor
			let notificationService = new NotificationService();

			jest.spyOn(notificationService, 'getClientAccessToken')
				.mockImplementation(() => Promise.resolve({ token: 'wss:something' }));


			let notificationsController = new NotificationsController(notificationService);

			const result = await notificationsController.getClientAccessToken({ userId: '1' });

			expect(notificationService.getClientAccessToken).toHaveBeenCalled();
			expect(result.token).toEqual('wss:something');
		});

		it('should throw StatusError because UserId is null', async () => {
			let notificationService = new NotificationService();

			jest.spyOn(notificationService, 'getClientAccessToken')
				.mockImplementation(() => Promise.resolve({ token: 'wss:something' }));

			let notificationsController = new NotificationsController(notificationService);


			try {
				await notificationsController.getClientAccessToken({ userId: null! });
				expect;
			} catch (error) {
				expect(error).toBeInstanceOf(StatusError);
			}

			expect(notificationService.getClientAccessToken).not.toHaveBeenCalled();
		});
	});

	fdescribe('test endpoint @Post(\'/user\')', () => {
		it('should call service function', async () => {

			let notificationService = new NotificationService();

			jest.spyOn(notificationService, 'sendNotificationToUser')
				.mockImplementation(() => Promise.resolve(null));

			let notificationsController = new NotificationsController(notificationService);

			const result = await notificationsController.postNotificationToUser({ userId: '1', text: 'abcdefg' });

			expect(notificationService.sendNotificationToUser).toHaveBeenCalled();
			console.log(result);
		});
	});
});