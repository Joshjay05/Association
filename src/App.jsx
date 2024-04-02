import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Layout/SharedLayout";
import LandingPage from "./LandingPage";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route index element={<LandingPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
