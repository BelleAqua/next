/** @format */
'use client';
import { useState } from 'react';

export default function Page() {
	const [email, setEmail] = useState(localStorage.getItem('email') || '');
	const [password, setPassword] = useState(localStorage.getItem('password') || '');

	function saveEmail(event: any) {
		setEmail(event.target.value);
		localStorage.setItem('email', event.target.value);
	}

	function savePassword(event: any) {
		setPassword(event.target.value);
		localStorage.setItem('password', event.target.value);
	}

	return (
		<form action=".">
			<input placeholder="email" value={email} type="email" onChange={saveEmail}></input>
			<input placeholder="password" value={password} type="password" onChange={savePassword}></input>
			<button type="submit">Login</button>
		</form>
	);
}
