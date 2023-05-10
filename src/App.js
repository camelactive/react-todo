import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import List from "./components/List/List";

export const toDoContext = createContext();
function App() {
	const [state, setState] = useState([]);
	const [isLightTheme, setIsLightTheme] = useState({
		lightTheme: true,
		text: "light",
	});
	function themeChangerHandler() {
		setIsLightTheme({
			lightTheme: !isLightTheme.lightTheme,
			text: isLightTheme.lightTheme ? "light" : "dark",
		});
	}
	return (
		<div className={isLightTheme.lightTheme ? "App" : "AppDark"}>
			<toDoContext.Provider
				value={{ state, setState, isLightTheme, themeChangerHandler }}>
				<Header />
				<Input />
				<List />
				<Footer />
			</toDoContext.Provider>
		</div>
	);
}

export default App;
