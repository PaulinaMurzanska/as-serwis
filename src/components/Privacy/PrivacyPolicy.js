import React from 'react';
import { policy } from '../../constants/Policy';

const PrivacyPolicy = () => {
	console.log('policy arr', policy);
	return (
		<div>
			<div className="container" style={{ paddingBottom: '40px' }}>
				<h3 style={{ textAlign: 'center', margin: '35px' }}>
					Polityka prywatności cookies
				</h3>
				<ol>
					{policy.map((item, index) => (
						<li style={{ marginBottom: '10px' }}>
							{item.name}
							{item.sublist.length > 0 && (
								<ul style={{ listStyleType: 'circle' }}>
									{item.sublist.map((subitem) => (
										<li>{subitem}</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ol>
				<span style={{ color: '#636363', fontSize: '1.5rem' }}>
					Regulamin został wykorzystany na naszej stronie dzięki
					uprzejmości{' '}
					<a
						href="https://ciasteczka.org.pl/"
						style={{ color: '#e4052e' }}
					>
						ciasteczka.org.pl
					</a>{' '}
				</span>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
