// Components
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import HeroSection from "../../components/HeroSection/HeroSection";

// Styles
import "./ReservationPage.css";

const ReservationPage = () => {
	return (
		<>
			<HeroSection
				title="Reserve table"
				subtitle="at Little Lemon"
				description=""
				imgSrc="/images/reserve-table.jpg"
                noImg={true}
			/>
			<h1>ReservationPage</h1>
			<ReservationForm />
		</>
	);
};

export default ReservationPage;
