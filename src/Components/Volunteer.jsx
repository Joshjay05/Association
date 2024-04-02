// import React from 'react'
import Button from "../Reusable/Button";
import backgroundImage from "../assets/vol.png";
import volImage from "../assets/banner.png";
// import Membership from "./Membership";
const Volunteer = () => {
	return (
		<article
			className="mt-[8rem] lg:grid grid-cols-2  sm: flex sm:flex-row-reverse justify-self-center bg-cover bg-center relative "
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="text-white leading-[5rem] py-[10%] lg:pl-[12%] sm:w-full px-4">
				<h4>Volunteer Opportunities</h4>
				<p className="leading-[2.5rem] text-justify">
					Join us in organizing the much-anticipated Ugbajo Convention this
					year, an event that celebrates our heritage and reinforces the bonds
					of our community. We focus on creating a memorable experience that
					honors our traditions, strengthens our connections, and underscores
					our commitment to Itsekiri unity and welfare. Come, lend your hands
					and hearts, and be part of this incredible journey.
				</p>
				<Button
					// className="bg-[#E37619] border rounded-lg py-2 px-3"
					className="bg-[#E37619] rounded-lg py-[18px] px-[20px] text-[16px] shadow border-0">
					Get Involved
				</Button>
			</div>
			<div className="lg:absolute left-[60%] top-[-5.8%] sm:">
				<img src={volImage} alt="banner" className="sm:hidden" />
			</div>
		</article>
	);
};

export default Volunteer;
