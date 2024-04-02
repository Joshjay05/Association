// import React from 'react'
import PropTypes from "prop-types";
const ImageCard = ({ src, alt, title, Description, text, time }) => {
	return (
		<section>
			<img src={src} alt={alt} />
			<div className="flex flex-col gap-1 py-2">
				<p>{title}</p>
				<p>{Description}</p>

				<p className="text-gray-50 w-[80%]">{text}</p>
				<p>{time}</p>
			</div>
		</section>
	);
};
ImageCard.propTypes = {
	src: PropTypes.string,
	Description: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	alt: PropTypes.string,
	time: PropTypes.string,
};
export default ImageCard;
