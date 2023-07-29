import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";

function App() {
	const [isVerified, setIsVerified] = useState(false);

	// Not the most secure thing ever, but just need a minimal, one-password entrypoint here
	const checkPasswordEntry = () => {
		const inputField = document.getElementById("password") as HTMLInputElement;
		const answer = inputField.value;

		if (answer === process.env.REACT_APP_APP_PASSWORD) {
			setIsVerified(true);
		} else {
			alert("Sorry, try again.");
			inputField.value = "";
		}
	};

	return (
		<div className={"container-fluid"}>
			<section className={"flex-center"}>
				<img className={"logo"} src={"/images/logo.png"} alt={"logo"}/>
			</section>

			{isVerified ? <Home/> :
				<div id={"login"}>
					<section className="mb-50 p-50">
						<div className="contact-form-container flex-center">
							<form className="password-form">
								<input id={"password"}/>
								<button className="right btn-submit" onClick={checkPasswordEntry}> Enter </button>
							</form>
						</div>
					</section>
				</div>
			}
		</div>
	)
}

export default App;
