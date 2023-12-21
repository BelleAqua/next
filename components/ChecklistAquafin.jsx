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

		for (const item of document.getElementById('aquafin-items').children) {
			item.classList.add('hidden');

			if (event.target.id == `${item.id}-button`) item?.classList.remove('hidden');
		}
	}

	function check(event) {
		event.target.classList.toggle('checked');
	}

	function reset() {
		for (const div of document.getElementsByClassName('checklist')) {
			for (const child of div.children) {
				child.classList.remove('checked');
			}
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

			{/* Axylit */}
			<div className="component" id="aa-data">
				<div className="toolbar flex">
					<div id="checklist-button" className="tab selected" onClick={openId}>
						Checklist
					</div>
					<div id="cmr-button" className="tab" onClick={openId}>
						CMR
					</div>
					<div id="logo-button" className="tab" onClick={openId}>
						Logo
					</div>
					<div id="schema-button" className="tab" onClick={openId}>
						Schema
					</div>
					<div id="reset-button" className="tab" onClick={reset}>
						Reset
					</div>
				</div>
				<div id="aquafin-items">
					<div className="checklist" id="checklist">
						<div onClick={check} className="checkbox">
							Telemetrie ~ users ~ users/groups ~ ✔️ Aquafin ❌ Alert
						</div>
						<div onClick={check} className="checkbox">
							Binnenwerk vastgezet
						</div>
						<div onClick={check} className="checkbox">
							Muurbevestiging in de kast (voetjes)
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
							Afdekplaat met bevestiging
						</div>
						<div onClick={check} className="checkbox">
							Blindplaatjes in afdekplaat
						</div>
						<div onClick={check} className="checkbox">
							Schema houder met sticker (Medium)
						</div>
						<div onClick={check} className="checkbox">
							Sticker ingevuld
						</div>
						<div onClick={check} className="checkbox">
							Elektrisch schema in document houder
						</div>
						<div onClick={check} className="checkbox">
							GSM n° op blad
						</div>
						<div onClick={check} className="checkbox">
							GSM kaart op blad nieten
						</div>
						<div onClick={check} className="checkbox">
							Blad volledig ingevuld ( KP nummer , werfadres , Benornummer , datum , ID )
						</div>
						<div onClick={check} className="checkbox">
							Foto van het invulblad mailen naar : magazijn@belleaqua.be
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

			{/* SAF mTele */}
			<div className="hidden component" id="as-data">
				<div className="toolbar flex">
					<div id="checklist-button" className="tab selected" onClick={openId}>
						Checklist
					</div>
					<div id="cmr-button" className="tab" onClick={openId}>
						CMR
					</div>
					<div id="logo-button" className="tab" onClick={openId}>
						Logo
					</div>
					<div id="schema-button" className="tab" onClick={openId}>
						Schema
					</div>
					<div id="reset-button" className="tab" onClick={reset}>
						Reset
					</div>
				</div>
				<div id="aquafin-items">
					<div className="checklist" id="checklist">
						<div className="checklist" id="checklist">
							<div onClick={check} className="checkbox">
								Telemetrie ~ users ~ users/groups ~ ✔️ Aquafin ❌ Alert
							</div>
							<div onClick={check} className="checkbox">
								Binnenwerk vastgezet
							</div>
							<div onClick={check} className="checkbox">
								Muurbevestiging in de kast (voetjes)
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
								Afdekplaat met kunstofmoeren
							</div>
							<div onClick={check} className="checkbox">
								Blindplaatjes in afdekplaat
							</div>
							<div onClick={check} className="checkbox">
								Schema houder met sticker (Medium)
							</div>
							<div onClick={check} className="checkbox">
								Sticker ingevuld
							</div>
							<div onClick={check} className="checkbox">
								Elektrisch schema in document houder
							</div>
							<div onClick={check} className="checkbox">
								GSM n° op blad
							</div>
							<div onClick={check} className="checkbox">
								GSM kaart op blad nieten
							</div>
							<div onClick={check} className="checkbox">
								Blad volledig ingevuld ( KP nummer , werfadres , Benornummer , datum , ID )
							</div>
							<div onClick={check} className="checkbox">
								Foto van het invulblad mailen naar : magazijn@belleaqua.be
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
			</div>

			{/* KEBRO */}
			<div className="hidden component" id="ak-data">
				<div className="toolbar flex">
					<div id="checklist-button" className="tab selected" onClick={openId}>
						Checklist
					</div>
					<div id="cmr-button" className="tab" onClick={openId}>
						CMR
					</div>
					<div id="logo-button" className="tab" onClick={openId}>
						Logo
					</div>
					<div id="schema-button" className="tab" onClick={openId}>
						Schema
					</div>
					<div id="reset-button" className="tab" onClick={reset}>
						Reset
					</div>
				</div>
				<div id="aquafin-items">
					<div className="checklist" id="checklist">
						<h1>KEBRO ombouw is alleen het binnenwerk!</h1>
						<div onClick={check} className="checkbox">
							Telemetrie ~ users ~ users/groups ~ ✔️ Aquafin ❌ Alert
						</div>
						<div onClick={check} className="checkbox">
							4 metalen hoekbevestiging
						</div>
						<div onClick={check} className="checkbox">
							4 plastieke hoekbesvestiging
						</div>
						<div onClick={check} className="checkbox">
							Antenne
						</div>
						<div onClick={check} className="checkbox">
							Afdekplaat + blindplaatjes + bevestigingsbussen
						</div>
						<div onClick={check} className="checkbox">
							Schema houder + sticker (medium)
						</div>
						<div onClick={check} className="checkbox">
							Sticker ingevuld
						</div>
						<div onClick={check} className="checkbox">
							Afdekplaat met deelbare afdekstrip in kast
						</div>
						<div onClick={check} className="checkbox">
							Ø16 Aardingsklem
						</div>
						<div onClick={check} className="checkbox">
							Elektrisch schema
						</div>
						<div onClick={check} className="checkbox">
							Aquafin sticker
						</div>
						<div onClick={check} className="checkbox">
							Identificatie blad volledig ingevuld ( KP nummer , werfadres , Benornummer , datum , ID nr rechts onderaan )
						</div>
						<div onClick={check} className="checkbox">
							Foto van het invulblad mailen naar : magazijn@belleaqua.be
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
		</div>
	);
}
