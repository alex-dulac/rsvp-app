import Contact from "./Contact";
import Details from "./Details";
import Accommodations from "./Accommodations";
import Footer from "./Footer";

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
			<div className={"container-fluid fade-in"}>
				<Details/>
				<Contact/>
				<Accommodations/>
				<Footer/>
			</div>
		</>
	);
}

export default Home;
