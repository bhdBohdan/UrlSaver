import "./NavBar.css";
import { useTheme } from "../context/theme-context";
import { MoonIcon, SunIcon } from "lucide-react";

const NavBar: React.FC = () => {
  const { toggle, theme } = useTheme();
  console.log(toggle, theme);

  return (
    <header>
      <div className="Navbar">
        <h3> KeK</h3>
        <button className="ThemeBtn" onClick={toggle}>
          {theme === "light" ? (
            <SunIcon size="2rem" color="#000000" />
          ) : (
            <MoonIcon size="2rem" color="#FAEB92" />
          )}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
