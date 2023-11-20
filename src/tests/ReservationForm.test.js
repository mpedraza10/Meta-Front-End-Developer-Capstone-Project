import React from "react";
import {
	render,
	screen,
	// fireEvent,
	// act,
	// waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";

import ReservationForm from "../components/ReservationForm/ReservationForm";

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

// Mock the async function used in the component
jest.mock("../api", () => ({
	submitApi: jest.fn(() => Promise.resolve({ success: true })),
	fetchApi: jest.fn((date) => {
		const times = {
			"2023-12-01": ["19:00", "20:00"],
			"2023-12-02": ["18:00", "21:00"],
			// Add more dates and corresponding times as needed
		};

		if (!date || !times[date]) {
			return Promise.reject({ error: "Invalid date or no available times" });
		}

		return Promise.resolve({ times: times[date] });
	}),
}));

describe("ReservationForm component", () => {
	it("renders the reservation form correctly", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<ReservationForm />
			</MemoryRouter>
		);

		// Check if form elements are present
		expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
		expect(screen.getByTestId("time-selector")).toBeInTheDocument();
		expect(screen.getByTestId("ocassion-selector")).toBeInTheDocument();
	});

	// it("submits the form correctly", async () => {
	// 	const navigateMock = jest.fn();
	// 	require("react-router-dom").useNavigate.mockReturnValue(navigateMock);

	// 	render(
	// 		<MemoryRouter>
	// 			<ReservationForm />
	// 		</MemoryRouter>
	// 	);

	// 	act(() => {
	// 		// Fill in form fields
	// 		fireEvent.change(screen.getByLabelText(/choose date/i), {
	// 			target: { value: "2023-12-01" },
	// 		});
	// 		fireEvent.change(screen.getByLabelText(/number of guests/i), {
	// 			target: { value: "4" },
	// 		});
	// 		fireEvent.change(screen.getByTestId("time-selector"), {
	// 			time: "19:00", // Pass the state value as selectedValue
	// 		});
	// 		fireEvent.change(screen.getByTestId("ocassion-selector"), {
	// 			ocassion: "Birthday", // Pass the state value as selectedValue
	// 		});
	// 	});

	// 	act(() => {
	// 		fireEvent.click(screen.getByText(/reserve table/i));
	// 	});

	// 	// Wait for the async code to complete
	// 	await waitFor(() => {
	// 		expect(navigateMock).toHaveBeenCalledWith("/success");
	// 	});
	// });
});
