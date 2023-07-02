import mongoose from "mongoose";
import { createUser } from "../interfaces/createUser.interface";
import { User } from "../models/user.model";

const crypto = require('crypto');

export function createUserToUser(createUsers: createUser[]): User[] {

	let users: User[] = JSON.parse(JSON.stringify(createUsers));

	users.forEach(user => {
		user._id = new mongoose.Types.ObjectId();
		user.password = crypto.createHash('sha1').update(user.password).digest('hex');
	});

	return users;
}