/** @format */

'use client';

import RegisterForm from '@/components/RegisterForm';
import UserList from '@/components/UserList';
import { useState } from 'react';

export default function Dashboard() {
	const [register, setRegister] = useState(false);

	function showRegister() {
		if (!register) setRegister(true);
		else setRegister(false);
	}

	return (
		<>
			<div id="new">
				<button className="btn" onClick={showRegister}>
					{register ? 'Cancel' : 'New'}
				</button>
				{!register && <input placeholder="search"></input>}
			</div>
			{!register && <UserList />}
			{register && <RegisterForm />}
		</>
	);
}
