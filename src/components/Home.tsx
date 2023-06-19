import React from 'react';
import Contact from "./Contact";
import Details from "./Details";

function Home() {
	return (
		<>
			<div className={"container-fluid fade-in"}>
				<Details/>
				<Contact/>
			</div>
		</>
	);
}

export default Home;
