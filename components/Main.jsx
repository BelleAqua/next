/** @format */

'use client';

import { useSession } from 'next-auth/react';

export default function Main() {
	const { data: session } = useSession();

	return (
		<>
			<div>
				<h1>Mobiele installaties</h1>
				<div className="flex">
					{(['BelleAqua'].includes(session?.user?.company) || session?.user.access.includes('Aclima')) && (
						<a href="">
							<div className="tile">Aclima</div>
						</a>
					)}
				</div>
			</div>
			<div>
				<h1>Checklists</h1>
				<div className="flex">
					{['BelleAqua', 'Aquafin'].includes(session?.user?.company) && (
						<a href="/checklist/besturingskast">
							<div className="tile">Besturingskasten</div>
						</a>
					)}
					{['BelleAqua'].includes(session?.user?.company) && (
						<a href="">
							<div className="tile">Alert</div>
						</a>
					)}
				</div>
			</div>
			<div>
				<h1>Tutorials</h1>
				<div className="flex">
					{['BelleAqua'].includes(session?.user?.company) && (
						<a href="">
							<div className="tile">Logo netwerk aanpassen</div>
						</a>
					)}
					{['BelleAqua'].includes(session?.user?.company) && (
						<a href="">
							<div className="tile">Logo klok aanpassen</div>
						</a>
					)}
					{['BelleAqua'].includes(session?.user?.company) && (
						<a href="">
							<div className="tile">Logo tijd aanpassen</div>
						</a>
					)}
				</div>
			</div>
			<div>
				<h1>Tools</h1>
				<div className="flex">
					{['BelleAqua'].includes(session?.user?.company) && (
						<a href="">
							<div className="tile">Robaws</div>
						</a>
					)}
					{['BelleAqua'].includes(session?.user?.company) && (
						<a href="">
							<div className="tile">Image Renamer</div>
						</a>
					)}
				</div>
			</div>
		</>
	);
}
