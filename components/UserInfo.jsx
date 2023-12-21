/** @format */

'use client';

import { signOut, useSession } from 'next-auth/react';

export default function UserInfo() {
	const { data: session } = useSession();

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
				<button className="btn warning" onClick={() => signOut()}>
					Log Out
				</button>

				<button className="btn warning" onClick={() => true}>
					Change password
				</button>
			</div>
		</div>
	);
}
