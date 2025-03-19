import { Link, useLocation } from "react-router";
import { useSidebar } from "../context/SidebarProvider";
import { navItems } from "../utils/data";
import logo from "../assets/logo.png";
import { BiChevronDown } from "react-icons/bi";
import { useState, useCallback } from "react";
const AppSidebar = () => {
  const { isExpanded, isHovered, setIsHovered, isMobileOpen } = useSidebar();
  const [openSubMenu, setOpenSubMenu] = useState<null | number>(null);
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  const handleToggleSubMenu = (index: number) => {
    setOpenSubMenu((prev) => (prev === index ? null : index));
  };

  const displayMenuItems = () => {
    return (
      <ul className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            {item.subItems ? (
              <button
                onClick={() => handleToggleSubMenu(index)}
                className={`menu-item group ${
                  openSubMenu === index
                    ? "menu-item-active"
                    : "menu-item-inactive"
                } cursor-pointer ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "lg:justify-start"
                }`}
              >
                <span
                  className={`menu-item-icon-size ${
                    openSubMenu === index
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {item.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{item.name}</span>
                )}

                {(isExpanded || isHovered || isMobileOpen) && (
                  <BiChevronDown
                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                      openSubMenu === index ? "text-brand-500 rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            ) : (
              item.path && (
                <Link
                  to={item.path}
                  className={`menu-item group ${
                    isActive(item.path)
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  } `}
                >
                  <span
                    className={`menu-item-icon-size ${
                      isActive(item.path)
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text">{item.name}</span>
                  )}
                </Link>
              )
            )}
            {item.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  height:
                    openSubMenu === index
                      ? `${item.subItems.length * 50}px`
                      : 0,
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {item.subItems.map((subItem, index) => (
                    <li key={subItem.name}>
                      <Link
                        to={subItem.path}
                        className={`menu-dropdown-item ${
                          isActive(subItem.path)
                            ? "menu-dropdown-item-active"
                            : "menu-dropdown-item-inactive"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <aside
      className={`fixed flex flex-col bg-white mt-16 h-screen top-0 left-0 px-5 transition-all duration-300 ease-in-out z-50 border-r border-gray-500 lg:mt-0   ${
        isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
          ? "w-[290px]"
          : "w-[90px]"
      }
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
      lg:translate-x-0`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"
        }`}
      >
        <Link to="/dashboard">
          <img src={logo} alt="Logo" width={150} height={40} />
        </Link>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav>{displayMenuItems()}</nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
