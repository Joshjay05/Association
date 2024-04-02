// import React from 'react'
import logo from "../assets/logo.png";
import headerImage from "../assets/headerImg.png";
import Button from "../Reusable/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "../Hooks/UseMediaQuery";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
const Navbar = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	return (
		<header className="bg-[#2d2735] relative  md:h-100vh md:pb-10 md:pt-2 sm:pb-6 ">
			<nav
				className="flex flex-row items-center 
         py-2  mx-auto w-{80%} justify-between ">
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

						<Button
							href=""
							className="bg-[#E37619] rounded-md py-[14px] px-[20px] ml-8 border-0 border-transparent shadow text-white">
							Join Us Today
						</Button>
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
						className="flex justify-end p-12"
						onClick={() => setIsMenuToggled(!isMenuToggled)}>
						<ImCancelCircle className="h-6 w-6 text-gray-400" />
					</button>
					<div className="flex flex-col justify-between text-white text-[16px] gap-6 px-3 my-10 ">
						<a href="">About Us</a>
						<a href="">Culture</a>
						<a href="">Gallery</a>
						<a href="">Volunteer</a>
						<a href="">Contact</a>
					</div>

					<Button
						href=""
						className="bg-[#E37619] rounded-md py-[14px] px-[20px] ml-8 border-0 border-transparent shadow text-white mt-[8rem] cursor-pointer">
						Join Us Today
					</Button>
				</article>
			)}
			{/* end of Navbar */}
			{isAboveMediumScreens ? (
				<section className="flex flex-row justify-between pb-10 relative">
					<article className="text-white-400 absolute inset-y-[38%] left-[5.6%]  w-[90%] md:w-auto ">
						<h4 className="text-2xl md:text-sm lg:text-4xl  font-bold w-[60%]">
							Embrace Your <span className="bg-[#E37619] px-1 ">Heritage,</span>{" "}
							Enrich Your Connections
						</h4>
						<p className="text-xs md:text-base lg:text-lg leading-normal md:leading-[1.5em] tracking-normal py-3">
							Journey through Time, Tradition, and <br />
							Triumphs in the Heart of Itsekiri Culture.
						</p>
						<div className="flex flex-row gap-3">
							<Button
								href=""
								className="border-2 border-white-400 rounded-lg py-2 px-4 md:py-3 md:px-6  sm:shadow cursor-pointer">
								Discover Your Roots
							</Button>
							<Button
								href=""
								className="bg-[#E37619] rounded-lg py-2 px-4 md:py-3 md:px-6 text-base shadow border-0 cursor-pointer">
								{" "}
								Join Us Today
							</Button>
						</div>
					</article>
					<div
						className="w-[90%] h-[70%] "
						style={{ marginInlineStart: "27%" }}>
						<img
							src={headerImage}
							alt="header-image"
							className="h-[70%] w-full self-end"
						/>
					</div>
				</section>
			) : (
				<section className="flex flex-row justify-between pb-6 relative">
					<article className="flex flex-col justify-evenly text-white-400 absolute top-[20%]  md:top-[28%] sm:top-[5vh] sm:left-[7] left-[14.6%] justify-items-center ">
						<h4 className="text-[16px] w-[60%] font-bold sm:text-sm sm:pb-2">
							Embrace Your{" "}
							<span className="bg-[#E37619] px-1 sm:leading-6  ">
								Heritage,
							</span>{" "}
							Enrich Your Connections
						</h4>
						<p className="md:text-[12px] leading-[1.5em]  md:py-2 sm:text-xs sm:leading-3">
							Journey through Time, Tradition, and <br />
							Triumphs in the Heart of Itsekiri Culture.
						</p>
						<div className="flex flex-row gap-3 md:my-auto sm:mt-4">
							<Button
								href=""
								className="border-2 border-white-400 rounded-lg  shadow text-sm p-1 sm:p-1 cursor-pointer ">
								Discover Your Roots
							</Button>
							<Button
								href=""
								className="bg-[#E37619] rounded-lg py-[2%] px-[5%] text-[14px] shadow border-0 sm:p-1 sm:text-xs cursor-pointer ">
								{" "}
								Join Us Today
							</Button>
						</div>
					</article>
					<div
						className="w-[60%] h-[70%] "
						style={{ marginInlineStart: "40%" }}>
						<img
							src={headerImage}
							alt="header-image"
							className="h-[70%] w-full self-end"
						/>
					</div>
				</section>
			)}
		</header>
	);
};

export default Navbar;
