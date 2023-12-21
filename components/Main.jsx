/** @format */

'use client';

import validate from '@/models/validate';
import { useSession } from 'next-auth/react';

export default function Main() {
	const time = new Date().toLocaleTimeString().split(':')[0];

	const { data: session } = useSession();

	return (
		<>
			<h1>
				{time >= 18 ? 'Goedeavond' : time >= 12 ? 'Goedemiddag' : time >= 6 ? 'Goedemorgen' : 'Goedenacht'} {session?.user?.name}
			</h1>
			<div>
				{validate('BelleAqua', 'Aclima') && <h2>Mobiele installaties</h2>}
				<div className="flex">
					{validate('BelleAqua', 'Aclima') && (
						<a href="/mobiel/aclima">
							<div className="tile background" id="aclima"></div>
						</a>
					)}
				</div>
			</div>
			<div>
				{validate('BelleAqua', 'HydrTechnic', 'Aquafin', 'Pidpa') && <h2>Checklists</h2>}
				<div className="flex">
					{validate('BelleAqua', 'HydroTechnic', 'Aquafin', 'Pidpa') && (
						<a href="/checklist/besturingskast">
							<div className="tile">Besturingskasten</div>
						</a>
					)}
					{validate('BelleAqua') && (
						<a href="">
							<div className="tile">Alert</div>
						</a>
					)}
					{validate('BelleAqua') && (
						<a href="">
							<div className="tile">Robaws</div>
						</a>
					)}
				</div>
			</div>
			<div>
				{validate('BelleAqua') && <h2>Tutorials</h2>}
				<div className="flex">
					{validate('BelleAqua') && (
						<a href="">
							<div className="tile">Logo netwerk aanpassen</div>
						</a>
					)}
					{validate('BelleAqua') && (
						<a href="">
							<div className="tile">Logo klok aanpassen</div>
						</a>
					)}
					{validate('BelleAqua') && (
						<a href="">
							<div className="tile">Logo tijd aanpassen</div>
						</a>
					)}
				</div>
			</div>
			<div>
				{validate('BelleAqua') && <h2>Tools</h2>}
				<div className="flex">
					{validate('BelleAqua') && (
						<a href="">
							<div className="tile">Image Renamer</div>
						</a>
					)}
				</div>
			</div>
		</>
	);
}
