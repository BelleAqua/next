/** @format */

// import User from '@/models/user';
import { useState } from 'react';

export default function UserList() {
	const [users, setUsers] = useState([]);

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
			// await User.deleteOne({ email: event.target.id });
		}
	}

	if (!users.length) loadUsers();

	return (
		<>
			<h1>Users</h1>
			<table>
				<tr>
					<th>Naam</th>
					<th>email</th>
					<th>Bedrijf</th>
					<th>Rol</th>
					<th>Toegang</th>
					<th>Laatste aanmelding</th>
					<th>tools</th>
				</tr>
				{users?.map((user) => (
					<tr key={user._id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.company}</td>
						<td>{user.role}</td>
						<td>{user.access.join(', ')}</td>
						<td>{user?.seen ? new Date(user?.seen)?.toDateString() : ''}</td>
						<td>
							<button>✒️</button>
							<button id={user.email} onClick={deleteUser}>
								✖️
							</button>
						</td>
					</tr>
				))}
			</table>
		</>
	);
}
