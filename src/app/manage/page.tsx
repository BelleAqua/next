/** @format */

'use client';

import { useEffect, useState } from 'react';

export default function Page() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [company, setCompany] = useState('');
	const [role, setRole] = useState('');
	const [users, setUsers] = useState([]);
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		document.getElementById('tools')?.addEventListener('click', (e) => {
			document.getElementById('signup')?.classList.remove('hidden');
		});
	});

	function newUser() {
		if (!company) setCompany('Particulier');
		if (!role) setRole('gerbuiker');

		fetch('/api/create', { method: 'POST', body: JSON.stringify({ name, email, password, company, role }) }).then(console.log);
	}

	rendered
		? true
		: fetch('/api/user')
				.then((res) => res.json())
				.then((data) => {
					data.map((user: never) => {
						setUsers((currentUsers) => [...currentUsers, user]);
					});
				})
				.catch(() => true);

	rendered ? true : setRendered(true);

	return (
		<div id="page">
			<div className="col">
				<div id="tools" className="flex-dir">
					<button className="btn">nieuwe gebruiker</button>
					<input type="text" placeholder="zoek" className="login"></input>
				</div>

				<div id="overview">
					<table className="component">
						<tr>
							<th>Naam</th>
							<th>E-mail</th>
							<th>Bedrijf</th>
							<th>Rol</th>
							<th></th>
						</tr>
						{users.map((user: any) => (
							<tr id={user._id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.company}</td>
								<td>{user.role}</td>
								<td></td>
							</tr>
						))}
					</table>
				</div>
			</div>
			<div className="popup hidden" id="signup">
				<form className="center form">
					<input required onChange={(e: any) => setName(e.target.value)} value={name} type="text" className="login" placeholder="Naam" />
					<input required onChange={(e: any) => setEmail(e.target.value)} value={email} type="email" className="login" placeholder="E-mail" />
					<input required onChange={(e: any) => setPassword(e.target.value)} value={password} type="password" className="login" placeholder="wachtwoord" />
					<input onChange={(e: any) => setCompany(e.target.value)} value={company} type="text" className="login" placeholder="Bedrijf" />
					<input onChange={(e: any) => setRole(e.target.value)} value={role} type="text" className="login" placeholder="Rol" />
					<button type="submit" className="btn" onClick={newUser}>
						+
					</button>
				</form>
			</div>
		</div>
	);
}
