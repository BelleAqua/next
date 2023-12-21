/** @format */

'use client';

import { useEffect, useState } from 'react';

export default function updatePassword(data) {
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [password, setPassword] = useState('');
	const [passwordValidation, setPasswordValidation] = useState('');
	const [company, setCompany] = useState('');
	const [role, setRole] = useState('');
	const [access, setAccess] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	async function loadUser() {
		const resUserExists = await fetch('api/userExists', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email: data.data }),
		});

		const { user } = await resUserExists.json();

		if (!user) return setError('User does not exist');

		setName(user.name);
		setLastname(user.lastname);
		setCompany(user.company);
		setRole(user.role);
		setAccess(user.access?.join(','));
	}

	if (!name) loadUser();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!password || !passwordValidation) return setError('Wachtwoord moet 2x ingegeven worden');
		if (password !== passwordValidation) return setError('Wachtwoord moet aan elkaar gelijk zijn');

		try {
			const res = await fetch('api/update', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					lastname,
					email: data.data,
					password,
					company,
					role: role.toLowerCase(),
					access: access.split(/ +, +/gim).sort(),
				}),
			});

			if (res.ok) {
				const form = e.target;
				form.reset();
				setSuccess(true);
			} else {
				console.log('User update failed.');
			}
		} catch (error) {
			console.log('Error during update: ', error);
		}
	};

	return (
		<div className="grid place-items-center">
			<div className="component">
				<h1 className="text-xl font-bold my-4">{`Update ${data.data}`}</h1>

				<form onSubmit={handleSubmit} className="gap-3">
					<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Nieuw Wachtwoord" />
					<input onChange={(e) => setPasswordValidation(e.target.value)} type="password" placeholder="Nieuw Wachtwoord" />
					<button className="btn ok">Update</button>

					{error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
					{success && <div className="bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">User Updated</div>}
				</form>
			</div>
		</div>
	);
}
