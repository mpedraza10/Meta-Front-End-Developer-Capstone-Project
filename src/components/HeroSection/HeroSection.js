// Styles
import "./HeroSection.css";

// Components
import Button from "../Button/Button";

const HeroSection = () => {
	return (
		<section className="hero-section">
			<div className="container">
				<div className="hero-content">
					<div className="info">
						<h1>Little Lemon</h1>
						<h3>Chicago</h3>
						<p>
							We are a family owned Mediterranean restaurant, focused on
							traditional recipes served with a modern twist.
						</p>
						<Button type="main-btn">Reserve a table</Button>
					</div>
					<div className="img-container">
						<img
							src="/images/restauranfood.jpg"
							alt="Food from the restaurant"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
