// import React from 'react'
import logo from "../assets/logo.png";
import headerImage from "../assets/headerImg.png";
import Button from "../Reusable/Button";
const Navbar = () => {
	return (
		<header className="bg-[#2d2735] h-full">
			<nav
				className="flex flex-row items-center 
         py-2 mx-6 ">
				<article>
					<img src={logo} alt="logo" />
				</article>
				<article className="flex flex-row gap-4 items-center ml-[35%]">
					<div className="flex flex-row justify-between text-white text-lg gap-6 ">
						<a href="">About Us</a>
						<a href="">Culture</a>
						<a href="">Gallery</a>
						<a href="">Volunteer</a>
						<a href="">Contact</a>
					</div>
					<div className="bg-[#E37619] rounded-md p-1">
						<Button href="" className="text-white">
							Join Us Today
						</Button>
					</div>
				</article>
			</nav>
			{/* end of Navbar */}
			<section className="flex flex-row justify-between pb-6 relative">
				<article className=" text-white-400 absolute inset-y-[38%] left-[5.6%] ">
					<h4 className="text-4xl w-[60%] font-bold">
						Embrace Your <span className="bg-[#E37619] px-1 ">Heritage,</span>{" "}
						Enrich Your Connections
					</h4>
					<p className="text-[17px leading-[27px] w-[40%] tracking-[.05em] py-3">
						Journey through Time, Tradition, and <br />
						Triumphs in the Heart of Itsekiri Culture.
					</p>
					<div className="flex flex-row gap-3">
						<Button
							href=""
							className="border-2 border-white-400 rounded-lg p-[8px]">
							Discover Your Roots
						</Button>
						<Button
							href=""
							className="bg-[#E37619] border rounded-lg py-[8px] px-[10px] text-[16px]">
							{" "}
							Join Us Today
						</Button>
					</div>
				</article>
				<div className="w-[90%] h-[70%] " style={{ marginInlineStart: "27%" }}>
					<img
						src={headerImage}
						alt="header-image"
						className="h-[70%] w-full self-end"
					/>
				</div>
			</section>
		</header>
	);
};

export default Navbar;
