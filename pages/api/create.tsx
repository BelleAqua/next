/** @format */

import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../lib/db';
import User from '../../schemas/user';
import { hash, genSalt } from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	connect().catch(res.json);

	if (req.method === 'POST') {
		if (!req.body) return res.status(400).json({ message: 'Bad request' });

		const { name, email, password, company, role } = JSON.parse(req.body);

		const user = await User.findOne({ email });

		if (user) return res.status(409).json({ message: 'User already exists' });

		const hashedPassword = await hash(password, await genSalt(10));

		User.create({
			name,
			email,
			password: hashedPassword,
			company,
			role,
		});

		res.status(200).json({ message: 'User created!' });
	} else {
		res.status(403).json({ message: 'Not allowed' });
	}
}
