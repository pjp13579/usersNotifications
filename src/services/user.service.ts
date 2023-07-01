import mongoose from "mongoose";
import UserDatabase from "../database/user.database";
import { User } from "../models/user.model";



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

	public async getAllUsers(): Promise<User[]> {
		return this.userDatabase.getAllUsers();
	}

	public async getUserById(id: string): Promise<User | null> {
		
		let objectId = new mongoose.Types.ObjectId(id);

		return this.userDatabase.getUserById(objectId);
	}

}