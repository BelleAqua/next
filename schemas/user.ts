/** @format */

import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: String,
	company: String, // 'BelleAqua' || 'Aquafin' || 'Hydrotechnic' || 'Particulier'
	role: String, // 'gast' || 'gebruiker' || 'admin'
});

const User = models.users || model('users', userSchema);

export default User;
