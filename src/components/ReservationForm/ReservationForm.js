// Components
import Selector from "../UI/Selector/Selector";
import CupsSvg from "../UI/SVGs/CupsSvg";

// Styles
import "./ReservationForm.css";

// Dates available
const available_times = [
	{
		time: "17:00",
	},
	{
		time: "18:00",
	},
	{
		time: "19:00",
	},
	{
		time: "20:00",
	},
	{
		time: "21:00",
	},
	{
		time: "22:00",
	},
];

// Ocassion options
const occasion_options = ["Birthday", "Engagement", "Anniversary"];

const ReservationForm = () => {
	return (
		<form className="reservation-form">
			<label htmlFor="res-date">Choose date</label>
			<input type="date" id="res-date" />
			<label htmlFor="res-time">Choose time</label>
			<select id="res-time ">
				{available_times.map((time, index) => (
					<option key={index}>{time.time}</option>
				))}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input type="number" placeholder="1" min="1" max="10" id="guests" />
			<label htmlFor="occasion">Occasion</label>
			<Selector
				title="Ocassion"
				icon={<CupsSvg />}
				options={occasion_options}
			></Selector>
			<select id="occasion">
				<option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input type="submit" value="Make Your reservation" />
		</form>
	);
};

export default ReservationForm;
