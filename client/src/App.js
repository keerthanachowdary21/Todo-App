import { Route, Routes, Navigate } from "react-router-dom";
import TodoPage from "./components/TodoPage";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact component={TodoPage } />}
			<Route path="/signup" exact component={Signup } />
			<Route path="/login" exact component={Login } />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
