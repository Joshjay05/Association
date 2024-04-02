import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Layout/SharedLayout";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SharedLayout />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
