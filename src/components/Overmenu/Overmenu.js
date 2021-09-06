import React from 'react';
import './Overmenu.scss';
import { ImMobile } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
const Overmenu = () => {
	return (
		<section className="overmenu">
			<div className="container">
				<div className="item phone">
					<ImMobile className="icon" />
					<span>514 132 314</span>
				</div>
				<div className="item mail">
					<HiMail className="icon" />
					<span>p.murzanska@gmail.com</span>
				</div>
			</div>
		</section>
	);
};
export default Overmenu;
