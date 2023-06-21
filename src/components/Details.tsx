import React from 'react';
import ImageGallery from 'react-image-gallery';

function Details() {
	const eventDate = process.env.REACT_APP_EVENT_DATE as string;
	const eventStreetAddress = process.env.REACT_APP_EVENT_STREET_ADDRESS as string;
	const eventCity = process.env.REACT_APP_EVENT_CITY as string;

	const galleryImages = [
		{
			original: '/images/img11.jpg',
		},
		{
			original: '/images/img12.jpeg',
		},
		{
			original: '/images/img13.JPG',
		},
		{
			original: '/images/img14.JPG',
		},
		{
			original: '/images/img15.JPG',
		},
		{
			original: '/images/img16.PNG',
		},
		{
			original: '/images/img17.JPG',
		},
		{
			original: '/images/img18.JPG',
		},
		{
			original: '/images/img19.jpeg',
		},
		{
			original: '/images/img20.jpeg',
		},
		{
			original: '/images/img21.jpeg',
		},
		{
			original: '/images/img22.jpg',
		},
		{
			original: '/images/img23.jpeg',
		},
	];
	galleryImages.sort( () => Math.random() - 0.5 );

	return (
		<>
			<section className={"flex-center"}>
				<img className={"logo"} src={"/images/logo.png"} alt={"logo"}/>
			</section>

			<section className={"section"}>
				<div className={"flex-center"}>
					<div className="gallery-item img-lg">
						<img src={"/images/img01.jpg"} alt={""} />
					</div>
				</div>
			</section>

			<section className={"section mb-50"}>
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

			<section className={"section p-50 mb-50 border-rounded border-solid"}>
				<div className={"flex-center"}>
					<h2>Details</h2>
				</div>
				<div className={"flex-center"}>
					<ul className={"mb-40 list text"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>
			</section>

			<section className={"section p-50 mb-50 border-rounded border-solid"}>
				<div className={"flex-center"}>
					<h2>Information</h2>
				</div>
				<div className={"flex-center"}>
					<ul className={"mb-40 list text"}>
						<li>{ eventStreetAddress }</li>
						<li>{ eventCity }</li>
						<li>{ eventDate }</li>
						<li>Ceremony 3pm</li>
					</ul>
				</div>
			</section>

			<section className={"mb-50 gallery"}>
				<ImageGallery
					items={galleryImages}
					showThumbnails={false}
					autoPlay={true}
					showBullets={true}
					showFullscreenButton={false}
				/>
			</section>
		</>
	);
}

export default Details;
