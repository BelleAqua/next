/** @format */

'use client';

import validate from '@/models/validate';

export default function Main() {
	return (
		<>
			<div>
				{validate('BelleAqua', 'Aclima') && <h1>Mobiele installaties</h1>}
				<div className="flex">
					{validate('BelleAqua', 'Aclima') && (
						<a href="/mobiel/aclima">
							<div className="tile background" id="aclima"></div>
						</a>
					)}
				</div>
			</div>
			<div>
				{validate('BelleAqua', 'HydrTechnic', 'Aquafin', 'Pidpa') && <h1>Checklists</h1>}
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
				{validate('BelleAqua') && <h1>Tutorials</h1>}
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
				{validate('BelleAqua') && <h1>Tools</h1>}
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
