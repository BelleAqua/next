/** @format */

'use client';

import validate from '@/models/validate';
import Line from '@/components/Line';
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
			{/* <div className="flex">
				{validate('Aquafin', 'BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="aquafin"></div>}
				{validate('BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="belleaqua"></div>}
				{validate('HydroTechnic', 'BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="hydrotechnic"></div>}
				{validate('Pidpa', 'BelleAqua') && <div onClick={(event) => openTile(event, 'company')} className="tile background company" id="pidpa"></div>}
			</div>

			<ChecklistAquafin />

			<ChecklistBelleAqua />

			{validate('HydroTechnic', 'BelleAqua') && <div id="hydrotechnic-data" className="hidden component"></div>}

			{validate('Pidpa', 'BelleAqua') && <div id="pidpa-data" className="hidden component"></div>} */}
			<div>
				<img src="/logos/aquafin.png" alt="" className="banner" />
				<Line />
				<div className="flex">
					<div className="tile">axylit</div>
					<div className="tile">saf mtele</div>
					<div className="tile">kebro</div>
				</div>
			</div>
			<div>
				<img src="/logos/belleaqua.png" alt="" className="banner" />
				<Line />
				<div className="flex">
					<div className="tile">axylit</div>
					<div className="tile">saf mtele</div>
					<div className="tile">saf mtele mpp</div>
					<div className="tile">saf ztele</div>
				</div>
			</div>
			<div>
				<img src="/logos/hydrotechnic.png" alt="" className="banner" />
				<Line />
				<div className="flex">
					<div className="tile">axylit</div>
					<div className="tile">saf ztele</div>
					<div className="tile">saf ztele mpp</div>
					<div className="tile">kokosbiobed</div>
					<div className="tile">oxyfix</div>
				</div>
			</div>
			<div>
				<img src="/logos/pidpa.png" alt="" className="banner" />
				<Line />
				<div className="flex">
					<div className="tile">axylit</div>
					<div className="tile">saf ztele</div>
					<div className="tile">verkaveling</div>
				</div>
			</div>
		</>
	);
}
