// Components
import HeroSection from "../../components/HeroSection/HeroSection";
import RatingSection from "../../components/RatingSection/RatingSection";
import SpecialsSection from "../../components/SpecialsSection/SpecialsSection";

const HomePage = () => {
	return (
		<>
			<HeroSection
				title="Little Lemon"
				subtitle="Chicago"
				description="We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist."
				action={true}
			/>
			<SpecialsSection />
			<RatingSection />
			<HeroSection
				title="Little Lemon"
				subtitle="Chicago"
				description="Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials."
				alt={true}
			/>
		</>
	);
};

export default HomePage;
