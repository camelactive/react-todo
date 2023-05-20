import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import { useSelector } from "react-redux";

export const toDoContext = createContext();
function App() {
	const {theme} = useSelector(state => state.todo)
	const [state, setState] = useState([]);

	
	
	return (
		<div className={theme.lightTheme ? "App" : "AppDark"}>
			<toDoContext.Provider
				value={{ state, setState }}>
				<Header />
				<Input />
				<List />
				<Footer />
			</toDoContext.Provider>
		</div>
	);
}

export default App;
