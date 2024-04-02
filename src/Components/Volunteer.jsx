// import React from 'react'
import Button from "../Reusable/Button";
import backgroundImage from "../assets/vol.png";
import volImage from "../assets/banner.png";
const Volunteer = () => {
	return (
		<article
			className="mt-[8rem] grid grid-cols-2 justify-self-center bg-cover bg-center h-[60vh] relative "
			style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="text-white leading-[5rem] py-[12%] pl-[12%]">
				<h4>Volunteer Opportunities</h4>
				<p className="leading-[2.5rem] text-justify">
					Join us in organizing the much-anticipated Ugbajo Convention this
					year, an event that celebrates our heritage and reinforces the bonds
					of our community. We focus on creating a memorable experience that
					honors our traditions, strengthens our connections, and underscores
					our commitment to Itsekiri unity and welfare. Come, lend your hands
					and hearts, and be part of this incredible journey.
				</p>
				<Button className="bg-[#e3761a] border rounded-lg py-2 px-3">
					Get Involved
				</Button>
			</div>
			<div className="absolute left-[60%] top-[-18%]">
				<img src={volImage} alt="banner" className="h-[71vh]" />
			</div>
		</article>
	);
};

export default Volunteer;
