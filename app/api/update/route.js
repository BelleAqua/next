/** @format */

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req) {
	try {
		const { name, lastname, email, password, company, role, access } = await req.json();

		const hashedPassword = await bcrypt.hash(password, 10);
		await connectMongoDB('update');
		await User.updateOne({ email }, { name, lastname, password: hashedPassword, company, role, access });

		return NextResponse.json({ message: 'User Updated' }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: 'An error occurred while updating the user.' }, { status: 500 });
	}
}
