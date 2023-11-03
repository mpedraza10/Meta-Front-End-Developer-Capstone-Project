// Components
import RatingCard from "../RatingCard/RatingCard";

// Styles
import "./RatingSection.css";

// Ratings
const ratings = [
	{
		name: "Pedro",
		stars: 5,
		comment: "The best restaurant in town, no doubt about it!",
	},
	{
		name: "Brenda",
		stars: 4.5,
		comment: "Amazing! Coming to the best restaurant in town!",
	},
	{
		name: "John",
		stars: 5,
		comment: "Great experience! For me a 10/10 hoping to be back soon.",
	},
];

const RatingSection = () => {
	return (
		<section className="rating-section">
			<div className="container">
				<div className="rating-content">
					<h2>Message from our loyal customers!</h2>
					<ul className="rating-list">
						{ratings.map((rating, index) => (
							<RatingCard data={rating} key={index} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default RatingSection;
