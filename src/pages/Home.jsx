import Hero from "../components/Hero";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Hero />
			<PlanTrip />
			<PickCar />
			<Banner />
			<ChooseUs />
			<Testimonials />
			<Faq />
			<Gallery />
			<Footer />
		</>
	);
}

export default Home;
