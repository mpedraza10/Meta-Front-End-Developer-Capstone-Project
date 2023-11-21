// React router imports
import { Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Components
import HomePage from "./pages/HomePage/HomePage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UnderConstructionPage from "./pages/UnderConstructionPage/UnderConstructionPage";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/about" element={<UnderConstructionPage />}></Route>
				<Route path="/menu" element={<UnderConstructionPage />}></Route>
				<Route path="/order-online" element={<UnderConstructionPage />}></Route>
				<Route path="/login" element={<UnderConstructionPage />}></Route>
				<Route path="/reserve" element={<ReservationPage />}></Route>
				<Route path="/success" element={<SuccessPage />}></Route>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
