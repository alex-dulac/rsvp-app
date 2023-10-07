import React from 'react';

function Footer() {
	const link = process.env.REACT_APP_EVENT_REGISTRY as string;

	return (
		<>
			<div className={"registry"}>
				<div className={"scroll-in flex-center text text-align-center border-rounded border-solid mb-40 p-50"}>
					<div className={"flex-center"}>
						<p> Let 'em know how to <a href={link} target={"_blank"} rel="noreferrer">give you things</a>. </p>
					</div>
				</div>
			</div>
			<section className={"section scroll-in mb-50"}>
				<div className={"flex-center"}>
					<div className="gallery-item img-lg">
						<img src={"/images/img30.jpg"} alt={""} />
					</div>
				</div>
			</section>
			<div className={"closer"}>
				<div className={"scroll-in flex-center text text-align-center border-rounded border-solid mb-40"}>
					<div className={"flex-center"}>
						<h2 className={"italic"}> See you soon! </h2>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
