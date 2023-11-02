/** @format */
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

mongoose.connect(process.env.KEY as string);

const schema = {
	name: String,
	email: {
		type: String,
		unique: true,
	},
	password: String,
	company: String, // 'BelleAqua' || 'Aquafin' || 'Hydrotechnic' || 'Particulier'
	role: String, // 'gast' || 'gebruiker' || 'admin'
} as const;

export type Company = 'BelleAqua' | 'Aquafin' | 'Hydrotechnic' | 'Particulier';
export type Role = 'gast' | 'gebruiker' | 'admin';

export default new (class User {
	public declare readonly user;

	constructor() {
		this.user = mongoose.model('users', new mongoose.Schema(schema));
	}

	create(user: { name: string; email: string; password: string; company: Company; role: Role }) {
		return this.user.create(user);
	}

	find() {}

	authenticate(localStorage: any) {
		const users = [
			{ name: 'Test', email: 'test@belleaqua.be', password: 'belleaqua' },
			{ name: 'Ray', email: 'ray@belleaqua.be', password: 'belleaqua' },
			{ name: 'Stijn', email: 'stijn@belleaqua.be', password: 'belleaqua' },
		];

		let login;

		for (const user of users) {
			if (user.email == localStorage.email) {
				login = user;
				break;
			}
		}

		if (!localStorage.password) return false;

		if (login?.password == localStorage.password) {
			localStorage.name = login?.name;

			return true;
		}

		return false;
	}
})();
