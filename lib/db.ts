/** @format */

import mongoose from 'mongoose';

const { KEY } = process.env;

export const connect = async () => {
	return await mongoose
		.connect(KEY as string)
		.then(({ connection }) => {
			if (connection.readyState === 1) return Promise.resolve(true);
		})
		.catch(Promise.reject);
};
