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
            <RouterProvider router={router} />

);