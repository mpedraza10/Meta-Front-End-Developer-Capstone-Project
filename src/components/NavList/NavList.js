// React router imports
import { NavLink } from "react-router-dom";

// Styles
import "./NavList.css";

const NavList = ({ closeMenu }) => {
	return (
		<ul className="nav-list">
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/">Home</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/">About</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/">Menu</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/">Reservations</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/">Order online</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/">Login</NavLink>
			</li>
		</ul>
	);
};

export default NavList;
