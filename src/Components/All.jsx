// import React from 'react'
import ImageCard from "../Reusable/ImageCard";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

const All = () => {
	return (
		<div className="flex flex-row justify-center gap-4 mx-[]">
			<ImageCard
				src={first}
				alt={"first"}
				title={"Itsekiri Cultural Day"}
				text="Come and experience our amazing cultural day."
				time={"Sat, Mar 19 9:00 AM"}
			/>
			<ImageCard
				src={second}
				alt={"first"}
				title={"Itsekiri Cultural Day"}
				text="Come and experience our amazing cultural day."
				time={"Sat, Mar 19 9:00 AM"}
			/>
			<ImageCard
				src={third}
				alt={"first"}
				title={"Itsekiri Cultural Day"}
				text="Come and experience our amazing cultural day."
				time={"Sat, Mar 19 9:00 AM"}
			/>
		</div>
	);
};

export default All;
