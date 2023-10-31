import { ReactNode, createContext, useContext, useState } from "react";

type SidebarProvderProps = {
  children: ReactNode;
};
type SidebarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};
const SidebarContext = createContext<SidebarContextType | null>(null);
export const useSidebarContext = () => {
  const value = useContext(SidebarContext);
  if (value === null) {
    throw Error("Cannot use outside of SidebarProvider");
  }
  return value;
};
export default ({ children }: SidebarProvderProps) => {
  const [isLargeOpen, setIsLargeOpen] = useState(true);
  const [isSmallOpen, setIsSmallOpen] = useState(false);
  const toggle = () => {
    if (isScreenSmall()) {
      setIsSmallOpen((s) => !s);
    } else {
      setIsLargeOpen((l) => !l);
    }
  };
  const close = () => {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  };
  const isScreenSmall = () => {
    return window.innerWidth < 1024;
  };
  return (
    <SidebarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
