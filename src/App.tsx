import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";

function App() {const [isVerified, setIsVerified] = useState(false);

	// Not the most secure thing ever, but just need a minimal, one-password entrypoint here
	const checkPasswordEntry = () => {
		const inputField = document.getElementById("password") as HTMLInputElement;
		const answer = inputField.value;

		if (answer === process.env.REACT_APP_APP_PASSWORD) {
			setIsVerified(true);
			window.scrollTo({top: 0, behavior: 'smooth'});
		} else {
			alert("Sorry, try again.");
			inputField.value = "";
		}
	};

	return (
		<>
			{isVerified ? <Home/> :
				<div id={"login"} className={"container-fluid"}>

					<section className="mb-50 p-50">
						<div className={"flex-center"}>
							<img className={"logo"} src={"/images/logo.png"} alt=""/>
						</div>

						<div className="contact-form-container flex-center">
							<form className="password-form" onSubmit={checkPasswordEntry}>
								<input id={"password"}/>
								<button type="submit" className="right btn-submit"> Enter </button>
							</form>
						</div>
					</section>
				</div>
			}
		</>
	)
}

export default App;
