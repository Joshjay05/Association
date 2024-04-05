import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Layout/SharedLayout";
import LandingPage from "./LandingPage";
import Registration from "./Components/Registration";

const App = () => {
	return (
		<div className="w-full">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<LandingPage />} />
						<Route path="reg" element={<Registration />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
