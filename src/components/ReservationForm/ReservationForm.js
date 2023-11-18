// React imports
import { useState, useEffect } from "react";

// React router
import { useNavigate } from "react-router-dom";

// Components
import Button from "../UI/Button/Button";
import Selector from "../UI/Selector/Selector";
import CupsSvg from "../UI/SVGs/CupsSvg";
import TimeSvg from "../UI/SVGs/TimeSvg";

// Api simulator methods import
import { fetchApi, submitApi } from "../../api";

// Styles
import "./ReservationForm.css";

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
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const [maxDate, setMaxDate] = useState("");
	const [guests, setGuests] = useState("");
	const [time, setTime] = useState("");
	const [ocassion, setOcassion] = useState("");
	const [requests, setRequests] = useState("");
	const [availableTimes, setAvailableTimes] = useState([]);

	// Helper functions

	// Function that handles the reservation form submission
	const handleSubmit = (e) => {
		const submitData = async () => {
			try {
				e.preventDefault();

				// Create the form data to be submitted
				const formData = {
					date: date,
					guests: guests,
					time: time,
					ocassion: ocassion,
					requests: requests,
				};

				const response = await submitApi(formData);

				if (response.success) {
					// If the submission is successful, navigate to the success page
					navigate("/success", {
						state: { reservationData: formData },
					});
				} else {
					// Handle error if needed
					console.log("Submission not successful!");
				}
			} catch (error) {
				console.log("Error submitting data: ", error.error);
			}
		};
		submitData();
	};

	// Effects

	// Effect to check depending on the date select we retrieve the available times
	useEffect(() => {
		const getAvailableTimes = async () => {
			try {
				// Fetch the available times depending on selected date
				const available_times = await fetchApi(date);
				setAvailableTimes(available_times.times);
			} catch (error) {
				console.log("Error fetching data: ", error.error);
			}
		};
		getAvailableTimes();
	}, [date]);

	// Set max date for reservation to be one week from today
	useEffect(() => {
		const date = new Date(CURRENT_DATE);
		date.setDate(CURRENT_DATE.getDate() + 7);
		const formattedDate = date.toISOString().split("T")[0];
		setMaxDate(formattedDate);
	}, []);

	return (
		<form className="reservation-form" onSubmit={handleSubmit}>
			<div>
				<label htmlFor="res-date">Choose date:</label>
				<input
					type="date"
					id="res-date"
					value={date}
					min={minDateFormatted}
					max={maxDate}
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
					options={availableTimes}
					setState={setTime}
					id="time-selector"
				></Selector>
			</div>
			<div>
				<Selector
					title="Ocassion"
					icon={<CupsSvg />}
					options={occasion_options}
					setState={setOcassion}
					id="ocassion-selector"
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
