import React from 'react';

function Accommodations() {
	return (
		<>
			<section className={"p-50 mb-50 border-rounded border-solid scroll-in"}>
				<h2 className={"text-align-center underlined mb-50"}>Accommodation Options in the area</h2>

				<section className={"section mb-20"}>
					<div className={"flex-center"}>
						<h4 className={"underlined no-margin"}>
							Hotel 1
						</h4>
					</div>
					<div className={"flex-center"}>
						<ul className={"list text italic"}>
							<li>Town, State</li>
						</ul>
					</div>
				</section>

				<section className={"section mb-20"}>
					<div className={"flex-center"}>
						<h4 className={"underlined no-margin"}>
							Hotel 2
						</h4>
					</div>
					<div className={"flex-center"}>
						<ul className={"list text italic"}>
							<li>Town, State</li>
						</ul>
					</div>
				</section>

				<section className={"section mb-20"}>
					<div className={"flex-center"}>
						<h4 className={"underlined no-margin"}>
							<a href={"https://www.airbnb.com/"} target={"_blank"} rel="noreferrer">Airbnb</a>
						</h4>
					</div>
					<div className={"flex-center"}>
						<ul className={"list text italic"}>
							<li>Various rentals in the area</li>
						</ul>
					</div>
				</section>
			</section>
		</>
	);
}

export default Accommodations;
