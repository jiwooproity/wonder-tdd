import { createBrowserRouter } from "react-router-dom";

import Count from "../count";
import Login from "../login";

const router = createBrowserRouter([
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
