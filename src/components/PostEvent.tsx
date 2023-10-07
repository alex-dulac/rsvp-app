import React from 'react';
import ImageGallery from 'react-image-gallery';
import galleryItems from '../gallery-items';

function PostEvent() {
	const names = process.env.REACT_APP_NAMES as string;

	// Set up the image gallery
	const galleryImages = galleryItems;
	galleryImages.sort( () => Math.random() - 0.5 );

	return (
		<>
			<div className={"scroll-in flex-center text text-align-center border-rounded border-solid p-50 mb-50"}>
				<div className={"flex-center"}>
					<h2> A note to our guests after the event... </h2>
					<p> Here are some pictures... </p>
					<p className={"italic"}> {names} </p>
				</div>
			</div>

			<section className={"scroll-in mb-50 gallery"}>
				<ImageGallery
					items={galleryImages}
					showThumbnails={true}
					autoPlay={false}
					showFullscreenButton={false}
					slideInterval={4000}
					slideDuration={1000}
				/>
			</section>
		</>
	);
}

export default PostEvent;
