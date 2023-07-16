import React, {useRef, useState} from 'react';
import emailjs from "@emailjs/browser"

function Contact() {
	const names = process.env.REACT_APP_NAMES as string;

	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [contactFormEmail, setContactFormEmail] = useState("");

	const contactForm = useRef<HTMLFormElement>(null);
	const sendEmail = (e: any) => {
		e.preventDefault();

		if (contactForm.current
			&& contactForm.current.names.value !== ''
			&& contactForm.current.email.value !== ''
			&& contactForm.current.song.value !== ''
		) {
			emailjs.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
				contactForm.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
			).then(r => {
				setContactFormEmail(contactForm.current?.email?.value);
				setIsFormSubmitted(true);
			}
			).catch(err =>
				alert("There was an error with your RSVP submission. Please try again.")
			);
		} else {
			alert("Names, Email, and Favorite Party Song are all required fields :) ");
		}
	}

	return (
		<>
			{isFormSubmitted ?
				<>
					<div className={"fade-in flex-center text text-align-center border-rounded border-solid p-50 mb-50"}>
						<div className={"flex-center"}>
							<h2>We got your RSVP message!</h2>
							<p> If we need to reach out, we will use the email address provided: {contactFormEmail} </p>
							<p> Thank you! </p>
							<p> {names} </p>
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
							<label className={"mb-30"}> Names</label>

							<input type="email" name="email" />
							<label className={"mb-30"}> Email</label>

							<input type="text" name="food" />
							<label className={"mb-50"}> Please list any dietary restrictions or preferences that we should know about</label>

							<input type="text" name="song" />
							<label className={"mb-50"}> Favorite Party Song!</label>

							<br/><br/>
							<label> Message:</label>
							<textarea name="message" className={"mb-30 message-box border-rounded border-solid"} />

							<button type="submit" className={"right btn-submit"}> Send </button>
						</form>
					</div>
				</section>
			}
		</>
	);
}

export default Contact;
