/** @format */

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const { email } = await req.json();

		await connectMongoDB('delete');
		await User.deleteOne({ email });

		return NextResponse.json({ message: 'User Deleted' }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: 'An error occurred while deleting the user.' }, { status: 500 });
	}
}
