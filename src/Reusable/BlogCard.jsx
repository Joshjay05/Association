// import React from 'react'
import PropTypes from "prop-types";

const BlogCard = ({ src, alt, title, word, text }) => {
	return (
		<section className="flex flex-col relative">
			<article>
				<div className="z-10">
					<img src={src} alt={alt} />
				</div>
				<div className=" grid grid-auto-rows h-[78%] rounded w-[75%] absolute z-30 left-[10%] top-[60%] shadow  bg-slate-50 p-[16px] gap-2 ">
					<p className="text-pretty">{title}</p>
					<p className="text-pretty">{text}</p>
					<a href="url#">{word}</a>
				</div>
			</article>
		</section>
	);
};
BlogCard.propTypes = {
	src: PropTypes.string,
	word: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	alt: PropTypes.string,
};
export default BlogCard;
