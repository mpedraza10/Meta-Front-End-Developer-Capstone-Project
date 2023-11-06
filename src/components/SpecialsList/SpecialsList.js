// Components
import SpecialItem from "../SpecialItem/SpecialItem";

// Styles
import "./SpecialsList.css";

// Specials array
const specials = [
	{
		name: "Greek Salad",
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		price: 12.99,
		imgSrc: "/images/greeksalad.jpg",
	},
	{
		name: "Burchetta",
		description:
			"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		price: 5.99,
		imgSrc: "/images/bruchetta.png",
	},
	{
		name: "Lemon Dessert",
		description:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		price: 12.99,
		imgSrc: "/images/lemondessert.jpg",
	},
];

const SpecialsList = () => {
	return (
		<ul className="specials-list">
			{specials.map((special, index) => (
				<SpecialItem item={special} key={index} />
			))}
		</ul>
	);
};

export default SpecialsList;
