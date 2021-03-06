import React from 'react';
import ServiceTab from './ServiceTab';
import './WelcomePage.scss';
import './WelcomePageIntro.scss';
import tabPhoto1 from '../../images/handyman.png';
import tabPhoto2 from '../../images/instalation.png';
import tabPhoto3 from '../../images/heater1.png';
import {
	tabTitle1,
	tabTitle2,
	tabTitle3,
	tabDescription1,
	tabDescription2,
	tabDescription3,
	maintenanceId,
	installationId,
	authomaticsId
} from '../../constants/Descriptions';

const WelcomePageServisesTabs = () => {

	return (
		<div className="services-wrapper">
			<div className="services-row">
				<ServiceTab
					tabPhoto={tabPhoto1}
					tabTitle={tabTitle1}
					tabDescription={tabDescription1}
					idTag={maintenanceId}
			
					
				/>
				<ServiceTab
					tabPhoto={tabPhoto2}
					tabTitle={tabTitle2}
					tabDescription={tabDescription2}
					idTag={installationId}
					

				/>
				<ServiceTab
					tabPhoto={tabPhoto3}
					tabTitle={tabTitle3}
					tabDescription={tabDescription3}
					idTag={authomaticsId}
					

				/>
			</div>
		</div>
	);
};

export default WelcomePageServisesTabs;
