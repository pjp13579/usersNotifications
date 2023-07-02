
export interface createUser {
	uid: string | null;
	password: string;
	first_name: string | null;
	last_name: string | null;
	username: string;
	email: string;
	avatar: string | null;
	gender: string | null;
	phone_number: string | null;
	social_insurance_number: string | null;
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
	credit_card: {
		cc_number: string | null;
	};
	subscription: {
		plan: string | null;
		status: string | null;
		payment_method: string | null;
		term: string | null;
	};
}