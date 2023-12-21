/** @format */

import mongoose, { Schema, models } from 'mongoose';

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		access: {
			type: [String],
			required: false,
			default: [],
		},
		seen: {
			type: Date,
		},
	},
	{ timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;
