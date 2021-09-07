import React from 'react';
import PhotoDisplayTop from '../sharedComponents/PhotoDisplayTop/PhotoDisplayTop';
import WelcomePageIntro from './WelcomePageIntro';

const WelcomePage = () => {
	return (
		<>
			<PhotoDisplayTop
				subtextTop="Przeglądy, konserwacja i serwis"
				textMain="Kotłów gazowych i kotłowni"
				subtextBottom="w Krakowie i okolicach"
			/>
			<WelcomePageIntro />
		</>
	);
};
export default WelcomePage;
