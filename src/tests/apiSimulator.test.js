// apiSimulator.test.js

import { fetchApi, initializeAvailableTimes } from "../api";

describe("API Simulator Tests", () => {
	beforeEach(() => {
		// Clear any existing data in localStorage
		localStorage.clear();

		// Initialize available times when the module is first imported
		localStorage.setItem(
			"bookingData",
			JSON.stringify(initializeAvailableTimes())
		);
	});

	test("fetchApi should retrieve available times correctly", async () => {
		// Arrange
		const date = new Date().toISOString().split("T")[0];

		// Act
		const result = await fetchApi(date);

		// Assert
		expect(result).toEqual({
			times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
		});
	});
});
