/** @format */

import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function POST() {
	try {
		await connectMongoDB('users');
		const user = await User.find();
		return NextResponse.json(user);
	} catch (error) {
		console.log(error);
	}
}
