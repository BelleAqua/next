/** @format */

import mongoose from 'mongoose';

export const connectMongoDB = async (route) => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`${route} connected to mongo`);
	} catch (error) {
		console.log('Error connecting to MongoDB: ', error);
	}
};
