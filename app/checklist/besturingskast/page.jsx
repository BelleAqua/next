/** @format */

'use client';

import validate from '@/models/validate';

export default function Kasten() {
	function openTile(event) {
		const tiles = document.getElementsByClassName('tile');

		for (const tile of tiles) {
			tile.classList.remove('selected');
		}

		const components = document.getElementsByClassName('component');

		for (const component of components) {
			component.classList.add('hidden');
		}

		event.target.classList.toggle('selected');

		document.getElementById(`${event.target.id}-data`).classList.toggle('hidden');
	}

	function openTab(event, id) {
		const tabs = document.getElementsByClassName('tabcontent');
		const components = document.getElementsByClassName('tabbutton');

		const tab = document.getElementById(id);

		for (const component of components) {
			component.classList.remove('tab-active');
		}

		for (const tab of tabs) {
			tab.classList.remove('active');
		}

		event.target.classList.add('tab-active');

		tab.classList.add('active');
	}

	return (
		<>
			<div className="flex">
				{validate('Aquafin', 'BelleAqua') && <div onClick={openTile} className="tile background" id="aquafin"></div>}
				{validate('BelleAqua') && <div onClick={openTile} className="tile background" id="belleaqua"></div>}
				{validate('HydroTechnic', 'BelleAqua') && <div onClick={openTile} className="tile background" id="hydrotechnic"></div>}
				{validate('Pidpa', 'BelleAqua') && <div onClick={openTile} className="tile background" id="pidpa"></div>}
			</div>
			{validate('Aquafin', 'BelleAqua') && (
				<div id="aquafin-data" className="hidden component">
					<div>Axylit</div>
					<div>SAF mTele</div>
					<div>KEBRO</div>
				</div>
			)}

			{validate('BelleAqua', 'BelleAqua') && <div id="belleaqua-data" className="hidden component"></div>}

			{validate('HydroTechnic', 'BelleAqua') && <div id="hydrotechnic-data" className="hidden component"></div>}

			{validate('Pidpa', 'BelleAqua') && <div id="pidpa-data" className="hidden component"></div>}
		</>
	);
}
