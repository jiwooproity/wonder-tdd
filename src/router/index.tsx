import { createBrowserRouter } from "react-router-dom";

import Count from "../count";
import Login from "../login";
import ToDoList from "../todo-list";

const router = createBrowserRouter([
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/todo-list",
    element: <ToDoList />,
  },
]);

export default router;
