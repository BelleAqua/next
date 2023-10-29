/** @format */
'use client';

import { useEffect } from 'react';

export default function Page() {
	let storage: Record<string, any> = {};

	useEffect(() => {
		storage = localStorage;
	}, []);

	function logout() {
		storage.password = '';
		storage.email = '';
		storage.name = '';
	}

	return (
		<>
			<h1>Hallo {storage.name}</h1>
			<form action=".">
				<button type="submit" onClick={logout}>
					logout
				</button>
			</form>
		</>
	);
}
