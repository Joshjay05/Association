// import Button from "../Reusable/Button";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react";
const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [previousEmail, setPreviousEmail] = useState();
	const emailInputRef = useRef();
	const contactHandler = async (e) => {
		e?.preventDefault();

		const enteredEmail = emailInputRef.current.value;

		if (enteredEmail === "") {
			alert("Please enter an email address");
			return;
		}
		if (!enteredEmail.includes("@")) {
			alert("Error: Please enter a valid email address");
			return;
		}
		if (enteredEmail === previousEmail) {
			alert("Error: You've already subscribed with this email");
			return;
		}

		if (enteredEmail === emailInputRef.current.value) {
			alert("Subscribed successfully");
			console.log("Successful");
			// return;
		}
		setPreviousEmail(enteredEmail);
	};
	return (
		<footer
			id="contact"
			className="bg-[#2D2735] text-white py-6 px-12 mt-[8rem]">
			<section className="flex flex-row  md:flex-col sm:flex-col ">
				<article className=" sm:pb-6">
					<img src={logo} alt="" />
					<div className="flex flex-row gap-3 mt-8">
						<a href="" className="bg-[#f5f5f5] p-[4px] rounded-xl">
							<FaFacebook className="text-black" />
						</a>
						<a href="" className="bg-[#f5f5f5] p-[4px] rounded-xl">
							<FaInstagram className="text-black" />
						</a>
						<a href="" className="bg-[#f5f5f5] p-[4px] rounded-xl">
							<FaLinkedin className="text-black" />{" "}
						</a>
						<a href="" className="bg-[#f5f5f5] p-[4px] rounded-xl">
							<FaXTwitter className="text-black" />
						</a>
					</div>
				</article>
				<article className=" flex flex-row ml-[15%] gap-[8rem] md:flex-wrap  md:pt-10 sm:flex-wrap sm:ml-0 sm:pt-10">
					<ul className="list-none flex flex-col gap-8">
						<p>Links</p>
						<li>About Us</li>
						<li>Culture</li>

						<li>Gallery</li>
						<li>Volunteer</li>
					</ul>
					<ul className="list-none flex flex-col gap-8">
						<p>Support</p>
						<li>Contact</li>
						<li>FAQ</li>
					</ul>

					<ul className="list-none flex flex-col gap-6 sm:gap-3">
						<h4>Subscribe</h4>
						<p className="sm:text-sm">
							Subscribe to our newsletter for monthly insights, stories,
							opportunities to engage with the Itsekiri community.
						</p>
						<form
							onSubmit={contactHandler}
							className="flex flex-row  sm:flex-col sm:gap-4">
							<input
								type="email"
								placeholder="enter a valid email"
								ref={emailInputRef}
								className="py-[8px] px-[16%] rounded-xl text-black "
							/>
							<button
								type="submit"
								className="bg-[#E37619] rounded-xl py-[14px] px-[20px] text-[16px] shadow border-0 ml-[8%] sm:ml-1 cursor-pointer">
								Subscribe
							</button>
						</form>
						<p className="sm:text-sm">
							By subscribing you agree to with our Privacy Policy and provide
							consent to receive updates from our company.
						</p>
					</ul>
				</article>
			</section>
			<section className="flex flex-row mt-[60px] sm:flex-col">
				<article className="flex flex-row gap-4">
					<p className="sm:text-sm">Terms and Conditions</p>
					<p className="sm:text-sm"> Privacy Policy</p>
				</article>
				<article className="ml-[28rem] md:ml-1 sm:ml-1 sm:pt-8 sm:text-sm">
					© {currentYear} Itsekiri Association of Chicago . All rights
					reserved.
				</article>
			</section>
		</footer>
	);
};

export default Footer;
