import mongoose from "mongoose";
import UserDatabase from "../database/user.database";
import { User } from "../models/user.model";
import { createUser } from "../interfaces/createUser.interface";
import { createUserToUser } from "../converters/createUserToUser.converter";
import { viewUser } from "../interfaces/viewUser.interface";
import { userToViewUser, usersToViewUsers } from "../converters/userToViewUser.converter";


export default class UserService {

	private userDatabase: UserDatabase;

	// passing database in constructor to stub methods for unit tests
	constructor(database?: UserDatabase) {
		if (database) {
			this.userDatabase = database!;
		}
		else {
			this.userDatabase = new UserDatabase();
		}
	}

	public async getAllUsers(): Promise<viewUser[]> {
		let users: User[] = await this.userDatabase.getAllUsers();

		return usersToViewUsers(users);
	}

	public async getUserById(id: string): Promise<viewUser | null> {

		let objectId = new mongoose.Types.ObjectId(id);

		let user: User | null = await this.userDatabase.getUserById(objectId);

		if (user) {
			return userToViewUser(user);
		}
		return null;
	}

	public async postUsers(body: createUser[]): Promise<void> {

		let users = createUserToUser(body);

		this.userDatabase.postUsers(users);
	}
}