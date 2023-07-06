import React from 'react';

function Accommodations() {
	return (
		<>
			<section className={"p-50 mb-50 border-rounded border-solid"}>
				<h1 className={"text-align-center underlined"}>Accommodation Options in the area</h1>
				<section className={"section"}>
					<div className={"flex-center"}>
						<h3 className={"underlined"}>
							Hotel 1
						</h3>
					</div>
					<div className={"flex-center"}>
						<p>Information about Hotel 1</p>
					</div>
				</section>

				<section className={"section mb-50"}>
					<div className={"flex-center"}>
						<h3 className={"underlined"}>
							Hotel 2
						</h3>
					</div>
					<div className={"flex-center"}>
						<ul className={"mb-40 list text"}>
							<li>Information about Hotel 2</li>
							<li>But as a list!</li>
						</ul>
					</div>
				</section>
			</section>
		</>
	);
}

export default Accommodations;
