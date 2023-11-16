// Import necessary dependencies for testing
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

// Import the component to be tested
import ReservationForm from "../components/ReservationForm/ReservationForm";

// Mock the react-router-dom module
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useNavigate: jest.fn(),
}));

// Describe the component tests
describe("ReservationForm component", () => {
	// Test case for rendering the form
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

	// Test case for form submission
	it("submits the form correctly", () => {
		const navigateMock = jest.fn();
		// Mock the useNavigate hook
		require("react-router-dom").useNavigate.mockReturnValue(navigateMock);

		render(
			<MemoryRouter>
				<ReservationForm />
			</MemoryRouter>
		);

		// Fill in form fields
		fireEvent.change(screen.getByLabelText(/choose date/i), {
			target: { value: "2023-12-01" },
		});
		fireEvent.change(screen.getByLabelText(/number of guests/i), {
			target: { value: "4" },
		});
		fireEvent.change(screen.getByTestId("time-selector"), {
			time: "19:00", // Pass the state value as selectedValue
		});
		fireEvent.change(screen.getByTestId("ocassion-selector"), {
			ocassion: "Birthday", // Pass the state value as selectedValue
		});

		// Ensure that the state is updated
		// expect(screen.getByTestId("time-selector").textContent).toBe("19:00");
		// expect(screen.getByTestId("ocassion-selector").textContent).toBe(
		// 	"Birthday"
		// );

		// Submit the form
		fireEvent.click(screen.getByText(/reserve table/i));

		// Check if handleSubmit function is called
		expect(navigateMock).toHaveBeenCalledWith("/success");
	});
});
