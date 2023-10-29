/** @format */
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import User from '../models/database';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const { push } = useRouter();
	let storage: Record<string, any> = {};

	useEffect(() => {
		const login = User.authenticate(localStorage);

		if (!login) {
			push('/login');
		}

		storage = localStorage;
	}, []);

	return (
		<html lang="en">
			<head>
				<title>BelleAqua</title>
			</head>

			<body className={`${inter.className}`}>
				<header>
					<div className="flex-dir">belleaqua</div>
					<div className="flex-dir">
						<div>Alert</div>
						<div>Robaws</div>
					</div>
					<div className="flex-dir">
						<div>Home</div>
						<div>
							<a href="/account">{storage.name}</a>
						</div>
					</div>
				</header>
				<main>{children}</main>
				<footer></footer>
			</body>
		</html>
	);
}
