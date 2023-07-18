import React from 'react';
import ImageGallery from 'react-image-gallery';

function Details() {
	const eventDate = process.env.REACT_APP_EVENT_DATE as string;
	const eventStreetAddress = process.env.REACT_APP_EVENT_STREET_ADDRESS as string;
	const eventCity = process.env.REACT_APP_EVENT_CITY as string;
	const emailAddress = process.env.REACT_APP_EMAIL_ADDRESS as string;

	const eventDateTime = process.env.REACT_APP_EVENT_DATETIME as string;
	const countdownDate = new Date(eventDateTime);
	const now = new Date();
	const utcNow = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
	const utcEnd = Date.UTC(countdownDate.getFullYear(), countdownDate.getMonth(), countdownDate.getDate());
	const daysAway = Math.floor((utcEnd - utcNow) / (1000 * 60 * 60 * 24));

	const galleryImages = [
		{original: '/images/img11.jpg'},
		{original: '/images/img12.jpeg'},
		{original: '/images/img13.JPG'},
		{original: '/images/img14.JPG'},
		{original: '/images/img15.JPG'},
		{original: '/images/img16.PNG'},
		{original: '/images/img17.JPG'},
		{original: '/images/img18.JPG'},
		{original: '/images/img19.jpeg'},
		{original: '/images/img20.jpeg'},
		{original: '/images/img21.jpeg'},
		{original: '/images/img22.jpg'},
		{original: '/images/img23.jpeg'},
		{original: '/images/img24.jpg'},
		{original: '/images/img25.jpg'},
		{original: '/images/img26.png'},
		{original: '/images/img27.jpg'},
		{original: '/images/img28.jpg'},
	];
	galleryImages.sort( () => Math.random() - 0.5 );

	return (
		<>
			<section className={"section fade-in"}>
				<div className={"flex-center"}>
					<div className="gallery-item img-lg">
						<img src={"/images/img01.jpg"} alt={""} />
					</div>
				</div>
			</section>

			<section className={"section mb-50 scroll-in"}>
				<div className={"flex-center"}>
					<div className="gallery-item img-md">
						<img src={"/images/img02.jpg"} alt={""} />
					</div>
				</div>
				<div className={"flex-center"}>
					<div className="gallery-item img-md">
						<img src={"/images/img03.jpg"} alt={""} />
					</div>
				</div>
			</section>

			<div className={"scroll-in flex-center text text-align-center border-rounded border-solid p-50 mb-50"}>
				<div className={"flex-center"}>
					<h2> A note to our guests... </h2>
					<p> Hello... </p>
				</div>
			</div>

			<section className={"scroll-in mb-50 gallery"}>
				<ImageGallery
					items={galleryImages}
					showThumbnails={false}
					autoPlay={true}
					showBullets={true}
					showFullscreenButton={false}
					slideInterval={4000}
					slideDuration={1000}
				/>
			</section>

			<div className={"scroll-in flex-center text text-align-center border-rounded border-solid p-50 mb-50"}>
				<div className={"flex-center mb-20"}>
					{daysAway > 0 ? <h2>Just { daysAway } days away! </h2> : <p/>}
					<ul className={"list text"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>

				<div className={"flex-center"}>
					<p className={"no-margin"}> Please RSVP using the form below by August 30th </p>
					<p className={"no-margin"}> You can reach out to us anytime at <a href={"mailto:" + emailAddress}>{ emailAddress }</a> </p>
				</div>

				<h2 className={"italic"}> We can't wait to celebrate with you! </h2>
			</div>
		</>
	);
}

export default Details;
