import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Buttons from "./pages/UiElements/Buttons";
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
        path: "elements",
        children: [
          {
            index: true,
            element: <h1>Show all ui elements</h1>,
          },
          {
            path: "alerts",
            element: <h1>Alerts</h1>,
          },
          {
            path: "avatar",
            element: <h1>Avatar</h1>,
          },
          {
            path: "buttons",
            element: <Buttons />,
          },
          {
            path: "cards",
            element: <h1>Cards</h1>,
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
