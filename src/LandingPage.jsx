// import React from 'react'

import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Events from "./Components/Events";
import Membership from "./Components/Membership";
import NewsUpdates from "./Components/NewsUpdates";
import Volunteer from "./Components/Volunteer";

const LandingPage = () => {
	return (
		<div>
			<About />
			<Events />
			<Volunteer />
			<Membership />
			<NewsUpdates />
			<Blogs />
		</div>
	);
};

export default LandingPage;
