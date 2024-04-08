import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";

const SharedLayout = () => {
	return (
		<div className="w-full">
			<Nav />
			<Outlet />
			<Footer />
		</div>
	);
};

export default SharedLayout;
