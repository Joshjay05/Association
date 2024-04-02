import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const SharedLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default SharedLayout;
