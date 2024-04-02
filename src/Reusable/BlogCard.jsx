// import React from 'react'
import PropTypes from "prop-types";

const BlogCard = ({ src, alt, title, word, text }) => {
	return (
		<section className="flex flex-col relative">
			<article>
				<div className="z-10 sm:mb-[8rem] md:mb-[8rem]">
					<img src={src} alt={alt} />
				</div>
				<div className=" grid grid-auto-rows h-[78%] rounded w-[85%] absolute z-30 left-[10%] md:h-auto top-[60%] shadow  bg-slate-50 p-[8px] gap-2  sm:top-[50%] sm:h-auto">
					<p className="text-pretty">{title}</p>
					<p className="text-pretty">{text}</p>
					<a href="url#" className="text-[#E37619]">
						{word}
					</a>
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
