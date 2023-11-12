// React imports
import { useState } from "react";

// React router
import { useNavigate } from "react-router-dom";

// Components
import Button from "../UI/Button/Button";
import Selector from "../UI/Selector/Selector";
import CupsSvg from "../UI/SVGs/CupsSvg";
import TimeSvg from "../UI/SVGs/TimeSvg";

// Styles
import "./ReservationForm.css";

// Times available
let available_times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// Day setup
const CURRENT_DATE = new Date();
// Set date input to not select days before reservation and after format "YYYY-MM-DD"
const startYear = CURRENT_DATE.getFullYear();
const startMonth = String(CURRENT_DATE.getMonth() + 1).padStart(2, "0");
const startDay = String(CURRENT_DATE.getDate()).padStart(2, "0");
const minDateFormatted = `${startYear}-${startMonth}-${startDay}`;

// Ocassion options
const occasion_options = ["Birthday", "Engagement", "Anniversary"];

const ReservationForm = () => {
	// State
	const navigate = useNavigate();
	const [date, setDate] = useState(new Date().toISOString());
	const [guests, setGuests] = useState("");
	const [time, setTime] = useState("");
	const [ocassion, setOcassion] = useState("");
	const [requests, setRequests] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = {
			date: date,
			guests: guests,
			time: time,
			ocassion: ocassion,
			requests: requests,
		};
		console.log(formData);

		const filtered_times = available_times.filter(
			(available_time) => available_time !== time
		);

		available_times = [...filtered_times];

		console.log(available_times);

		navigate("/success");
	};

	return (
		<form className="reservation-form" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="res-date">Choose date:</label>
				<input
					type="date"
					id="res-date"
					value={date}
					min={minDateFormatted}
					onChange={(e) => setDate(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor="guests">Number of guests:</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					value={guests}
					id="guests"
					onChange={(e) => setGuests(e.target.value)}
					required
				/>
			</div>
			<div>
				<Selector
					title="Time"
					icon={<TimeSvg />}
					options={available_times}
					setState={setTime}
				></Selector>
			</div>
			<div>
				<Selector
					title="Ocassion"
					icon={<CupsSvg />}
					options={occasion_options}
					setState={setOcassion}
				></Selector>
			</div>
			<div className="two-cols">
				<label>Special Requests (optional):</label>
				<textarea
					value={requests}
					onChange={(e) => setRequests(e.target.value)}
				></textarea>
			</div>
			<Button type="main-btn">Reserve table</Button>
		</form>
	);
};

export default ReservationForm;
