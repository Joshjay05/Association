import BlogCard from "../Reusable/BlogCard";
import Button from "../Reusable/Button";
import blogone from "../assets/blogone.png";
import blogtwo from "../assets/blogtwo.png";
import blogthree from "../assets/blogthree.png";
import arrowleft from "../assets/arrowleft.png";
import arrowright from "../assets/rightarrow.png";

const Blogs = () => {
	return (
		<section className="flex flex-col gap-4 h-full">
			<h4 className="text-center text-[36px] text-[#E37619] font-bold">
				Our Blogs
			</h4>
			<article className="flex flex-row justify-center gap-4 mb-[12rem]">
				<BlogCard
					src={blogone}
					alt={""}
					title="Celebrating Itsekiri Culture: Traditions, Festivals, and Heritage"
					text="Dive into the rich cultural tapestry of the Itsekiri people. Explore traditional ceremonies and festivals that are integral to the community."
					word={"open blog"}
				/>
				<BlogCard
					src={blogtwo}
					alt={""}
					title="Itsekiri Legends and Folktales: Stories That Define Us"
					text={
						"Showcase the oral traditions of the Itsekiri community by exploring and retelling age-old legends and folktales."
					}
					word={"open blog"}
				/>
				<BlogCard
					src={blogthree}
					alt={""}
					title={"Faces of Itsekiri: Spotlight on Remarkable Individuals"}
					text={
						"Introduce the vibrant personalities within the Itsekiri community who have made significant contributions in various fields."
					}
					word={"open blog"}
				/>
			</article>

			<article className=" flex flex-row items-center justify-between ml-[50%]">
				<div className="flex flex-col justify-center self-center items-center">
					<Button className="bg-[#E37619] border rounded-lg py-[18px] px-[24px] text-[16px] text-white ">
						View More Blogs
					</Button>
				</div>

				<div className="flex flex-row items-center gap-2 mr-[8%]">
					<img src={arrowleft} alt="arrow" className="w-12 h-12" />
					<img src={arrowright} alt="arrow" className="w-12 h-12 " />
				</div>
			</article>
		</section>
	);
};

export default Blogs;
