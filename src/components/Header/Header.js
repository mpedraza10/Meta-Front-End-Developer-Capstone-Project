// Styles
import "./Header.css";

// Assets
import logo from "../../assets/svgs/Logo.svg";

// Components
import NavList from "../NavList/NavList";

const Header = () => {
	return (
		<header>
			<img src={logo} alt="Little Lemon Logo" />
			<nav>
				<NavList />
			</nav>
		</header>
	);
};

export default Header;
