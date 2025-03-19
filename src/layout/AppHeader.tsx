import { useState } from "react";
import { useSidebar } from "../context/SidebarProvider";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { BsThreeDots } from "react-icons/bs";
import Notification from "../component/global/Notification";
import ThemeToggle from "../component/global/ThemeToggle";
import UserSettings from "../component/global/UserSettings";

const AppHeader = () => {
  const [isAppMenuOpen, setIsAppMenuOpen] = useState(false);
  const { toggleSidebar, isSidebarOpen, toggleMobileSidebar, isMobileOpen } =
    useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };
  return (
    <header className="sticky top-0 z-99999 bg-white border-gray-200  flex w-full justify-between items-center lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-2 sm:gap-4 lg:justify-normal lg:px-0 lg:py-4">
          <button
            className="w-11 h-11 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 z-99999"
            type="button"
            onClick={handleToggle}
          >
            {isMobileOpen ? <IoCloseSharp /> : <CiMenuFries />}
          </button>

          <div className="lg:hidden">App logo</div>
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <BsThreeDots />
          </button>
          <div className="hidden lg:block">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                  <CiSearch />
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search item"
                  className="dark:bg-dark-900 h-11 w-full xl:w-[430px] rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm"
                />
              </div>
            </form>
          </div>
        </div>
        <div
          className={`${
            isAppMenuOpen ? "flex" : "hidden"
          } items-center justify-center w-full gap-4 px-5 py-4 lg:flex lg:justify-end`}
        >
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Notification />
            <UserSettings />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
