import SlidingImages from "../Components/SlidingImages"; //* Sliding Images Carousel Component
import NavBar from "../Components/NavBar";

{
	/* Array of objects (Images to be used) */
}
const ImgSlides = [
	{ url: "src/Images/FurFinderImageSL1.png", title: "cat" },
	{ url: "src/Images/FurFinderImageSL2.jpg", title: "dog" },
];

const Home = () => {
	return (
		<>
			<NavBar />
			{/* Sliding images component (as a prop) */}
			<SlidingImages slides={ImgSlides} />
		</>
	);
};

export default Home;
