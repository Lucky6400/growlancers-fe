import { GiCrystalGrowth } from "react-icons/gi";
import { NavMenu } from "./NavMenu";
import ProfileInfo from "./ProfileInfo";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "@/redux/reducers/themeslice";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";  // Unique Hamburger Icon

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the theme
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  return (
    <header className="bg-primary px-5 flex items-center justify-between h-20 border-b border-gray-500 relative">
      {/* Left Section: Logo and Brand Name */}
      <div className="flex items-center text-4xl text-white gap-3 font-serif">
        <GiCrystalGrowth color="#fff" />
        <p>Growlancer</p>
      </div>

      {/* Navigation Menu for larger screens */}
      <div className="hidden md:flex">
        <NavMenu />
      </div>

      {/* Theme Toggle & Profile for larger screens */}
      <div className="hidden md:flex items-center gap-4">
        <button onClick={handleThemeToggle} className="text-xl text-white">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <ProfileInfo />
      </div>

      {/* Hamburger Menu for mobile screens */}
      <div className="flex md:hidden items-center gap-4">
        {/* Theme Toggle Button for Mobile */}
        <button onClick={handleThemeToggle} className="text-xl text-white">
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </button>
        
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-white"
        >
          <HiMenuAlt3 />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-primary p-5 space-y-4">
            <ProfileInfo  />
            <NavMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
