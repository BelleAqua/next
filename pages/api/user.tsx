/** @format */

import User from '../../src/models/database';

export default async function handler(req: any, res: any) {
	res.json(User.find());
}
