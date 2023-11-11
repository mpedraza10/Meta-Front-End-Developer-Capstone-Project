// React router imports
import { Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import HomePage from "./pages/HomePage/HomePage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/reserve" element={<ReservationPage />}></Route>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
