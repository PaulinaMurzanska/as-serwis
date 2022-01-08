import React from 'react';
import './Footer.scss';
import { ImMobile } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { BiCopyright } from 'react-icons/bi';
import { tel, mail } from '../../constants/Descriptions';
import logo from "../../images/LOGO1.PNG"


const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer-body">
					<div className="logo-section">
					<img src={logo} alt="AsSerwis" style={{width:'auto', height:"30px"}}/>
					</div>
					<div className="info-section">
						<div className="address">
							<h4>Jacek Pilas</h4>
							<span>ul. Dożynkowa 158F/2</span>
							<span>31-234 Kraków</span>
						</div>
						<div className="contacts">
							<div className="item phone">
								<ImMobile className="icon" />
								<span>{tel}</span>
							</div>
							<div className="item mail">
								<HiMail className="icon" />
								<span>{mail}</span>
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
