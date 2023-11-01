// Styles
import "./Footer.css";

// Assets
import logo from "../../assets/svgs/Logo.svg";

// Components
import NavList from "../NavList/NavList";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-content">
					<div className="logo-container">
						<img src={logo} alt="Little Lemon Logo" />
					</div>
					<div className="nav-links">
						<h3>Pages</h3>
						<NavList />
					</div>
					<div className="contact-links">
						<h3>Contact</h3>
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
						<h3>Social media</h3>
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
				</div>
			</div>
		</footer>
	);
};

export default Footer;
