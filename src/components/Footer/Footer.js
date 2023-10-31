// Styles
import "./Footer.css";

// Assets
import logo from "../../assets/svgs/Logo.svg";

// Components
import NavList from "../NavList/NavList";

const Footer = () => {
	return (
		<footer>
			<div className="logo-container">
				<img src={logo} alt="Little Lemon Logo" />
			</div>
			<div className="nav-links">
				<NavList />
			</div>
			<div className="contact-links">
				<ul>
					<li>
						<a href="/">Amazing Street 101. React</a>
					</li>
					<li>
						<a href="tel:123456789">123456789</a>
					</li>
					<li>
						<a href="mailto:littlelemonhelp@mail.com">
							littlelemonhelp@mail.com
						</a>
					</li>
				</ul>
			</div>
			<div className="social-media-links">
				<ul>
					<li>
						<a href="/">Facebook</a>
					</li>
					<li>
						<a href="/">Instagram</a>
					</li>
					<li>
						<a href="/">Twitter</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
