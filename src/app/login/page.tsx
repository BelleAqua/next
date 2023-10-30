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
		<div className="center" id="form">
			<form action=".">
				<input className="login" placeholder="email" value={email} type="email" onChange={saveEmail}></input>
				<input className="login" placeholder="password" value={password} type="password" onChange={savePassword}></input>
				<button className="btn" type="submit">
					Login
				</button>
			</form>
		</div>
	);
}
