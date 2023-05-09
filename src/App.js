import { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import List from "./components/List/List";
export const toDoContext = createContext();
function App() {
	const [state, setState] = useState([
		{ text: "to do one" },
		{ text: "to do two" },
		{ text: "to do three" },
	]);

	return (
		<div className="App">
			<toDoContext.Provider value={{ state, setState }}>
				<Header />
				<Input />
				<List />
			</toDoContext.Provider>
		</div>
	);
}

export default App;
