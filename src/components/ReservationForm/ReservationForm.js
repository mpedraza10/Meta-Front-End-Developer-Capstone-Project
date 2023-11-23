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
const occasion_options = ["Birthday", "Engagement", "Anniversary", "None"];

const ReservationForm = () => {
	// State
	const navigate = useNavigate();
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
	const [maxDate, setMaxDate] = useState("");
	const [guests, setGuests] = useState("");
	const [guestsError, setGuestsError] = useState("");
	const [time, setTime] = useState("");
	const [timeError, setTimeError] = useState("");
	const [ocassion, setOcassion] = useState("");
	const [ocassionError, setOcassionError] = useState("");
	const [requests, setRequests] = useState("");
	const [availableTimes, setAvailableTimes] = useState([]);

	// Helper functions

	// Function to validate form data
	const validateFormData = (formData) => {
		let numErros = 0;

		// Check time
		if (formData.time === "") {
			setTimeError("You need to add a time for your reservation please.");
			numErros++;
		}

		// Check ocassion
		if (formData.ocassion === "") {
			setOcassionError("You need to add an ocassion please.");
			numErros++;
		}

		// Check guests
		if (formData.guests === "" || +formData.guests < 1) {
			setGuestsError("Number of guests has to be at least 1.");
			numErros++;
		} else if (+formData.guests > 20) {
			setGuestsError(
				"We can't take more than 20 guests, maybe try two reservations."
			);
			numErros++;
		}

		return numErros;
	};

	// Function that handles the reservation form submission
	const handleSubmit = async (e) => {
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

			// Validate form data
			let numErros = validateFormData(formData);

			// If we have errors we don't send form data
			if (numErros > 0) return;

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

	// Effects

	// Effect to check if the time is valid to remove errors
	useEffect(() => {
		if (time !== "") {
			setTimeError("");
		}
	}, [time]);

	// Effect to check if the ocassion is valid to remove errors
	useEffect(() => {
		if (ocassion !== "") {
			setOcassionError("");
		}
	}, [ocassion]);

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
					value={guests}
					id="guests"
					onChange={(e) => {
						setGuests(e.target.value);
						if (e.target.value > 20) {
							setGuestsError(
								"We can't take more than 20 guests, maybe try two reservations."
							);
						} else if (e.target.value < 1) {
							setGuestsError("Number of guests has to be at least 1.");
						} else {
							setGuestsError("");
						}
					}}
				/>
				{guestsError && <p style={{ color: "red" }}>{guestsError}</p>}
			</div>
			<div>
				<Selector
					title="Time"
					icon={<TimeSvg />}
					options={availableTimes}
					setState={setTime}
					id="time-selector"
				></Selector>
				{timeError && <p style={{ color: "red" }}>{timeError}</p>}
			</div>
			<div>
				<Selector
					title="Ocassion"
					icon={<CupsSvg />}
					options={occasion_options}
					setState={setOcassion}
					id="ocassion-selector"
				></Selector>
				{ocassionError && <p style={{ color: "red" }}>{ocassionError}</p>}
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
