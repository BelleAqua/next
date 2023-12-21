/** @format */

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

connectMongoDB('auth').catch(console.error);

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {},

			async authorize(credentials) {
				const { email, password } = credentials;

				try {
					await connectMongoDB('auth').catch(console.error);
					const user = await User.findOne({ email });

					if (!user) {
						return null;
					}

					const passwordsMatch = await bcrypt.compare(password, user.password);

					if (!passwordsMatch) {
						return null;
					}

					return user;
				} catch (error) {
					console.log('Error: ', error);
				}
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async session({ session }) {
			const user = (await User.findOne({ email: session.user.email }))?.toJSON();

			if (!user) return session;

			session.user.company = user.company;
			session.user.role = user.role;
			session.user.access = user.access;
			session.user.seen = user.seen;
			session.user.lastname = user.lastname;

			await User.updateOne({ email: session.user.email }, { seen: new Date() });

			return session;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
