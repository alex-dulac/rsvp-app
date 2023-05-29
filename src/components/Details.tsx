import React from 'react';

function Details() {
	const names = process.env.REACT_APP_NAMES as string;
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
			<section className={"tm-site-header tm-flex-center tm-bgcolor-2 tm-mb-50 tm-border-rounded"}>
				<h1>{ names }</h1>
				<h2>{ eventDate }</h2>
				{daysAway > 0 ? <p>Just { daysAway } days away!</p> : <p/>}
			</section>

			<section className={"tm-about tm-p-50 tm-bgcolor-2 tm-mb-50 tm-border-rounded"}>
				<div className={"tm-about-header tm-flex-center"}>
					<h2>Details</h2>
				</div>
				<div className={"tm-about-text tm-flex-center"}>
					<ul className={"tm-mb-40 list tm-text-white"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Details;
