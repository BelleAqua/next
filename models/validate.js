/** @format */

import { useSession } from 'next-auth/react';

export default function validate(...access) {
	const { data: session } = useSession();

	const user = session?.user;

	if (user?.role == 'admin') return true;
	else if (access.includes(user?.company)) return true;
	else if (access.some((e) => user?.access.includes(e))) return true;
	else return false;
}
