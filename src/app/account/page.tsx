/** @format */
'use client';

export default function Page() {
	function logout() {
		localStorage.password = '';
		localStorage.email = '';
		localStorage.name = '';
	}

	return (
		<>
			<h1>Hallo {localStorage.name}</h1>
			<form action=".">
				<button type="submit" onClick={logout}>
					logout
				</button>
			</form>
		</>
	);
}
