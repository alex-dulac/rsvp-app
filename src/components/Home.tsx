import Contact from "./Contact";
import Details from "./Details";
import Accommodations from "./Accommodations";
import Footer from "./Footer";
import { PostEvent } from "./PostEvent";

function Home() {
	const displayElement = () => {
		const className = 'active';
		const elements = document.querySelectorAll('.scroll-in');
		for (let i = 0; i < elements.length; i++) {
			const windowHeight = window.innerHeight;
			const elementTop = elements[i].getBoundingClientRect().top;
			const elementVisible = 150;
			if (elementTop < windowHeight - elementVisible && !elements[i].classList.contains(className)) {
				elements[i].classList.add(className);
			}
		}
	};
	window.addEventListener('scroll', displayElement);

	return (
		<>
			{/*
			Components for the RSVP form and event details
				<Details/>
				<Contact/>
				<Accommodations/>
				<Footer/>
			*/}

			{/* if the event has occurred and you have pictures available, use this component to get photos from Google Drive */}
			<PostEvent/>
		</>
	);
}

export default Home;
