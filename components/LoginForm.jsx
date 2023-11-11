/** @format */

'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { connectMongoDB } from '@/lib/mongodb';

export default function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();

		connectMongoDB();

		try {
			const res = await signIn('credentials', {
				email,
				password,
				redirect: false,
			});

			if (res.error) {
				setError('Invalid Credentials');
				return;
			}

			router.push('/');
			router.refresh();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="grid place-items-center h-screen ">
			<div className="component">
				<h1 className="text-xl font-bold my-4">Login</h1>

				<form onSubmit={handleSubmit} className="gap-3 ">
					<input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" />
					<br></br>
					<input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
					<br></br>
					<button className="btn ok">Login</button>
					{error && <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>}
				</form>
			</div>
		</div>
	);
}
