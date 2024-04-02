import ImageCard from "../Reusable/ImageCard";
import news from "../assets/news.png";
import newstwo from "../assets/newtwo.png";
import newsthree from "../assets/newsthree.png";
import newsFour from "../assets/newsFour.png";
const NewsUpdates = () => {
	return (
		<section className="my-[6rem]">
			<article className=" flex flex-col gap-2 mx-[5%] my-3">
				<h4 className="text-[36px] text-[#E37619] font-bold">
					News and Updates
				</h4>
				<p className="text-pretty w-1/2">
					Stay updated with our latest endeavors, upcoming events, and impactful
					stories from our members.
				</p>
			</article>

			<article>
				<p></p>
				<div className="grid grid-cols-4 gap-4  justify-self-center mx-[5%]">
					<ImageCard
						src={news}
						alt={"first"}
						otherTitle={"Annual Cultural Festival Recap"}
						Description="Relive the excitement of our recent cultural festival! From traditional dances to culinary delights."
					/>
					<ImageCard
						src={newstwo}
						alt={"first"}
						otherTitle={
							"Community Outrech InitiativeLanguage and Cultural Workshops"
						}
						Description="Learn about the impact we've made and discover opportunities to get involved in upcoming projects aimed at making a positive difference ."
					/>
					<ImageCard
						src={newsthree}
						alt={"first"}
						otherTitle={"Itsekiri Cultural Day"}
						Description="
                        Join us for interactive workshops designed to explore the intricacies of the Itsekiri language
                        "
					/>
					<ImageCard
						src={newsFour}
						alt={"first"}
						otherTitle={"Community Networking Mixer"}
						Description="Learn about the impact we've made and discover opportunities to get involved in upcoming projects aimed at making a positive difference"
					/>
				</div>
			</article>
		</section>
	);
};

export default NewsUpdates;
