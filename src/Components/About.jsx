/* eslint-disable react/no-unknown-property */
import thum from "../assets/poster.png";
import abt from "../assets/About.png";
import AboutCard from "../Reusable/AboutCard";
// import Button from "../Reusable/Button";
import play from "../assets/play.png";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player";
const About = () => {
	return (
		<main
			id="about"
			className="my-[8rem] flex flex-col justify-center items-center px-[6%] gap-6">
			{/* top section */}
			<article className="flex flex-row  items-center justify-between md:flex-col sm:grid sm:grid-flow-row gap-4">
				<div className="flex flex-col w-1/2  md:w-full sm:w-full gap-4 justify-center my-[4rem]">
					<h4 className="text-[36px] text-[#E37619] sm:text-[28px]">
						About The Association
					</h4>
					<p className="text-lg leading-[2rem] text-justify">
						At the heart of Chicago, the Itsekiri Association is dedicated to
						preserving and promoting the rich Itsekiri culture and traditions.
						As Itsekiris in the USA, we unite to celebrate our heritage, connect
						with our roots, and contribute positively to our community in
						Nigeria and beyond.
					</p>
					<p className="text-lg leading-[1.5rem] text-justify ">
						Dive into our story with a video showcasing our vibrant community
						events, cultural workshops, and contributions to our homeland,
						encapsulating our journey and impact.
					</p>
				</div>
				<div className="relative  md:w-full">
					<img src={thum} alt="" className="w-full" />
					<img
						src={play}
						alt=""
						className="absolute top-[40%] left-[40%] h-[20%] shadow"
					/>
				</div>
			</article>
			{/* bottom section */}
			<section>
				<h4 className="text-[#E37619] text-[36px] my-4 ml-[51%] md:ml-2 md:text-xl sm:ml-1 sm:text-lg">
					Why Join Our Community?
				</h4>
				<article className="flex flex-row  sm:flex-col md:flex-col justify-between gap-8">
					<div className="w-1/2 md:w-full sm:w-full">
						<img src={abt} alt="about-us" className="md:w-full sm:w-full" />
					</div>
					<div className=" w-1/2 md:w-full sm:w-full">
						<span className="">
							<AboutCard
								number="01."
								title="Networking Opportunities"
								text="Connect with Itsekiris in Chicago and surrounding areas and build personal and professional networks. "
							/>
							<AboutCard
								number="02."
								title="Professional Development"
								text="Attend our monthly gatherings that contribute to your personal and professional growth. "
							/>
							<AboutCard
								number="03."
								title="Community Service.  "
								text="Participate in initiatives that give back to our community in Nigeria, making a tangible difference.  "
							/>
							<AboutCard
								number="04."
								title="Member Testimonials"
								text="Being part of the Itsekiri Association of Chicago has given me a sense of belonging and an opportunity to contribute to our homeland's development. It's a powerful connection to our roots.-A satisfied member. "
							/>
						</span>
						<div className="lg:my-[4rem] md:my-[30px] sm:my-[2rem]">
							<Link
								to="reg"
								className="bg-[#E37619] border rounded-lg py-[18px] px-[24px] text-white text-[16px] ml-3 mt-6 cursor-pointer">
								Join Our Community Today
							</Link>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
};

export default About;
