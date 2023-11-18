// Api simulator using local storage to simulate how the available times changes depending on the date
// We can also add simulation for num of people and other functionalities if we want

// Create the local storage key to simulate api and database connection
const STORAGE_KEY = "bookingData";

// Function to initialize available times for each day
const initializeAvailableTimes = () => {
	const availableTimes = {};
	const currentDate = new Date();

	// Initialize available times for the next 7 days
	for (let i = 0; i < 7; i++) {
		const date = new Date(currentDate);
		date.setDate(currentDate.getDate() + i);
		const formattedDate = date.toISOString().split("T")[0];
		availableTimes[formattedDate] = [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		];
	}

	return availableTimes;
};

// Function to fetch available times based on a date
export const fetchApi = (date) => {
	// Get the local storage data using the storage key
	const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

	// Check if we have a valid date, if not we return invalid error
	if (!date || !storedData[date]) {
		return Promise.reject({ error: "Invalid date or no available times" });
	}

	// If we have a valid date we return the times array
	const times = storedData[date];
	return Promise.resolve({ times });
};

// Function to submit booking form data
export const submitApi = (formData) => {
	// Get the local storage data using the storage key
	const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

	// Check if we have valid date and time
	if (!formData.date || !formData.time) {
		return Promise.reject({ error: "Invalid form data" });
	}

	// Update available times for the selected date
	storedData[formData.date] = storedData[formData.date] || [];
	storedData[formData.date].push(formData.time);

	// Remove the selected time from the available times for that date
	const availableTimesForDate = storedData[formData.date];
	storedData[formData.date] = availableTimesForDate.filter(
		(time) => time !== formData.time
	);

	// Set the storage with updated values
	localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));

	// If everything went well we resolve to true
	return Promise.resolve({ success: true });
};

// Initialize available times when the module is first imported
localStorage.setItem(STORAGE_KEY, JSON.stringify(initializeAvailableTimes()));
