/** @format */

import User from '../../schemas/user';

export default async function handler(req: any, res: any) {
	return res.json((await User.find()).map((u) => u));
}
