import React from 'react';
import './PhotoDisplayTop.scss';

const PhotoDisplayTop = ({ subtextTop, textMain, subtextBottom }) => {
	return (
		<div className="photoWrapper">
			<div className="container">
				<div className="head subtext-top">
					<h2>{subtextTop}</h2>`
				</div>
				<div className="head text-main">
					<h1>{textMain}</h1>
				</div>
				<div className="head subtext-bottom">
					<h2>{subtextBottom}</h2>
				</div>
			</div>
		</div>
	);
};
export default PhotoDisplayTop;
