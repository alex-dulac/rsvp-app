import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";
import axios from "axios";

function App() {
	const [isVerified, setIsVerified] = useState(false);

	async function checkPassword(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		const inputField = document.getElementById("password") as HTMLInputElement;
		const input = inputField.value;

		const response = await axios.get(process.env.REACT_APP_BACKEND_BASE_URL + 'login', {params: {input: input}});

		if (response.data.correctPassword) {
			setIsVerified(true);
		} else {
			alert("Sorry, try again.");
			inputField.value = "";
		}
	}

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
								<button className="right btn-submit" onClick={(event) => { checkPassword(event) }}> Enter </button>
							</form>
						</div>
					</section>
				</div>
			}
		</div>
	)
}

export default App;
