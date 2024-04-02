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
			<article className="flex flex-row justify-center gap-4 mb-[5rem] md:flex-col  md:items-center sm:flex-col sm:items-center">
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

			<article className=" flex flex-row items-center justify-between ml-[50%] md:flex-col md:ml-0 md:gap-6 sm:flex-col sm:ml-0 sm:gap-6">
				<div className="flex flex-col justify-center self-center items-center">
					<Button className="bg-[#E37619] border rounded-lg py-[18px] px-[24px] text-[16px] text-white cursor-pointer ">
						View More Blogs
					</Button>
				</div>

				<div className="flex flex-row items-center gap-2 lg:mr-[8%] md:justify-between sm:mr-[5%] sm:justify-between">
					<img src={arrowright} alt="arrow" className="w-12 h-12 " />
					<img src={arrowleft} alt="arrow" className="w-12 h-12" />
				</div>
			</article>
		</section>
	);
};

export default Blogs;
