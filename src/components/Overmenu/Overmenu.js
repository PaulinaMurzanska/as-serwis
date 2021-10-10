import React from 'react';
import './Overmenu.scss';
import { ImMobile } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { tel, mail } from '../../constants/Descriptions';
const Overmenu = () => {
	return (
		<section className="overmenu">
			<div className="container">
				<div className="item phone">
					<ImMobile className="icon" />
					<span>{tel}</span>
				</div>
				<div className="item mail">
					<HiMail className="icon" />
					<span>{mail}</span>
				</div>
			</div>
		</section>
	);
};
export default Overmenu;
