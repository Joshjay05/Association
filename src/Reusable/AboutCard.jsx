// import React from 'react'
import PropTypes from "prop-types";

const AboutCard = ({ number, title, text }) => {
	return (
		<section className="flex flex-row items-start gap-[14px] py-2">
			<p className="font-bold lg:text-[24px]">{number}</p>
			<div className="flex flex-col gap-2">
				<p className="font-bold lg:text-[24px]">{title}</p>
				<p className="text-[18px] ">{text}</p>
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
