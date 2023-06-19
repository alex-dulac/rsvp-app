import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";

function App() {const [isVerified, setIsVerified] = useState(false);

	const checkPasswordEntry = () => {
		const inputField = document.getElementById("password") as HTMLInputElement;
		const answer = inputField.value;

		if (answer === process.env.REACT_APP_APP_PASSWORD) {
			const div = document.getElementById("login") as HTMLDivElement;
			div.className = "container-fluid fade-out";
			setIsVerified(true);
		} else {
			alert("Sorry, try again.");
			inputField.value = "";
		}
	};

	return (
		<>
			{isVerified ? <Home/> :
				<div id={"login"} className={"container-fluid"}>

					<section className="tm-login tm-mb-50 tm-p-50">
						<div className={"tm-about-header flex-center"}>
							<img src={"/images/logo.png"} alt=""/>
						</div>

						<div className="tm-contact-form-container">
							<form className="tm-contact-form" onSubmit={checkPasswordEntry}>
								<input id={"password"}/>
								<button type="submit" className="tm-right tm-btn-submit"> Enter </button>
							</form>
						</div>
					</section>
				</div>
			}
		</>
	)
}

export default App;
