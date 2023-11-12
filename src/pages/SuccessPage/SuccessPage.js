// Components
import HeroSection from "../../components/HeroSection/HeroSection";

// Styles
import "./SuccessPage.css";

const SuccessPage = () => {
	return (
		<>
			<HeroSection
				title="Success!"
				subtitle="Glad to see you soon!"
				description=""
				imgSrc="/images/reserve-table.jpg"
				noImg={true}
			/>
		</>
	);
};

export default SuccessPage;
