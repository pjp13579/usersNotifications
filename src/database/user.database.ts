import mongoose from "mongoose";
import userModel, { User } from "../models/user.model";

export default class UserDatabase {

	public async getAllUsers(): Promise<User[]> {
		let stuff = userModel.find();

		return stuff;
	}

	public async getUserById(objectId: mongoose.Types.ObjectId): Promise<User | null> {
		return userModel.findById(objectId);
	}

	public postUsers(users: User[]): void {
		userModel.insertMany(users);
	}
};