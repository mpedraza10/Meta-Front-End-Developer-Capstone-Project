// Styles
import "./HeroSection.css";

// Components
import Button from "../Button/Button";

const HeroSection = ({ description, alt }) => {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero-content">
					<div className="info">
						<h1>Little Lemon</h1>
						<h3>Chicago</h3>
						<p>{description}</p>
						{!alt && <Button type="main-btn">Reserve a table</Button>}
					</div>
					{alt ? (
						<div className="img-container alt">
							<img src="/images/restaurant chef B.jpg" alt="Left Image" className="image-left" />
							<img
								src="/images/restaurant.jpg"
								alt="Right Image"
								className="image-right"
							/>
						</div>
					) : (
						<div className="img-container">
							<img
								src="/images/restauranfood.jpg"
								alt="Food from the restaurant"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
