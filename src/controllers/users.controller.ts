import {
	Body,
	Controller,
	Delete,
	Get,
	Patch,
	Post,
	Put,
	Route,
	SuccessResponse,
	Tags
} from "tsoa";
import { CreateUser } from "../interfaces/createUser.interface";
import { viewUser } from "../interfaces/viewUser.interface";
import UserService from "../services/user.service";
import mongoose, { UpdateWriteOpResult } from "mongoose";

@Tags('User')
@Route('user')
export class UserController extends Controller {

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
	public async getAllUsers(): Promise<viewUser[]> {

		return this.userService.getAllUsers();
	};

	/**
	 * Get a user by id
	 * 
	 */
	@Get('/getuserbyid/{id}')
	public async getUserById(
		id: string
	): Promise<viewUser | null> {

		return this.userService.getUserById(id);

	};

	/**
	 * Post users in database
	 * 
	 * Accepts an array of users
	 */
	@Post('/')
	@SuccessResponse("201", "Created")
	public async postUsers(
		@Body() body: CreateUser[]
	): Promise<null> {

		this.userService.postUsers(body);

		return null;
	}

	/**
	   * Post users in database
	   * 
	   * Accepts an array of users
	   */
	@Delete('/')
	@SuccessResponse("200", "Ok")
	public async deleteUsers(
		@Body() body: string[]
	): Promise<mongoose.mongo.DeleteResult> {

		return this.userService.deleteUsers(body);
	}

}