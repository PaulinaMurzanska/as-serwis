import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceTab.scss';

const ServiceTab = ({ tabPhoto, tabTitle, tabDescription,idTag}) => {
	return (
		<div className="tab-frame">
			<div
				className="photo"
				style={{ backgroundImage: `url(${tabPhoto})` }}
			/>
			<div className="description">
				<h4>{tabTitle}</h4>
				<p>{tabDescription}</p>
			</div>
			<Link path to={`usługi/#${idTag}`}>
				<span>więcej...</span>
			</Link>
		</div>
	);
};

export default ServiceTab;
