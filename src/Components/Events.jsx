/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import secretary from "../assets/secretary.png";
import { useState } from "react";
import All from "./All";

const Events = () => {
	const [all, setAll] = useState(true);
	const [day, setDay] = useState(false);
	const [thisWeek, setThisWeek] = useState(false);
	const [month, setMonth] = useState(false);

	return (
		<section>
			<h1 className="text-center text-[#E37619] text-[36px] font-bold">
				Upcoming Events
			</h1>
			<h6 className="mx-[6%] my-3">Browsing Events</h6>
			<div className="flex flex-row gap-4 sm:gap-1 mx-[6%] my-3 sm:text-sm md:text-base">
				<span
					className={`cursor-pointer   ${
						all ? "border-b-2 text-[#E37619]" : "bg-gray-200 text-gray-50"
					} mr-2 sm:text-sm`}
					onClick={() => {
						setAll(true);
						setDay(false);
						setThisWeek(false);
						setMonth(false);
					}}>
					All
				</span>
				<span
					className={`cursor-pointer   ${
						day ? "border-b-2 text-[#E37619]" : "bg-gray-200 text-gray-50"
					} mr-2`}
					onClick={() => {
						setDay(true);
						setAll(false);
						setThisWeek(false);
						setMonth(false);
					}}>
					{" "}
					This Day
				</span>
				<span
					onClick={() => {
						setDay(false);
						setAll(false);
						setThisWeek(true);
						setMonth(false);
					}}
					className={`cursor-pointer   ${
						thisWeek ? "border-b-2 text-[#E37619]" : "bg-gray-200 text-gray-50"
					} mr-2`}>
					This week
				</span>
				<span
					onClick={() => {
						setDay(false);
						setAll(false);
						setThisWeek(false);
						setMonth(true);
					}}
					className={`cursor-pointer   ${
						month ? "border-b-2 text-[#E37619]" : " text-gray-50"
					} mr-2`}>
					Next month
				</span>
				<p>Project Education</p>
			</div>
			{all && <All />}
			{day && <All />}
			{month && <All />}

			<article className="flex flex-row  justify-around relative mt-[8rem] sm:flex-col-reverse md:flex-col-reverse ">
				<div className="flex flex-col lg:absolute md:flex  lg:top-[-6%] left-[5%] md:top-1  gap-4 ">
					<img
						src={secretary}
						alt="secretary"
						className=" items-center  md:h-[48vh] md:w-[100%] "
					/>
					<p className="sm:px-5 md:px-5">Tsolaye Dorsu - Secretary</p>
				</div>
				<div className="flex flex-col gap-4  bg-[#2D2735] lg:w-[54%]  lg:ml-[35%] md:w-full py-[2%] px-[10%]  md:px-6 text-justify leading-[2rem] sm:w-full sm:py-10">
					<h3 className="text-[#E37619] text-[36px] font-bold md:text-lg sm:text-base">
						Community Engagement
					</h3>
					<h5 className="text-white text-[24px] sm:text-sm">
						Member Spotlight
					</h5>
					<p className="lg:text-sm/[18px] text-white lg:leading-[2.5rem] md:leading-[1.5rem] md:text-sm sm:leading-[1.8rem] sm:text-xs sm:text-justify">
						We honor Tsolaye, whose remarkable dedication to education led our
						successful 'Back to School Drive'. Tsolaye's efforts ensured that
						dozens of children in Warri community were equipped with the
						necessary school supplies and resources to start their academic year
						on the right foot. This initiative reflects the heart of our
						Itsekiri values — supporting each other in educational pursuits and
						community well-being..
					</p>
				</div>
			</article>
		</section>
	);
};

export default Events;
