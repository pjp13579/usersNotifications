import mongoose from "mongoose";
import { CreateUser } from "../interfaces/createUser.interface";
import { User } from "../models/user.model";

const crypto = require('crypto');

export function createUserToUser(createUsers: CreateUser[]): User[] {

	let users: User[] = JSON.parse(JSON.stringify(createUsers));

	users.forEach(user => {
		user._id = new mongoose.Types.ObjectId();
		user.password = crypto.createHash('sha1').update(user.password).digest('hex');
	});

	return users;
}