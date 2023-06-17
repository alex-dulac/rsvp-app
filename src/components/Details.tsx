import React from 'react';
import ImageGallery from 'react-image-gallery';

function Details() {
	const eventDate = process.env.REACT_APP_EVENT_DATE as string;
	const eventStreetAddress = process.env.REACT_APP_EVENT_STREET_ADDRESS as string;
	const eventCity = process.env.REACT_APP_EVENT_CITY as string;

	const galleryImages = [
		{
			original: '/images/img2.jpg',
			thumbnail: '/images/img2.jpg',
		},
		{
			original: '/images/img03.jpg',
			thumbnail: '/images/img03.jpg',
		},
		{
			original: '/images/img1.jpg',
			thumbnail: '/images/img1.jpg',
		},
		{
			original: '/images/img4.jpg',
			thumbnail: '/images/img4.jpg',
		},
	];

	return (
		<>
			<section className={"tm-site-header tm-flex-center"}>
				<img src={"/images/logo.png"} alt={"logo"}/>
			</section>

			<section className={"tm-about"}>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item img-lg">
						<img src={"/images/img3.jpg"}/>
					</div>
				</div>
			</section>

			<section className={"tm-about tm-mb-50"}>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item img-md">
						<img src={"/images/img2.jpg"}/>
					</div>
				</div>
				<div className={"tm-flex-center"}>
					<div className="tm-gallery-item img-md">
						<img src={"/images/img03.jpg"}/>
					</div>
				</div>
			</section>

			<section className={"tm-about tm-p-50 tm-mb-50 tm-border-rounded border-solid"}>
				<div className={"tm-about-header tm-flex-center"}>
					<h2>Details</h2>
				</div>
				<div className={"tm-flex-center"}>
					<ul className={"tm-mb-40 list text"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>
			</section>

			<section className={"tm-about tm-p-50 tm-mb-50 tm-border-rounded border-solid"}>
				<div className={"tm-about-header tm-flex-center"}>
					<h2>Information</h2>
				</div>
				<div className={"tm-flex-center"}>
					<ul className={"tm-mb-40 list text"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>
			</section>

			<section className={"tm-mb-50"}>
				<ImageGallery
					items={galleryImages}
					autoPlay={true}
				/>
			</section>
		</>
	);
}

export default Details;
