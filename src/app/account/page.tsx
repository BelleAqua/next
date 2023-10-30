/** @format */
'use client';

import { useEffect } from 'react';

export default function Page() {
	let storage: Record<string, any> = {};

	useEffect(() => {
		storage = localStorage;

		(document.getElementById('naam') as any).innerHTML = `Naam: ${storage.name}`;
		(document.getElementById('email') as any).innerHTML = `Email: ${storage.email}`;
		(document.getElementById('wachtwoord') as any).innerHTML = `Wachtwoord: ${storage.password}`;

		(document.getElementById('title') as any).innerHTML = `Hallo ${storage.name}!`;
	}, []);

	function logout() {
		storage.password = '';
		storage.email = '';
		storage.name = '';
	}

	return (
		<>
			<h1 className="title" id="title"></h1>
			<div id="details" className="component">
				<p id="naam"></p>
				<p id="email"></p>
				<p id="wachtwoord"></p>
			</div>
			<form action=".">
				<button type="submit" className="btn w-60" onClick={logout}>
					logout
				</button>
			</form>
		</>
	);
}
