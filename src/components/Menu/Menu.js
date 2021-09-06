import React from 'react';
import './Menu.scss';

const Menu = () => {
	return (
		<section className="header">
			<div className="container">
				<div className="logo">logo</div>
				<div className="menu-wrapper">
					<ul className="menu-list">
						<li className="menu-item">o nas</li>
						<li className="menu-item">usługi</li>
						<li className="menu-item">cennik</li>
						<li className="menu-item">kontakt</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
export default Menu;
