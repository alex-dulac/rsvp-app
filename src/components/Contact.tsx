import React from 'react';
import emailjs from "@emailjs/browser"

function Contact() {
	const eventDateTime = process.env.REACT_APP_EVENT_DATETIME as string;
	const countdownDate = new Date(eventDateTime).getTime();
	const now = new Date().getTime();
	const daysAway = Math.floor((countdownDate - now) / (1000 * 60 * 60 * 24));

	const emailAddress = process.env.REACT_APP_EMAIL_ADDRESS as string;
	const sendEmail = (e: any) => {
		e.preventDefault();

		emailjs.sendForm(
			process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
			process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
			e.target,
			process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
		).then(r =>
			console.log(r)
		).catch(err =>
			console.log(err)
		);
	}

	return (
		<>
			<div className={"tm-flex-center text text-align-center tm-border-rounded border-solid tm-p-50 tm-mb-50"}>
				<div className={"tm-flex-center"}>
					{daysAway > 0 ? <p>Just { daysAway } days away!</p> : <p/>}
					<p> ~ Please RSVP at your earliest convenience ~ </p>
					<p>We can be contacted anytime by sending us an email at <a href={"mailto:" + emailAddress}>{ emailAddress }</a> or by using the form below.</p>
					<p> We can't wait to see you! </p>
				</div>
			</div>

			<section className="tm-contact tm-mb-50 text">
				<div className="tm-contact-form-container text">
					<form id="contact-form" className="tm-contact-form" onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Name" />
						<input type="email" name="email" placeholder="Email" />
						<input type="text" name="song" placeholder="Favorite Party Song" />
						<textarea name="message" className={"tm-mb-30 message-box"} placeholder="Message" />
						<button type="button" className={"tm-right tm-btn-submit"}> Send </button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Contact;
