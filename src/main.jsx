import { StrictMode } from 'react'
import './assets/css/style.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Create from "./pages/Create/index.jsx";
import List from "./pages/List";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/",
        element: <Create />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>

);