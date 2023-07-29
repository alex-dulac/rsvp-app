import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser"

function Contact() {
	const names = process.env.REACT_APP_NAMES as string;

	const [submittingForm, setSubmittingForm] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [contactFormEmail, setContactFormEmail] = useState("");

	const contactForm = useRef<HTMLFormElement>(null);
	const sendEmail = (e: any) => {
		e.preventDefault();

		if (contactForm.current
			&& contactForm.current.names.value !== ''
			&& contactForm.current.email.value !== ''
			&& contactForm.current.song.value !== ''
		) {
			setSubmittingForm(true);
			const formElements = Array.from(contactForm.current.elements);
			formElements.forEach(element => element.setAttribute('readonly', 'true'));

			emailjs.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
				contactForm.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
			).then(r => {
				setContactFormEmail(contactForm.current?.email?.value);
				setSubmittingForm(false);
				setFormSubmitted(true);
				const contactDiv = document.getElementById('contactDiv');
				if (contactDiv) {
					window.scrollTo({top: contactDiv.offsetTop - 50, behavior: "smooth", })
				}
			}
			).catch(err => {
				alert("There was an error with your RSVP submission. Please try again.");
				setSubmittingForm(false);
				formElements.forEach(element => element.setAttribute('readonly', 'false'));
			});
		} else {
			alert("Names, Email, and Favorite Party Song are all required fields :) ");
		}
	}

	return (
		<div id={"contactDiv"}>
			{formSubmitted ?
				<>
					<div className={"fade-in flex-center text text-align-center border-rounded border-solid p-50 mb-50"}>
						<div className={"flex-center"}>
							<h2>We got your RSVP message!</h2>
							<p> If we need to reach out, we will use the email address provided: {contactFormEmail} </p>
							<p> Thank you! </p>
							<p className={"italic"}> {names} </p>
						</div>
					</div>
					<section className={"section mb-50 fade-in"}>
						<div className={"flex-center"}>
							<div className="gallery-item img-lg">
								<img src={"/images/img04.jpg"} alt={""}/>
							</div>
						</div>
					</section>
				</> :
				<section className="contact mb-50 text scroll-in">
					<div className="contact-form-container text">
						<form ref={contactForm} id="contact-form" className="contact-form" onSubmit={sendEmail}>
							<input type="text" name="names"/>
							<label> Names</label>

							<input type="email" name="email" />
							<label> Email</label>

							<input type="text" name="food" />
							<label> Please list any dietary restrictions or preferences that we should know about</label>

							<input type="text" name="song" />
							<label> Favorite Party Song!</label>

							<br/><br/>
							<label> Message:</label>
							<textarea name="message" className={"mb-30 message-box border-rounded border-solid"} />

							{submittingForm ?
								<button disabled={true} className={"right btn-submit"}> Sending... </button> :
								<button type="submit" className={"right btn-submit"}> Send </button>
							}
						</form>
					</div>
				</section>
			}
		</div>
	);
}

export default Contact;
