import mongoose, { InferSchemaType, ObjectId } from "mongoose";

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
	employment: [{
		title: { type: String, required: false, trim: true },
		key_skill: { type: String, required: false, trim: true }
	}],
	address: [{
		city: { type: String, required: false, trim: true },
		street_name: { type: String, required: false, trim: true },
		street_address: { type: String, required: false, trim: true },
		zip_code: { type: String, required: false, trim: true },
		state: { type: String, required: false, trim: true },
		country: { type: String, required: false, trim: true },
		coordinates: [{
			lat: { type: Number, required: false, trim: true },
			lng: { type: Number, required: false, trim: true }
		}]
	}],
	credit_card: [{
		cc_number: { type: String, required: false, trim: true }
	}],
	subscription: [{
		plan: { type: String, required: false, trim: true },
		status: { type: String, required: false, trim: true },
		payment_method: { type: String, required: false, trim: true },
		term: { type: String, required: false, trim: true }
	}]
});

export type User = InferSchemaType<typeof userSchema>;

export default mongoose.model<User>("users", userSchema);