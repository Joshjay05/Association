import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Layout/SharedLayout";
import LandingPage from "./LandingPage";
import FormPage from "./Components/Registration";

const App = () => {
	return (
		<div className="w-full">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<LandingPage />} />
					</Route>
					<Route path="reg" element={<FormPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
