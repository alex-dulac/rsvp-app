import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";

function App() {
	const names = process.env.REACT_APP_NAMES;

	const [isVerified, setIsVerified] = useState(false);

	const checkPasswordEntry = () => {
		const inputField = document.getElementById("password") as HTMLInputElement;
		const answer = inputField.value;

		if (answer === process.env.REACT_APP_APP_PASSWORD) {
			setIsVerified(true);
		} else {
			alert("Sorry, try again.");
		}
	};

	return (
		<>
			{isVerified ? <Home/> :
				<div className={"tm-container-fluid fade-in"}>

					<section className="tm-login tm-mb-50 tm-p-50">
						<div className={"tm-about-header tm-flex-center"}>
							<h1>{ names }</h1>
						</div>

						<div className="tm-contact-form-container">
							<form className="tm-contact-form" onSubmit={checkPasswordEntry}>
								<input className={"verification-input"} id={"password"}/>
								<button type="submit" className="tm-right tm-btn-submit"> Submit </button>
							</form>
						</div>
					</section>
				</div>
			}
		</>
	)
}

export default App;
