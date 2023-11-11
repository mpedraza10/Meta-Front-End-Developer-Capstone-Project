// React imports
import { useEffect, useState } from "react";

// Components
import Button from "../UI/Button/Button";

// Styles
import "./SpecialItem.css";

const SpecialItem = ({ item }) => {
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	useEffect(() => {
		function handleResize() {
			// Check the viewport width and set the state accordingly
			setIsLargeScreen(window.innerWidth >= 768);
		}

		// Initial check and add event listener for window resize
		handleResize();
		window.addEventListener("resize", handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isLargeScreen ? (
				<li className="special-item">
					<div className="img-container">
						<img src={`${item.imgSrc}`} alt={`${item.name}`} />
					</div>
					<div className="content">
						<div className="content-header">
							<h3>{item.name}</h3>
							<span className="price">${item.price}</span>
						</div>
						<div className="content-description">
							<p>{item.description}</p>
						</div>
						<Button type="no-outline">Order delivery</Button>
					</div>
				</li>
			) : (
				<li className="special-item">
					<h3>{item.name}</h3>
					<div className="content">
						<div className="content-description">
							<p>{item.description}</p>
							<span className="price">${item.price}</span>
						</div>
						<div className="img-container">
							<img src={`${item.imgSrc}`} alt={`${item.name}`} />
						</div>
					</div>
					<Button type="no-outline">Order delivery</Button>
				</li>
			)}
		</>
	);
};

export default SpecialItem;
