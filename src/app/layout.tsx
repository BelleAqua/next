/** @format */
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { hash } from 'bcrypt';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { push } = useRouter();

	useEffect(() => {
		fetch('api/user')
			.then((res) => res.json())
			.then((users) => {
				users.map(async (user: any) => {
					if (user.email !== email && user.password !== (await hash(password, 10))) {
						document.getElementById('shortcuts')?.classList.add('hidden');

						push('/login');
					}
				});
			});
	}, []);

	return (
		<html lang="en">
			<head>
				<title>BelleAqua</title>
				<link rel="icon" href="/favicon.ico" />
			</head>

			<body className={`${inter.className}`}>
				<header>
					<div>
						<a href="https://belleaqua.be">
							<img className="icon" src="/logos/belleaqua.png" />
						</a>
					</div>
					<div className="flex-dir" id="shortcuts">
						<a href=".">
							<img className="icon" src="/icons/home.png" />
						</a>

						<a href="/account">
							<img className="icon" src="/icons/account.png" />
						</a>
					</div>
				</header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
