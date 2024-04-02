/* eslint-disable react/no-unknown-property */
import thum from "../assets/poster.png";
import abt from "../assets/About.png";
import AboutCard from "../Reusable/AboutCard";
import Button from "../Reusable/Button";
// import ReactPlayer from "react-player";
const About = () => {
	return (
		<main className="mt-[50px] flex flex-col justify-center items-center px-[6%] gap-6">
			{/* top section */}
			<article className="flex flex-row justify-between">
				<div className="flex flex-col w-1/2 gap-4">
					<h4 className="">About The Association</h4>
					<p className="text-lg">
						At the heart of Chicago, the Itsekiri Association is dedicated to
						preserving and promoting the rich Itsekiri culture and traditions.
						As Itsekiris in the USA, we unite to celebrate our heritage, connect
						with our roots, and contribute positively to our community in
						Nigeria and beyond.
					</p>
					<p className="text-lg">
						Dive into our story with a video showcasing our vibrant community
						events, cultural workshops, and contributions to our homeland,
						encapsulating our journey and impact.
					</p>
				</div>
				<div>
					<video controls poster={thum} width="600">
						<source src="/path/to/video.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</article>
			{/* bottom section */}
			<section>
				<h4 className="text-[#e3761a] text-2xl my-4 ml-[51%]">
					Why Join Our Community?
				</h4>
				<article className="flex flex-row justify-between gap-8">
					<div className="w-1/2">
						<img src={abt} alt="about-us" className="h-[70%] w-[90%]" />
					</div>
					<div className=" w-1/2">
						<span className="">
							<AboutCard
								number="01"
								title="Networking Opportunities"
								text="Connect with Itsekiris in Chicago and surrounding areas and build personal and professional networks. "
							/>
							<AboutCard
								number="02"
								title="Professional Development"
								text="CAttend our monthly gatherings that contribute to your personal and professional growth. "
							/>
							<AboutCard
								number="03"
								title="Participate in initiatives that give back to our community in Nigeria, making a tangible difference.  "
								text="Participate in initiatives that give back to our community in Nigeria, making a tangible difference.  "
							/>
							<AboutCard
								number="04"
								title="Member Testimonials"
								text="Being part of the Itsekiri Association of Chicago has given me a sense of belonging and an opportunity to contribute to our homeland's development. It's a powerful connection to our roots.-A satisfied member. "
							/>
						</span>
						<div className="my-[20px]">
							<Button className="bg-[#e3761a] border rounded-lg py-[8px] px-[10px] text-white text-[16px] ml-3 mt-6">
								Join Our Community Today
							</Button>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
};

export default About;
