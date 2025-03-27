
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Schedule", path: "/schedule" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-white/95 shadow-sm backdrop-blur-md" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <Headphones 
            size={32} 
            className="text-radio-blue" 
          />
          <span className="font-bold text-xl text-radio-black">Radio Live</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-radio-gray-700 hover:text-radio-blue transition-colors relative py-2",
                location.pathname === link.path && "text-radio-blue font-medium",
                "after:absolute after:h-0.5 after:bg-radio-blue after:bottom-0 after:left-0",
                location.pathname === link.path 
                  ? "after:w-full" 
                  : "after:w-0 hover:after:w-full after:transition-all after:duration-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-radio-blue hover:bg-radio-dark-blue transition-colors"
          >
            <a href="#listen">Listen Live</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "block w-6 h-0.5 bg-radio-black transition-transform duration-300",
              isMobileMenuOpen && "rotate-45 translate-y-2"
            )} 
          />
          <span 
            className={cn(
              "block w-6 h-0.5 bg-radio-black transition-opacity duration-300",
              isMobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "block w-6 h-0.5 bg-radio-black transition-transform duration-300",
              isMobileMenuOpen && "-rotate-45 -translate-y-2"
            )} 
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 md:hidden",
            isMobileMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-xl font-medium text-radio-gray-700 hover:text-radio-blue transition-colors",
                location.pathname === link.path && "text-radio-blue"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild
            className="bg-radio-blue hover:bg-radio-dark-blue transition-colors w-40 mt-4"
          >
            <a href="#listen">Listen Live</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
