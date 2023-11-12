// Components
import SpecialsList from "../SpecialsList/SpecialsList";
import Button from "../Button/Button";

// Styles
import "./SpecialsSection.css";

const SpecialsSection = () => {
	return (
		<section className="specials-section">
			<div className="container">
				<div className="specials-content">
					<div className="specials-header">
						<h2>This weeks specials!</h2>
						<Button type="main-btn">Reserve a table</Button>
					</div>
					<div>
						<SpecialsList />
					</div>
				</div>
			</div>
		</section>
	);
};

export default SpecialsSection;
