import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import { useSelector } from "react-redux";

function App() {
	const {theme} = useSelector(state => state.todo)

	return (
		<div className={theme.lightTheme ? "App" : "AppDark"}>
				<Header />
				<Input />
				<List />
				<Footer />
		</div>
	);
}

export default App;
