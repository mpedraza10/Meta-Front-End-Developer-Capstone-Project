// React imports
import { useState } from "react";

// Styles
import "./Header.css";

// Assets
import logo from "../../assets/svgs/Logo.svg";

// Components
import NavList from "../NavList/NavList";

const Header = () => {
	// State
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Helper functions
	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header>
			<div className="container">
				<div className="header-content">
					<img src={logo} alt="Little Lemon Logo" />
					<nav className={`menu ${isMenuOpen ? "open" : ""}`}>
						<NavList closeMenu={handleMenuClick} />
					</nav>
					<div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={handleMenuClick}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
