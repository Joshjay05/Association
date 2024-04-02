/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import Button from "../Reusable/Button";
import AboutCard from "../Reusable/AboutCard";
import memberImage from "../assets/membership.png";

const Membership = () => {
	return (
		<section>
			<h2 className="text-center text-[#E37619] text-[36px] my-6 font-bold">
				Membership Information
			</h2>
			<article className="grid grid-cols-2 sm:flex sm:flex-col mx-[4%] gap-12">
				{/* left */}
				<div className="flex flex-col gap-4">
					<img src={memberImage} alt="membershipImage" />
					<div className="leading-[3rem]">
						<h3>Membership and Benefits</h3>
						<p className="leading-[2.5rem] my-[12px]">
							Embrace your Itsekiri heritage by joining our General Membership—a
							community that welcomes every Itsekiri and friend of Itsekiri
							culture. As a member, you'll engage in preserving and celebrating
							our rich traditions through a variety of cultural events, have
							access to valuable networking opportunities, and play a pivotal
							role in our collective efforts to uplift and support our people
							both in Chicago and back home. Discover the joys of staying
							connected to your roots and the rewards of contributing to the
							vibrancy of Itsekiri culture. Join us and enrich not just your own
							life but the fabric of our entire community.
						</p>
						<Button className="bg-[#E37619] border text-white rounded-lg py-[24px] px-[16px] text-[16px]">
							Become a Member
						</Button>
					</div>
				</div>
				{/* right */}
				<div className="flex flex-col gap-3">
					<div className="flex flex-col gap-3 py-2">
						<h4>Joining Process</h4>
						<p>
							Becoming a member is easy. Follow our step-by-step guide or click
							here to start your journey with us today.
						</p>
					</div>
					<AboutCard
						number="01."
						title="Access the Form"
						text="Becoming a member is easy. Follow our step-by-step guide or click here to start your journey with us today. . "
					/>
					<AboutCard
						number="02."
						title="Access the Form"
						text="Navigate to our online Membership Form directly on our website. . "
					/>
					<AboutCard
						number="03."
						title="Fill in Details.  "
						text="Provide your personal details, Itsekiri heritage information, and express your interests and potential contributions.. .  "
					/>
					<AboutCard
						number="04."
						title="Await Confirmation"
						text="Receive an immediate email confirmation of your application receipt. . "
					/>
					<AboutCard
						number="05."
						title="Approval & Welcome"
						text="Our team will review your application and send a welcome packet with full membership details, benefits, and upcoming events within one week. . "
					/>
					<AboutCard
						number="06."
						title="Get Involved"
						text="With confirmation, you’ll gain immediate access to member-exclusive resources and a calendar of events so you can start participating right away. . "
					/>
				</div>
			</article>
		</section>
	);
};

export default Membership;
