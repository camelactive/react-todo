import "./App.css";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import { useSelector } from "react-redux";

function App() {
	const {theme} = useSelector(state => state.todo)

	return (
		<div className={theme.lightTheme ? "App" : "AppDark"}>
				<Input />
				<List />
		</div>
	);
}

export default App;
