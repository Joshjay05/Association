import BlogCard from "../Reusable/BlogCard";
import Button from "../Reusable/Button";
import blogone from "../assets/blogone.png";
import blogtwo from "../assets/blogtwo.png";
import blogthree from "../assets/blogthree.png";

const Blogs = () => {
	return (
		<section>
			<h4>Our Blogs</h4>
			<article className="flex flex-row justify-center gap-4">
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
					title={"Itsekiri Legends and Folktales: Stories That Define Us"}
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

			<article>
				<div>
					<Button>View More Blogs</Button>
				</div>

				<div></div>
			</article>
		</section>
	);
};

export default Blogs;
