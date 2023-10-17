import Logo from "../assets/images/logo.png";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";
export default () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="flex items-center gap-10 pt-2 mb-6 mx-4 lg:gap-20 justify-between">
      <div
        className={`flex items-center gap-4 flex-shrink-0 ${
          showSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <img src={Logo} className="w-10" />
        <a href="/"></a>
      </div>
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
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-0"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
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
