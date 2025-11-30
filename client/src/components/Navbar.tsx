import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/image-removebg-preview_1764509305284.png";

const menuItems = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Academics", path: "#academics" },
  { name: "Admissions", path: "#admissions" },
  { name: "Research", path: "#research" },
  { name: "Student Life", path: "#student-life" },
  { name: "News", path: "#news" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 hover-elevate rounded-md px-3 py-2 -ml-3 transition-all cursor-pointer">
                <img 
                  src={logoPath} 
                  alt="Cumilla University Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="hidden md:block">
                  <div className="font-bold text-lg text-foreground">Comilla University</div>
                  <div className="text-xs text-muted-foreground">Excellence in Education</div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.path} 
                  data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="no-underline"
                >
                  <Button
                    variant="ghost"
                  >
                    {item.name}
                  </Button>
                </a>
              ))}
            </div>

            {/* Right Side - Search and Mobile Menu */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-search"
                className="hidden md:flex"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden"
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-md pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.path}
                    className="no-underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-lg py-6"
                      data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                    </Button>
                  </a>
                ))}
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg py-6 mt-4"
                  data-testid="mobile-button-search"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
