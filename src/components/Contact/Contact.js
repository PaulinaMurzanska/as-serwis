import React from 'react';
import PhotoDisplayTop from '../sharedComponents/PhotoDisplayTop/PhotoDisplayTop';
import contactPhoto from '../../images/contact.jpg';
import { ImMobile } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import './Contact.scss';
import { contactIntro, mail, tel } from '../../constants/Descriptions';

const Contact = () => {
	return (
		<>
			<PhotoDisplayTop
				subtextTop=""
				textMain="Kontakt"
				subtextBottom="Zapraszamy do kontaktu telefonicznie lub mailowo"
				coverPhoto={contactPhoto}
			/>
			<div className="container">
				<div className="contact-intro-section">{contactIntro}</div>
				<div className="contact-main-body">
					<div className="name-address-section">
						<div className="name">
							<h3>Jacek Pilas</h3>
							<p>Certyfikowany serwisant kotłów gazowych </p>
						</div>
						<div className="legals">
							<p>AS serwis </p>
							<small>NIP 681 197 11 14</small>
						</div>
					</div>
					<div className="contacts-section">
						<div className="address">
							<p>ul.Dożynkowa 158F/2</p>
							<p>31-234 Kraków</p>
						</div>
						<div className="tel">
							<ImMobile
								style={{
									color: '#e4052e',
									marginRight: '10px',
								}}
							/>
							<span>{tel}</span>
						</div>
						<div className="mail">
							<HiMail
								style={{
									color: '#e4052e',
									marginRight: '10px',
								}}
							/>
							<span>{mail}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contact;
