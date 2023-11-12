// React router
import { Link } from "react-router-dom";

// Components
import Button from "../UI/Button/Button";

// Styles
import "./HeroSection.css";

const HeroSection = ({
	id,
	title,
	subtitle,
	description,
	imgSrc,
	noImg,
	alt,
	action,
}) => {
	return (
		<section className="hero-section" id={id && id}>
			<div className="container">
				<div className="hero-content">
					<div className="info">
						<h1>{title}</h1>
						<h3>{subtitle}</h3>
						<p>{description}</p>
						{action && (
							<Link to="/reserve">
								<Button type="main-btn">Reserve a table</Button>
							</Link>
						)}
					</div>
					{alt ? (
						<div className="img-container alt">
							<img
								src="/images/restaurant chef B.jpg"
								alt="Chef"
								className="image-left"
							/>
							<img
								src="/images/restaurant.jpg"
								alt="Restaurant"
								className="image-right"
							/>
						</div>
					) : (
						!noImg && (
							<div className="img-container">
								<img
									src={`${imgSrc ? imgSrc : "/images/restauranfood.jpg"}`}
									alt="Food from the restaurant"
								/>
							</div>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
