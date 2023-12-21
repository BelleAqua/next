/** @format */

import { AuthProvider } from './Providers';
import './globals.css';
import { Inter } from 'next/font/google';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'BelleAqua',
	description: '',
};

export default async function RootLayout({ children }) {
	const session = await getServerSession(authOptions);

	if (!session && children.props.childProp.segment !== 'login') redirect('/login');

	const home = children.props.childProp.segment == '__PAGE__';

	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/x-icon" href="/favicon.png" />
			</head>

			<body className={inter.className}>
				<AuthProvider>
					{session && (
						<header>
							<div id="">
								<a title="BelleAqua" href="https://belleaqua.be">
									<img className="icon" src="/logos/belleaqua.png" />
								</a>
							</div>

							<div id="tools" className="header-flex" style={{ filter: 'invert(1)' }}>
								{session?.user?.role == 'admin' && (
									<a title="Manage" href="/manage">
										<img className="icon" src="/icons/admin.png" />
									</a>
								)}
								<a href="/account">
									<img title="Account" className="icon" src="/icons/account.png" />
								</a>
								{!home && (
									<a title="Home" href="/">
										<img className="icon" src="/icons/home.png" />
									</a>
								)}
							</div>
						</header>
					)}
					<main>{children}</main>
					{session?.user?.company == 'BelleAqua' && (
						<footer>
							<div id="dock">
								(
								<div id="shortcuts" className="header-flex">
									<a href="https://app.robaws.com" target="_blank">
										<img className="icon" src="/icons/robaws.png" />
									</a>
									<a href="http://192.168.0.3" target="_blank">
										<img className="icon" src="/icons/siemens.png" />
									</a>
									<a href="http://alert.hydrotechnic.be:8082" target="_blank">
										<img className="icon" src="/favicon.png" />
									</a>
								</div>
								)
							</div>
						</footer>
					)}
				</AuthProvider>
			</body>
		</html>
	);
}

/** @format */
