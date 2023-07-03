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
			<div className={"flex-center text text-align-center border-rounded border-solid p-50 mb-50"}>
				<div className={"flex-center"}>
					{daysAway > 0 ? <p>Just { daysAway } days away!</p> : <p/>}
					<p> Please RSVP at your earliest convenience before August 30th </p>
					<p>We can be contacted anytime by sending us an email at <a href={"mailto:" + emailAddress}>{ emailAddress }</a> or by using the form below.</p>
					<p> We can't wait to see you! </p>
				</div>
			</div>

			<section className="contact mb-50 text">
				<div className="contact-form-container text">
					<form id="contact-form" className="contact-form" onSubmit={sendEmail}>
						<input type="text" name="name"/>
						<label className={"mb-30"}> Names</label>

						<input type="email" name="email" />
						<label className={"mb-30"}> Email</label>

						<input type="text" name="food" />
						<label className={"mb-50"}> Please list any dietary restrictions or preferences that we should know about</label>

						<input type="text" name="song" />
						<label className={"mb-50"}> Favorite Party Songs!</label>

						<br/><br/>
						<label> Message:</label>
						<textarea name="message" className={"mb-30 message-box border-rounded border-solid"} />

						<button type="button" className={"right btn-submit"}> Send </button>
					</form>
				</div>
			</section>

			<section className={"section mb-50"}>
				<div className={"flex-center"}>
					<div className="gallery-item img-lg">
						<img src={"/images/img04.jpg"} alt={""} />
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
