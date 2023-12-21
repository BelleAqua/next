/** @format */

// import User from '@/models/user';
import { useState } from 'react';
import UpdateUser from '@/components/UpdateUser';

export default function UserList() {
	const [users, setUsers] = useState([]);
	const [update, setUpdate] = useState(false);
	const [user, setUser] = useState('');

	async function loadUsers() {
		const users = await fetch('/api/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			cache: 'no-store',
		})
			.then((res) => res.json())
			.catch(() => true);

		if (Array.isArray(users)) setUsers(users);
	}

	async function deleteUser(event) {
		const consent = confirm(`Weet je zeker dat je ${event.target.id} wilt verwijderen?`);

		if (consent) {
			await fetch('/api/deleteUser', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				cache: 'no-store',
				body: JSON.stringify({ email: event.target.id }),
			})
				.then((res) => res.json())
				.catch(() => true);
		}
	}

	async function updateUser(event) {
		setUpdate(false);

		if (!update) {
			setUser(event.target.id);
			setUpdate(true);
		}
	}

	if (!users.length) loadUsers();

	return (
		<>
			<h1>Gebruikers</h1>
			<table>
				<tr>
					<th>Naam</th>
					<th className="hiddenOnMobile">Achternaam</th>
					<th>email</th>
					<th className="hiddenOnMobile">Bedrijf</th>
					<th className="hiddenOnMobile">Rol</th>
					<th className="hiddenOnMobile">Toegang</th>
					<th className="hiddenOnMobile">Laatste aanmelding</th>
				</tr>
				{users?.map((user) => (
					<tr key={user._id}>
						<td>{user.name}</td>
						<td className="hiddenOnMobile">{user.lastname}</td>
						<td>{user.email}</td>
						<td className="hiddenOnMobile">{user.company}</td>
						<td className="hiddenOnMobile">{user.role}</td>
						<td className="hiddenOnMobile">{user.access.join(', ')}</td>
						<td className="hiddenOnMobile">{user?.seen ? new Date(user?.seen)?.toDateString() : ''}</td>
						<td className="">
							<button id={user.email} onClick={updateUser}>
								✒️
							</button>
							<button id={user.email} onClick={deleteUser}>
								✖️
							</button>
						</td>
					</tr>
				))}
			</table>

			{update && <UpdateUser data={user} />}
		</>
	);
}
