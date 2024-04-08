/* eslint-disable no-mixed-spaces-and-tabs */
import Button from "../Reusable/Button";
import logo from "../assets/logo.png";
import useMediaQuery from "../Hooks/UseMediaQuery";
// const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
import { Link } from "react-router-dom";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	return (
		<div>
			<nav
				className="bg-[#2d2735] flex flex-row items-center 
         pt-2  mx-auto w-{80%} justify-between z-30 ">
				<article className="pl-[4%]">
					<img src={logo} alt="logo" className="md:h-[6vh] sm:h-6" />
				</article>
				{isAboveMediumScreens ? (
					<article className="flex flex-row gap-4 items-center mr-[6rem] ">
						<div className="flex flex-row justify-between text-white text-[16px] gap-6 ">
							<a href="#about">About Us</a>
							<a href="">Culture</a>
							<a href="#gallery">Gallery</a>
							<a href="#volunteer">Volunteer</a>
							<a href="#contact">Contact</a>
						</div>

						<Link to="reg">
							<Button
								href=""
								className="bg-[#E37619] rounded-md py-[14px] px-[20px] ml-8 border-0 border-transparent shadow text-white">
								Join Us Today
							</Button>
						</Link>
					</article>
				) : (
					<div className="rounded-full bg-secondary-500 p-2 mr-[1rem] ">
						<RxHamburgerMenu
							className="h-4 w-4 text-white sm:h-3 sm:w-3"
							onClick={() => setIsMenuToggled(!isMenuToggled)}
						/>
					</div>
				)}
			</nav>
			{!isAboveMediumScreens && isMenuToggled && (
				<article className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
					<button
						className="flex justify-end p-2"
						onClick={() => setIsMenuToggled(!isMenuToggled)}>
						<ImCancelCircle className="h-6 w-6 sm:h-4 sm:w-4 text-gray-400" />
					</button>
					<div className="flex flex-col justify-between text-[#2d2735] text-[16px] gap-6 px-3 my-10 ">
						<a href="#about">About Us</a>
						<a href="">Culture</a>
						<a href="#gallery">Gallery</a>
						<a href="#volunteer">Volunteer</a>
						<a href="#contact">Contact</a>
					</div>
					<Link to="reg">
						<Button
							onClick={() => setIsMenuToggled(!isMenuToggled)}
							href=""
							className="bg-[#E37619] rounded-md py-[14px] px-[20px] ml-8 border-0 border-transparent shadow text-white mt-[8rem] cursor-pointer">
							Join Us Today
						</Button>
					</Link>
				</article>
			)}
			{/* end of Navbar */}
		</div>
	);
};

export default Nav;
