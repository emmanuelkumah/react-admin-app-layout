import { IoHome, IoGridOutline } from "react-icons/io5";
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
    name: "Task",
    icon: <CiFolderOn />,
    subItems: [
      {
        name: "All Task",
        path: "/task/all",
      },
      {
        name: "Create Task",
        path: "/task/create",
      },
    ],
  },
  {
    name: "Groups",
    icon: <FaUser />,
    subItems: [
      {
        name: "All Groups",
        path: "/group/all",
      },
      { name: "Create Group", path: "/group/create" },
    ],
  },
  {
    name: "User Profile",
    icon: <FaUser />,
    path: "/user-profile",
  },
];
