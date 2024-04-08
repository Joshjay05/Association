// import React from 'react'

import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Events from "./Components/Events";
import Membership from "./Components/Membership";
import NewsUpdates from "./Components/NewsUpdates";
import Volunteer from "./Components/Volunteer";
// import Navbar from "./Components/Header";
import Header from "./Components/Header";

const LandingPage = () => {
	return (
		<div className="z-1">
			<Header />
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
