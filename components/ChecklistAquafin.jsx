/** @format */

'use client';

import validate from '@/models/validate';

export default function ChecklistAquafin() {
	if (!validate('Aquafin', 'BelleAqua')) return;

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

	function openId(event) {
		for (const child of event.target.parentElement.children) {
			child.classList.remove('selected');
		}

		event.target.classList.add('selected');

		for (const item of document.getElementById('items').children) {
			item.classList.add('hidden');
		}

		document.getElementById(event.target.innerText.toLowerCase())?.classList.remove('hidden');
	}

	function check(event) {
		event.target.classList.toggle('checked');
	}

	function reset() {
		for (const child of document.getElementById('checklist').children) {
			child.classList.remove('checked');
		}
	}

	return (
		<div id="aquafin-data" className="hidden component">
			<div className="flex">
				<div id="aa" className="tile installation selected" onClick={(event) => openTile(event, 'installation')}>
					Axylit
				</div>
				<div id="as" className="tile installation" onClick={(event) => openTile(event, 'installation')}>
					SAF mTele
				</div>
				<div id="ak" className="tile installation" onClick={(event) => openTile(event, 'installation')}>
					KEBRO
				</div>
			</div>
			<div className="component" id="aa-data">
				<div className="toolbar flex">
					<div className="tab selected" onClick={openId}>
						Checklist
					</div>
					<div className="tab" onClick={openId}>
						CMR
					</div>
					<div className="tab" onClick={openId}>
						Logo
					</div>
					<div className="tab" onClick={openId}>
						Schema
					</div>
					<div className="tab" onClick={reset}>
						Reset
					</div>
				</div>
				<div id="items">
					<div className="" id="checklist">
						<div onClick={check} className="checkbox">
							Telemetrie ~ users ~ users/groups ~ ✔️ Aquafin ❌ Alert
						</div>
						<div onClick={check} className="checkbox">
							Binnenwerk vastgezet
						</div>
						<div onClick={check} className="checkbox">
							Voetjes in kast
						</div>
						<div onClick={check} className="checkbox">
							ID nr in kast
						</div>
						<div onClick={check} className="checkbox">
							Antenne vastzetten
						</div>
						<div onClick={check} className="checkbox">
							Patchkabel ingestokken
						</div>
						<div onClick={check} className="checkbox">
							Afdekplaat met deelbare afdekstrip in kast
						</div>
						<div onClick={check} className="checkbox">
							Binnenkant sticker ingevuld
						</div>
						<div onClick={check} className="checkbox">
							GSM n° op blad
						</div>
						<div onClick={check} className="checkbox">
							GSM kaart op blad nieten
						</div>
						<div onClick={check} className="checkbox">
							Blad volledig ingevuld ( KP nummer , werfadres , Benornummer , datum , ID nr rechts onderaan )
						</div>
						<div onClick={check} className="checkbox">
							Foto van het invulblad mailen naar : magazijn@belleaqua.be
						</div>
						<div onClick={check} className="checkbox">
							Elektrisch schema in document houder
						</div>
						<div onClick={check} className="checkbox">
							Sticker AQF vooraan
						</div>
					</div>
					<div className="hidden" id="cmr">
						cmr
					</div>
					<div className="hidden" id="logo">
						logo
					</div>
					<div className="hidden" id="schema">
						schema
					</div>
				</div>
			</div>
			<div className="hidden component" id="as-data">
				SAF mTele
			</div>
			<div className="hidden component" id="ak-data">
				KEBRO
			</div>
		</div>
	);
}
