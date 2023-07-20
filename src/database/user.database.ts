import mongoose, { UpdateWriteOpResult } from "mongoose";
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

	public deleteUsers(usersIds: string[]): Promise<mongoose.mongo.DeleteResult> {
		return userModel.deleteMany({ _id: { $in: usersIds } }).exec();
	}

	public updateUser(user: User): Promise<UpdateWriteOpResult>{
		return userModel.updateOne({_id: user._id}, user).exec();
	}
};