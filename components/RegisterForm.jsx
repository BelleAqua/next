/** @format */

'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function RegisterForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [company, setCompany] = useState('');
	const [role, setRole] = useState('');
	const [access, setAccess] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !password) {
			setError('All fields are necessary.');
			return;
		}

		try {
			const resUserExists = await fetch('api/userExists', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			});

			const { user } = await resUserExists.json();

			if (user) {
				setError('User already exists.');
				return;
			}

			const res = await fetch('api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
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
				console.log('User registration failed.');
			}
		} catch (error) {
			console.log('Error during registration: ', error);
		}
	};

	return (
		<div className="grid place-items-center h-screen">
			<div className="component">
				<h1 className="text-xl font-bold my-4">Register</h1>

				<form onSubmit={handleSubmit} className="gap-3">
					<input onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" />
					<br></br>
					<input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
					<br></br>
					<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
					<br></br>
					<input onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Company" />
					<br></br>
					<input onChange={(e) => setRole(e.target.value)} type="text" placeholder="Role" />
					<br></br>
					<input onChange={(e) => setAccess(e.target.value)} type="text" placeholder="Access" />
					<br></br>
					<button className="btn ok">Register</button>

					{error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
					{success && <div className="bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">User Created</div>}
				</form>
			</div>
		</div>
	);
}
