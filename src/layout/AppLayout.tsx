import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import SidebarProvider from "../context/SidebarProvider";
import { useSidebar } from "../context/SidebarProvider";
const LayoutContent = () => {
  const { isExpanded, isMobileOpen, isHovered } = useSidebar();
  // console.log(isExpanded);
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar />
      </div>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen && "ml-0"}`}
      >
        <AppHeader />
        <div className="bg-white p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
