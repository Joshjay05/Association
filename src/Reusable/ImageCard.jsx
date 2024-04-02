// import React from 'react'
import PropTypes from "prop-types";
const ImageCard = ({
	src,
	alt,
	title,
	otherTitle,
	Description,
	text,
	time,
}) => {
	return (
		<section className="flex flex-col">
			<img src={src} alt={alt} className="w-full" />
			<div className="grid grid-flow-row gap-1 py-2">
				<p>{title}</p>
				<p className=" font-bold">{otherTitle}</p>
				<p className="text-pretty wrap px-[4%]">{Description}</p>

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
	otherTitle: PropTypes.string,
};
export default ImageCard;
