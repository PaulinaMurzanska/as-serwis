import React from 'react';
import './Footer.scss';
import { ImMobile } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-body">
					<div className="logo-section">
						AS <small>serwis</small>
					</div>
					<div className="info-section">
						<div className="address">
							<h4>Jacek Pilas</h4>
							<span>ul.dożynkowa 158F/2</span>
							<span>31-234 Kraków</span>
						</div>
						<div className="contacts">
							<div className="item phone">
								<ImMobile className="icon" />
								<span>514 132 314</span>
							</div>
							<div className="item mail">
								<HiMail className="icon" />
								<span>p.murzanska@gmail.com</span>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-rights">
					<BiCopyright />
					{'  '}Wrzelkie prawa zastrzeżone 2021 Persolutions for AS
					serwis
				</div>
			</div>
		</div>
	);
};

export default Footer;
