import React from 'react';
import ServiceTab from './ServiceTab';
import './WelcomePage.scss';
import './WelcomePageIntro.scss';
import tabPhoto1 from '../../images/maintenance.jpg';
import tabPhoto3 from '../../images/uthomatics.jpg';
import tabPhoto2 from '../../images/gas7.jpg';
import {
	tabTitle1,
	tabTitle2,
	tabTitle3,
	tabDescription1,
	tabDescription2,
	tabDescription3,
} from '../../constants/Descriptions';

const WelcomePageServisesTabs = () => {
	return (
		<div className="services-wrapper">
			<div className="services-row">
				<ServiceTab
					tabPhoto={tabPhoto1}
					tabTitle={tabTitle1}
					tabDescription={tabDescription1}
				/>
				<ServiceTab
					tabPhoto={tabPhoto2}
					tabTitle={tabTitle2}
					tabDescription={tabDescription2}
				/>
				<ServiceTab
					tabPhoto={tabPhoto3}
					tabTitle={tabTitle3}
					tabDescription={tabDescription3}
				/>
			</div>
		</div>
	);
};

export default WelcomePageServisesTabs;
