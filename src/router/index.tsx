import { createBrowserRouter } from "react-router-dom";

import Count from "../count";

const router = createBrowserRouter([
  {
    path: "/count",
    element: <Count />,
  },
]);

export default router;
