/** @format */

'use client';

import { signOut, useSession } from 'next-auth/react';

export default function UserInfo() {
	const { data: session } = useSession();

	return (
		<div>
			<div id="account">
				<p>
					Name: <span className="data">{session?.user.name}</span>
				</p>
				<p>
					E-mail: <span className="data">{session?.user.email}</span>
				</p>
				<p>
					Company: <span className="data">{session?.user.company}</span>
				</p>
				<p>
					Role: <span className="data">{session?.user.role}</span>
				</p>
				<button className="btn warning" onClick={() => signOut()}>
					Log Out
				</button>
			</div>
		</div>
	);
}
