import Button from "../Reusable/Button";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="bg-[#2D2735] text-white py-6 px-12 mt-[8rem]">
			<section className="flex flex-row  ">
				<article className="">
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
				<article className=" flex flex-row ml-[15%] gap-[8rem]">
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

					<ul className="list-none flex flex-col gap-6">
						<h4>Subscribe</h4>
						<p>
							Subscribe to our newsletter for monthly insights, stories,
							opportunities to engage with the Itsekiri community.
						</p>
						<li className="flex flex-row ">
							<input type="text" className="py-[8px] px-[16%] rounded-xl " />{" "}
							<Button className="bg-[#E37619] rounded-xl py-[14px] px-[20px] text-[16px] shadow border-0 ml-[8%]">
								Subscribe
							</Button>
						</li>
						<p>
							By subscribing you agree to with our Privacy Policy and provide
							consent to receive updates from our company.
						</p>
					</ul>
				</article>
			</section>
			<section className="flex flex-row mt-[60px]">
				<article className="flex flex-row gap-4">
					<p>Terms and Conditions</p>
					<p>Privacy Policy</p>
				</article>
				<article className="ml-[42%]">
					© {currentYear} Itsekiri Association of Chicago . All rights
					reserved.
				</article>
			</section>
		</footer>
	);
};

export default Footer;
