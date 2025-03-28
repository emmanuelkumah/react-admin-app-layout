import { IoGridOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";

import { NavItemType } from "../types/type";
import { FaUser } from "react-icons/fa6";

export const navItems: NavItemType[] = [
  {
    name: "Dashboard",
    icon: <IoGridOutline />,
    path: "/",
  },
  {
    name: "Tasks",
    icon: <CiFolderOn />,
    subItems: [
      {
        name: "All Tasks",
        path: "/task/all",
      },
      {
        name: "Create Task",
        path: "/task/create",
      },
    ],
  },
  {
    name: "UI Elements",
    icon: <FaUser />,
    subItems: [
      { name: "Alerts", path: "elements/alerts" },
      { name: "Avatar", path: "elements/avatar" },
      {
        name: "Buttons",
        path: "elements/buttons",
      },
      { name: "Cards", path: "elements/cards" },
    ],
  },
  {
    name: "User Profile",
    icon: <FaUser />,
    path: "/user-profile",
  },
];
