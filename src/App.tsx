import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./layout/AppLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <h1>Home</h1> },
      {
        path: "/task",
        children: [
          {
            index: true,
            element: <h1>Task</h1>,
          },
          {
            path: "/task/:id",
            element: <h1>Task Details</h1>,
          },
          {
            path: "/task/all",
            element: <h1>All Task</h1>,
          },
          {
            path: "/task/create",
            element: <h1>Create Task</h1>,
          },
        ],
      },
      {
        path: "/user-profile",
        element: <h1>User Profile</h1>,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
