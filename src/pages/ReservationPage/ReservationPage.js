// Components
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import HeroSection from "../../components/HeroSection/HeroSection";

// Styles
import "./ReservationPage.css";

// Considerations array
const considerations_imgs = [
	{
		title: "No smoking",
		imgUrl: "/images/no-smoke.png",
	},
	{
		title: "No alcohol",
		imgUrl: "/images/no-alcohol.png",
	},
	{
		title: "No pets",
		imgUrl: "/images/no-pets.png",
	},
];

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
			<section className="reservation-section">
				<div className="container">
					<div className="reservation-content">
						<div className="considerations">
							<h3>Considerations:</h3>
							<ul className="considerations-list">
								{considerations_imgs.map((consideration, index) => (
									<li key={index}>
										<img src={consideration.imgUrl} alt={consideration.title} />
									</li>
								))}
							</ul>
						</div>
						<div className="details">
							<h3>Details:</h3>
							<ReservationForm />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ReservationPage;
