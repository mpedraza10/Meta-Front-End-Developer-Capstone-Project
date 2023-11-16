// React import
import { useState } from "react";

// Styles
import "./Selector.css";

const Selector = ({ id, title, icon, options, setState }) => {
	// State
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);

	return (
		<div
			id={id && id}
			className={`selector ${selectedItem && "selected-item"}`}
			onClick={() => setIsOpen(!isOpen)}
			data-testid={`${title.toLowerCase()}-selector`}
		>
			<span className={`selector-icon ${selectedItem && "selected-item"}`}>
				{icon}
			</span>
			<span className="selector-title">
				{selectedItem ? selectedItem : title}
			</span>
			{!selectedItem || isOpen ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="chevron-icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 8.25l-7.5 7.5-7.5-7.5"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="chevron-icon"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 15.75l7.5-7.5 7.5 7.5"
					/>
				</svg>
			)}
			{isOpen && (
				<ul className="dropdown-list">
					{options.map((option, index) => (
						<li
							key={index}
							className="selector-option"
							onClick={() => {
								setSelectedItem(option);
								setState(option);
							}}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Selector;
