import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./components/styles/styles.css";
import "./components/styles/reset.css";
import App from "./App";
import { store } from "./store/reducers/rootReducer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
