/** @format */

'use client';

import { useEffect, useState } from 'react';

export default function Page() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [company, setCompany] = useState('');
	const [role, setRole] = useState('');

	useEffect(() => {
		document.getElementById('tools')?.addEventListener('click', (e) => {
			document.getElementById('signup')?.classList.remove('hidden');
		});
	});

	async function newUser() {}

	return (
		<div id="page">
			<div className="col">
				<div id="tools" className="flex-dir">
					<button className="btn">nieuwe gebruiker</button>
					<input type="text" placeholder="zoek" className="login"></input>
				</div>

				<div className="component" id="overview"></div>
			</div>
			<div className="popup hidden" id="signup">
				<form className="center form">
					<input onChange={(e: any) => setName(e.target.value)} value={name} type="text" className="login" placeholder="Naam" />
					<input onChange={(e: any) => setEmail(e.target.value)} value={email} type="email" className="login" placeholder="E-mail" />
					<input onChange={(e: any) => setPassword(e.target.value)} value={password} type="password" className="login" placeholder="wachtwoord" />
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
