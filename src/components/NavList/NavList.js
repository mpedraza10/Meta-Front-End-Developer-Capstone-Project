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
				<NavLink to="/about">About</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/menu">Menu</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/reserve">Reservations</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/order-online">Order online</NavLink>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<NavLink to="/login">Login</NavLink>
			</li>
		</ul>
	);
};

export default NavList;
