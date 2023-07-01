import {
	Controller,
	Get,
	Route,
	Tags
} from "tsoa";
import { User } from "../models/user.model";
import UserService from "../services/user.service";

@Tags('User')
@Route('user')
export class NotificationsController extends Controller {

	private userService: UserService;

	// passing service in constructor to stub methods for unit tests
	constructor(service?: UserService) {
		super();
		if (service) {
			this.userService = service!;
		}
		else {
			this.userService = new UserService();
		}
	}

	/**
	 * Get all users in record
	 * 
	 */
	@Get('/getallusers')
	public async getAllUsers(): Promise<User[]> {

		return this.userService.getAllUsers();

	};

	/**
	 * Get a user by id
	 * 
	 */
	@Get('/getuserbyid/{id}')
	public async getUserById(
		id: string
	): Promise<User | null> {

		return this.userService.getUserById(id);

	};
}