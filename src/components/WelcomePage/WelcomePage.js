import React from 'react';
import PhotoDisplayTop from '../sharedComponents/PhotoDisplayTop/PhotoDisplayTop';
import WelcomePageIntro from './WelcomePageIntro';
import welcomePagePhoto from "../../images/boiler-room.png";

const WelcomePage = () => {
	return (
		<>
			<PhotoDisplayTop
				subtextTop="Przeglądy, konserwacja i serwis"
				textMain="Kotłów gazowych i kotłowni"
				subtextBottom="w Krakowie i okolicach"
				coverPhoto={welcomePagePhoto}
			/>
			<WelcomePageIntro />
		
		</>
	);
};
export default WelcomePage;
