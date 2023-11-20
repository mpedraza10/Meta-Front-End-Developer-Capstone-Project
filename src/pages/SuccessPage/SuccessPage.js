// React router imports
import { useLocation, Link } from "react-router-dom";

// Components
import HeroSection from "../../components/HeroSection/HeroSection";
import Button from "../../components/UI/Button/Button";

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
				id="success-hero-section"
			/>
			<div className="success-content">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<h2>The table has been reserved!</h2>
				<p>
					Check your email for any details and questions you may have. Hoping to
					see you soon!
				</p>
				<p>Date: {reservationData?.date}</p>
				<p>Time: {reservationData?.time}</p>
				<p>Guests: {reservationData?.guests}</p>
				<p>Ocassion: {reservationData?.ocassion}</p>
				<p>Requests: {reservationData?.requests}</p>
				<Link to="/">
					<Button type="main-btn">Home</Button>
				</Link>
			</div>
		</>
	);
};

export default SuccessPage;
