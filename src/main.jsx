import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./styles/global.scss";
import { AppContextProvider } from "./context/index.jsx";

import Layout from "./layout/Layout.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux Provider */}
    <Provider store={store}>
      {/* ContextAPI Provider */}
      <AppContextProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </AppContextProvider>
    </Provider>
  </React.StrictMode>
);
