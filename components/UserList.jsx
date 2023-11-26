/** @format */

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
			.catch(console.error);

		setUsers(users);
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
				</tr>
				{users?.map((user) => (
					<tr key={user._id}>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.company}</td>
						<td>{user.role}</td>
						<td>{user.access.join(', ')}</td>
					</tr>
				))}
			</table>
		</>
	);
}
