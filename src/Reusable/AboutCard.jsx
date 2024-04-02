// import React from 'react'
import PropTypes from "prop-types";

const AboutCard = ({ number, title, text }) => {
	return (
		<section className="flex flex-row items-start gap-1 py-2">
			<p className="font-bold">{number}</p>
			<div className="flex flex-col gap-2">
				<p className="font-bold">{title}</p>
				<p className="text-lg font-thin">{text}</p>
			</div>
		</section>
	);
};
AboutCard.propTypes = {
	number: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
};
export default AboutCard;
