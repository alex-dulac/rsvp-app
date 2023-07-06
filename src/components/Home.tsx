import React from 'react';
import Contact from "./Contact";
import Details from "./Details";
import Accommodations from "./Accommodations";

function Home() {
	return (
		<>
			<div className={"container-fluid fade-in"}>
				<Details/>
				<Contact/>
				<Accommodations/>
			</div>
		</>
	);
}

export default Home;
