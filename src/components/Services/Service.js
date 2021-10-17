import React from 'react';
import './Service.scss';

const Service = ({
	servicePhoto,
	serviceDescription,
	serviceTitle,
	reversed,
	id,
}) => {

	return (
		<div id={id} className={reversed ? 'service reversed' : 'service'}>
			<div
				className="photo"
				style={{ backgroundImage: `url(${servicePhoto})` }}
			/>
			<div className="service-description">
				<h3>{serviceTitle}</h3>
				<p>{serviceDescription}</p>
			</div>
		</div>
	);
};

export default Service;
