import mongoose from "mongoose";

export interface viewUser {
	_id: mongoose.Types.ObjectId | null;
	uid: string | null;
	first_name: string | null;
	last_name: string | null;
	username: string | null;
	email: string | null;
	avatar: string | null;
	gender: string | null;
	phone_number: string | null;
	date_of_birth: string | null;
	employment: {
		title: string | null;
		key_skill: string | null;
	};
	address: {
		city: string | null;
		street_name: string | null;
		street_address: string | null;
		zip_code: string | null;
		state: string | null;
		country: string | null;
		coordinates: {
			lat: number | null;
			lng: number | null;
		};
	};
	subscription: {
		plan: string | null;
		status: string | null;
		term: string | null;
	};
}