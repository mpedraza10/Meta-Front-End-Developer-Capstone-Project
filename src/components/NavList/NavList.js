// Styles
import "./NavList.css";

const NavList = ({ closeMenu }) => {
	return (
		<ul className="nav-list">
			<li className="nav-item" onClick={closeMenu}>
				<a href="#">Home</a>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<a href="#">About</a>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<a href="#">Menu</a>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<a href="#">Reservations</a>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<a href="#">Order online</a>
			</li>
			<li className="nav-item" onClick={closeMenu}>
				<a href="#">Login</a>
			</li>
		</ul>
	);
};

export default NavList;
