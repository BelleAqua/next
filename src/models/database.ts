/** @format */
// import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

// mongoose.connect(process.env.KEY as string);

export default new (class User {
	create() {}

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
