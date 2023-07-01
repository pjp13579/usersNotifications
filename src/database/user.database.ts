import mongoose from "mongoose";
import userModel, { User } from "../models/user.model";

export default class UserDatabase {

	public async getAllUsers(): Promise<User[]>{
		let stuff = userModel.find();
		
		console.log(stuff);
		return stuff;
	}

	public async getUserById(objectId: mongoose.Types.ObjectId) : Promise<User | null>{
		return userModel.findById(objectId);
	}
};