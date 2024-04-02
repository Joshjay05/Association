import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const SharedLayout = () => {
	return (
		<div className="w-full">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default SharedLayout;
