import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux"
import store from "./store/index";
import {PersistGate} from "redux-persist/integration/react"
import { persistor } from "./store/index";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Info from "./components/Info/Info";
import MainLayaut from "./components/Layauts/MainLayaut";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store ={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayaut/>}>
                    <Route path="/" element={<App />} index/>
                    <Route path="/info" element={<Info />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
