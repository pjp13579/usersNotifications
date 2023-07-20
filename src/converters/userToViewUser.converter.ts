import mongoose from "mongoose";
import { User } from "../models/user.model";
import { viewUser } from "../interfaces/viewUser.interface";


export function userToViewUser(user: User): viewUser {

	let viewUser = {} as viewUser;

	viewUser._id = user._id;
	viewUser.uid = user.uid;
	viewUser.first_name = user.first_name;
	viewUser.last_name = user.last_name;
	viewUser.username = user.username;
	viewUser.email = user.email;
	viewUser.avatar = user.avatar;
	viewUser.gender = user.gender;
	viewUser.phone_number = user.phone_number;
	viewUser.date_of_birth = user.date_of_birth;
	viewUser.employment = {
		key_skill: user.employment.key_skill,
		title: user.employment.title
	}
	viewUser.address = {
		city: user.address.city,
		street_name: user.address.street_name,
		street_address: user.address.street_address,
		zip_code: user.address.zip_code,
		state: user.address.state,
		country: user.address.country,
		coordinates: {
			lat: user.address.coordinates.lat,
			lng: user.address.coordinates.lng,
		}
	}
	viewUser.subscription = {
		plan: user.subscription.plan,
		status: user.subscription.status,
		term: user.subscription.term,
	}

	return viewUser;
}

export function usersToViewUsers(users: User[]): viewUser[] {

	let viewUsers: viewUser[] = users.map(user => {
		console.log(user);

		return userToViewUser(user);
	});

	return viewUsers;
}