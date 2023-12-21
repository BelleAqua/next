/** @format */

'use client';

import { signOut, useSession } from 'next-auth/react';
import { useState } from 'react';
import UpdatePassword from '@/components/UpdatePassword';

export default function UserInfo() {
	const { data: session } = useSession();
	const [newPW, setNewPW] = useState(false);

	async function changePassword() {
		setNewPW(!newPW);
	}

	return (
		<div>
			<div id="account">
				<p>
					Voornaam: <span className="data">{session?.user.name}</span>
				</p>
				<p>
					Achternaam: <span className="data">{session?.user.lastname}</span>
				</p>
				<p>
					E-mail: <span className="data">{session?.user.email}</span>
				</p>
				<p>
					Bedrijf: <span className="data">{session?.user.company}</span>
				</p>
				<p>
					Rol: <span className="data">{session?.user.role}</span>
				</p>
				<p>
					Toegang: <span className="data">{session?.user.access?.join(', ')}</span>
				</p>

				<p>
					Laaste aanmelding: <span className="data">{session?.user.seen ? new Date(session?.user.seen).toDateString() : ''}</span>
				</p>
				<button className="btn warning" onClick={signOut}>
					Log Out
				</button>

				<button className="btn warning" onClick={changePassword}>
					Change password
				</button>

				{newPW && <UpdatePassword data={session?.user?.email} />}
			</div>
		</div>
	);
}
