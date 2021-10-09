import React from 'react';
import { Table } from 'reactstrap';
import PriceItem from './PriceItem';

import './Prices.scss';
import {
	priceList,
	pricesIntroText,
	pricesBottomText,
} from '../../constants/Descriptions';

const Prices = () => {
	return (
		<div className="price-page">
			<div className="container">
				<div className="title">
					<h2>Cennik</h2>
				</div>
				<div className="info-section">
					<h4>{pricesIntroText}</h4>
				</div>
				<div className="table-section">
					<Table striped>
						<thead>
							<tr>
								<th>Nazwa usługi</th>
								<th>Cena</th>
							</tr>
						</thead>
						<tbody>
							{priceList.map((item, index) => (
								<PriceItem
									key={index}
									serviceName={item.name}
									price={item.price}
								/>
							))}
						</tbody>
					</Table>
				</div>
				<div className="info-section bottom">
					<h4>{pricesBottomText}</h4>
				</div>
			</div>
		</div>
	);
};

export default Prices;
