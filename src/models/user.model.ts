import mongoose, { InferSchemaType, ObjectId } from "mongoose";
export interface User {
	_id: mongoose.Types.ObjectId;
	uid: string;
	password: string;
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	avatar: string;
	gender: string;
	phone_number: string;
	social_insurance_number: string;
	date_of_birth: string;
	employment: {
		title: string;
		key_skill: string;
	};
	address: {
		city: string;
		street_name: string;
		street_address: string;
		zip_code: string;
		state: string;
		country: string;
		coordinates: {
			lat: number;
			lng: number;
		};
	};
	credit_card: {
		cc_number: string;
	};
	subscription: {
		plan: string;
		status: string;
		payment_method: string;
		term: string;
	};
}

const userSchema = new mongoose.Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, required: false, trim: true },
	uid: { type: String, required: false, trim: true },
	password: { type: String, required: false, trim: true },
	first_name: { type: String, required: false, trim: true },
	last_name: { type: String, required: false, trim: true },
	username: { type: String, required: false, trim: true },
	email: { type: String, required: false, trim: true },
	avatar: { type: String, required: false, trim: true },
	gender: { type: String, required: false, trim: true },
	phone_number: { type: String, required: false, trim: true },
	social_insurance_number: { type: String, required: false, trim: true },
	date_of_birth: { type: String, required: false, trim: true },
	employment: {
		title: { type: String, required: false, trim: true },
		key_skill: { type: String, required: false, trim: true }
	},
	address: {
		city: { type: String, required: false, trim: true },
		street_name: { type: String, required: false, trim: true },
		street_address: { type: String, required: false, trim: true },
		zip_code: { type: String, required: false, trim: true },
		state: { type: String, required: false, trim: true },
		country: { type: String, required: false, trim: true },
		coordinates: {
			lat: { type: Number, required: false, trim: true },
			lng: { type: Number, required: false, trim: true }
		}
	},
	credit_card: {
		cc_number: { type: String, required: false, trim: true }
	},
	subscription: {
		plan: { type: String, required: false, trim: true },
		status: { type: String, required: false, trim: true },
		payment_method: { type: String, required: false, trim: true },
		term: { type: String, required: false, trim: true }
	}
});

export default mongoose.model<User>("users", userSchema);