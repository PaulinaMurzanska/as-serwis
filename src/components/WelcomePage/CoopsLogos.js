import React from 'react';
import viessmann from '../../images/ff9bdd60d791d40ed010695af757c9ec_viessmann.jpg';
import vaillant from '../../images/Vaillant.jpg';
import dietrich from '../../images/edaad7c3b5261dc5491ee511f783bac2.jpeg';
import junkers from '../../images/2e774f1b0b3ccceaebb87de5c725be95_junkers.jpg';
import './CoopsLogos.scss';

const CoopsLogos = () => {
	return (
		<div className="logos-wrapper-outer">
			<h3>współpracujemy z najpopularniejsyzmi markami</h3>
			<div className="logos-wrapper-inner">
				<div className="logo">
					<img src={viessmann} alt="viessmann" />
				</div>
				<div className="logo">
					<img src={vaillant} alt="vaillant" />
				</div>
				<div className="logo">
					<img src={dietrich} alt="de dietrich" />
				</div>
				<div className="logo">
					<img src={junkers} alt="junkers" />
				</div>
			</div>
		</div>
	);
};

export default CoopsLogos;
