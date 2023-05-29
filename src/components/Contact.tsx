import React from 'react';
import emailjs from "@emailjs/browser"

function Contact() {
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
			<section className="tm-contact tm-mb-50 tm-bgcolor-2 tm-border-rounded">
				<div className="tm-contact-form-container">
					<form id="contact-form" className="tm-contact-form" onSubmit={sendEmail}>
						<input type="text" name="name" placeholder="Name" className={"tm-bgcolor-2"}/>
						<input type="email" name="email" placeholder="Email" className={"tm-bgcolor-2"}/>
						<textarea name="message" className="tm-mb-30" placeholder="Message" />
						<button type="submit" className="tm-right tm-btn-submit"> Send </button>
					</form>
				</div>
			</section>
		</>
	);
}

export default Contact;
