/** @format */

export default function Page() {
	return (
		<div className="flex-dir">
			<div id="tools" className="col">
				<button className="btn">nieuwe gebruiker</button>
				<input type="text" placeholder="zoek" className="login"></input>
			</div>

			<div id="overview" className="col">
				{/* {User.find().map(user => )} */}
			</div>
		</div>
	);
}
