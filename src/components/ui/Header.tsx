import { useTheme } from "../../context/theme-provider";
import { Link } from "react-router-dom";
import { Input } from "../../components/ui/Input";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 py-3 px-4">

        {/* Logo */}
        <Link to="/">
          <img
            src={isDark ? "/logo_dark.jpg" : "/logo.jpg"}
            alt="ClimaView Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <Input placeholder="Search city..." />
        </div>

        {/* Theme Toggle */}
        <div
          className={`cursor-pointer p-2 rounded-md  transition-transform duration-500 ${isDark ?'rotate-180' : 'rotate-0'}` }
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Sun className="h-6 w-6 text-yellow-300 rotate-0 transition-all" /> : <Moon className="h-6 w-6 text-blue-500  transition-all" />} 
        </div>
      </div>
    </header>
  );
}
