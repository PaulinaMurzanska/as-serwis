import React from 'react';
import './WelcomePageIntro.scss';
import { intro } from '../../constants/Descriptions';
import WelcomePageServisesTabs from './WelcomePageServisesTabs';
import CoopsLogos from './CoopsLogos';

const WelcomePageIntro = () => {
	return (
		<div className="welcome-page-intro">
			<div className="container">
				<div className="intro-title-wrapper">
					<div className="title">
						<h2>As Serwis</h2>
					</div>

					<h3>Twój zaufany serwisant</h3>
				</div>
				<p>{intro}</p>
				<WelcomePageServisesTabs />
				<CoopsLogos />
			</div>
		</div>
	);
};
export default WelcomePageIntro;
