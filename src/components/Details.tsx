import React from 'react';

function Details() {
	const eventDate = process.env.REACT_APP_EVENT_DATE as string;
	const eventDateTime = process.env.REACT_APP_EVENT_DATETIME as string;
	const eventStreetAddress = process.env.REACT_APP_EVENT_STREET_ADDRESS as string;
	const eventCity = process.env.REACT_APP_EVENT_CITY as string;

	const countdownDate = new Date(eventDateTime).getTime();
	const now = new Date().getTime();
	const distance = countdownDate - now;
	const daysAway = Math.floor(distance / (1000 * 60 * 60 * 24));

	return (
		<>
			<section className={"tm-site-header tm-flex-center tm-mb-50"}>
				<img src={"/logo.png"} alt={"logo"}/>
			</section>

			<section className={"tm-about tm-p-50 tm-mb-50"}>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item city portraits">
						<img src={"/logo.png"} className={"img-fluid"}/>
					</div>
				</div>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item city portraits">
						<img src={"/logo.png"} className={"img-fluid"}/>
					</div>
				</div>
			</section>

			<div className={"tm-flex-center"}>
				{daysAway > 0 ? <p>Just { daysAway } days away!</p> : <p/>}
			</div>

			<section className={"tm-about tm-p-50 tm-mb-50 tm-border-rounded border-solid"}>
				<div className={"tm-about-header tm-flex-center"}>
					<h2>Details</h2>
				</div>
				<div className={"tm-about-text tm-flex-center"}>
					<ul className={"tm-mb-40 list text"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>
			</section>

			<div className={"tm-about-header tm-flex-center tm-mb-50"}>
				<img src={"/logo.png"}/>
			</div>

			<section className={"tm-about tm-p-50 tm-mb-50"}>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item city portraits">
						<img src={"/logo.png"} className={"img-fluid"}/>
					</div>
				</div>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item city portraits">
						<img src={"/logo.png"} className={"img-fluid"}/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Details;
