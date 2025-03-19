import { createContext, useContext, useState, useEffect } from "react";

type SidebarContextType = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  isMobileOpen: boolean;
  isExpanded: boolean;
  isHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
};
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };
  const toggleMobileSidebar = () => {
    setIsMobileOpen((prevVal) => !prevVal);
  };
  //check mobile

  useEffect(() => {
    const handleResize = () => {
      const onMobile = window.innerWidth < 768;
      setIsMobileOpen(onMobile);
      if (!onMobile) {
        setIsMobileOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isMobileOpen,
        isExpanded: isMobile ? false : isExpanded,
        isHovered,
        setIsHovered,
        toggleMobileSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
