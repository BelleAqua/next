/** @format */

'use client';

import validate from '@/models/validate';
import ChecklistAquafin from '@/components/ChecklistAquafin';
import ChecklistBelleAqua from '@/components/ChecklistBelleAqua';

export default function Kasten() {
	function openTile(event, name) {
		const tiles = document.getElementsByClassName('tile');

		for (const tile of tiles) {
			if (tile.classList.contains(name)) tile.classList.remove('selected');
		}

		for (const child of event.target.parentElement.children) {
			const component = document.getElementById(`${child.id}-data`);
			component.classList.add('hidden');
		}

		event.target.classList.add('selected');

		document.getElementById(`${event.target.id}-data`)?.classList.toggle('hidden');
	}

	return (
		<>
			<div className="flex">
				{validate('Aquafin', 'BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="aquafin"></div>}
				{validate('BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="belleaqua"></div>}
				{validate('HydroTechnic', 'BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="hydrotechnic"></div>}
				{validate('Pidpa', 'BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="pidpa"></div>}
			</div>

			<ChecklistAquafin />

			<ChecklistBelleAqua />

			{validate('HydroTechnic', 'BelleAqua') && <div id="hydrotechnic-data" className="hidden component"></div>}

			{validate('Pidpa', 'BelleAqua') && <div id="pidpa-data" className="hidden component"></div>}
		</>
	);
}
