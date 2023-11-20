// React router imports
import { useLocation } from "react-router-dom";

// Components
import HeroSection from "../../components/HeroSection/HeroSection";

// Styles
import "./SuccessPage.css";

const SuccessPage = () => {
	// State
	const location = useLocation();
	const reservationData = location.state?.reservationData;

	return (
		<>
			<HeroSection
				title="Success!"
				subtitle="Glad to see you soon!"
				description=""
				imgSrc="/images/reserve-table.jpg"
				noImg={true}
			/>
			<div>
				<h2>Reservation Success!</h2>
				<p>Date: {reservationData?.date}</p>
				<p>Time: {reservationData?.time}</p>
				<p>Guests: {reservationData?.guests}</p>
				<p>Ocassion: {reservationData?.ocassion}</p>
				<p>Requests: {reservationData?.requests}</p>
			</div>
		</>
	);
};

export default SuccessPage;
