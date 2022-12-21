import React from 'react';
import './Lilli.css';
import pic from './images/IMG_0854.jpg';

const Lilli = (props) => {
	return (
		<section className="Lilli">
			<div className="Lilli-pictureFrame">
				<img src={props.pic} />
			</div>
			<div className="Lilli-poem">{props.love}</div>
		</section>
	);
};

export default Lilli;
