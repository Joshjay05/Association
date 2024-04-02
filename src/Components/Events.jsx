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
			<h1 className="text-center text-[#e3761a] text-2xl font-bold">
				Upcoming Events
			</h1>
			<h6 className="mx-[6%] my-3">Browsing Events</h6>
			<div className="flex flex-row gap-4 mx-[6%] my-3">
				<span
					className={`cursor-pointer   ${
						all ? "border-b-2 text-[#e3761a]" : "bg-gray-200 text-gray-50"
					} mr-2`}
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
						day ? "border-b-2 text-[#e3761a]" : "bg-gray-200 text-gray-50"
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
						thisWeek ? "border-b-2 text-[#e3761a]" : "bg-gray-200 text-gray-50"
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
						month ? "border-b-2 text-[#e3761a]" : " text-gray-50"
					} mr-2`}>
					Next month
				</span>
				<p>Project Education</p>
			</div>
			{all && <All />}
			{day && <All />}
			{month && <All />}

			<article className="flex flex-row justify-around relative mt-[8rem] ">
				<div className="flex flex-col  absolute top-[-10%] left-[5%] gap-1">
					<img src={secretary} alt="secretary" className=" items-center " />
					<p className="">Tsolaye Dorsu - Secretary</p>
				</div>
				<div className="flex flex-col gap-4  bg-[#2D2735] w-[54%]  h-[52vh] ml-[35%] py-[2%] px-[10%] text-justify leading-[2rem]">
					<h3 className="text-[#e3761a] text-[36px] font-bold">
						Community Engagement
					</h3>
					<h5 className="text-white text-[24px]">Member Spotlight</h5>
					<p className="text-sm/[18px] text-white leading-[2.5rem]">
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
