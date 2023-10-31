import Logo from "../assets/images/logo.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
import { useSidebarContext } from "../context/SidebarProvider";
export default () => {
  const [showSearch, setShowSearch] = useState(false);
  const { toggle } = useSidebarContext();
  return (
    <div className="flex items-center justify-between gap-10 pt-2 mx-4 mb-6 lg:gap-20">
      <PageHeaderFirstSection hidden={showSearch} />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowSearch(false)}
        className={showSearch ? "flex" : "hidden"}
      >
        <ArrowLeft />
      </Button>
      <form
        className={`gap-4 flex-grow justify-center ${
          showSearch ? "flex" : "hidden md:flex"
        }`}
      >
        <div className="flex-grow flex max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-4 py-1 text-lg border rounded-l-full shadow-inner border-secondary-border shadow-secondary focus:border-blue-500 outline-0"
          />
          <Button className="flex-shrink-0 px-4 py-2 border border-l-0 rounded-r-full border-secondary-border">
            <Search />
          </Button>
        </div>
        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic />
        </Button>
      </form>
      <div
        className={`items-center md:gap-2 flex-shrink-0 ${
          showSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowSearch(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export const PageHeaderFirstSection = ({
  hidden = false,
}: {
  hidden?: boolean;
}) => {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`flex items-center gap-4 flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <img src={Logo} className="w-10" />
      <a href="/"></a>
    </div>
  );
};
