import React from 'react';
import emailjs from "@emailjs/browser"

function Contact() {
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
			<div className={"tm-flex-center text text-align-center tm-border-rounded border-solid"}>
				<p> ~ Please RSVP at your earliest convenience ~ </p>
				<p>We can be contacted anytime by sending us an email at <a href={"mailto:" + emailAddress}>{ emailAddress }</a> or by using the form below.</p>
				<p> We can't wait to see you! </p>
			</div>

			<section className="tm-contact tm-mb-50 text">
				<div className="tm-contact-form-container text">
					<form id="contact-form" className="tm-contact-form" onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Name" className={"text"} />
						<input type="email" name="email" placeholder="Email" className={"text"} />
						<textarea name="message" className="tm-mb-30" placeholder="Message" />
						<button type="submit" className="tm-right tm-btn-submit"> Send </button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Contact;
