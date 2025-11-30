import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/image-removebg-preview_1764509305284.png";

const menuItems = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about", hasDropdown: true },
  { name: "Academics", path: "#academics", hasDropdown: true },
  { name: "Administrations", path: "#administrations", hasDropdown: true },
  { name: "Research", path: "#research", hasDropdown: true },
  { name: "Student Life", path: "#student-life" },
  { name: "News", path: "#news" },
  { name: "Contact", path: "#contact" },
];

const aboutDropdownItems = [
  {
    category: "About University",
    items: [
      { name: "University at a Glance", path: "#university-glance" },
      { name: "Vision & Mission", path: "#vision-mission" },
      { name: "List of Vice Chancellors", path: "#vice-chancellors" },
    ]
  },
  {
    category: "University Leadership",
    items: [
      { name: "Vice Chancellor", path: "#vice-chancellor" },
      { name: "Pro-Vice Chancellor", path: "#pro-vice-chancellor" },
      { name: "Treasurer", path: "#treasurer" },
    ]
  },
  {
    category: "Governance Framework",
    items: [
      { name: "University Ordinance", path: "#ordinance" },
      { name: "Syndicate Members", path: "#syndicate" },
      { name: "Academic Council", path: "#academic-council" },
      { name: "University Statues", path: "#statues" },
      { name: "W&C abuse prevention committee", path: "#prevention-committee" },
    ]
  }
];

const academicsDropdownItems = [
  {
    category: "Academic",
    items: [
      { name: "Academic Programs", path: "#academic-programs" },
      { name: "Academic Calendar", path: "#academic-calendar" },
      { name: "Academic Curriculum", path: "#academic-curriculum" },
      { name: "Admission", path: "#admission" },
      { name: "Central Library", path: "#central-library" },
    ]
  },
  {
    category: "Academic Bodies",
    items: [
      { name: "Faculties", path: "#faculties" },
      { name: "Departments", path: "#departments" },
    ]
  },
  {
    category: "Admission",
    items: [
      { name: "Undergraduate Programs", path: "#undergraduate-programs" },
      { name: "Graduate Programs", path: "#graduate-programs" },
      { name: "PhD Programs", path: "#phd-programs" },
      { name: "EMBA", path: "#emba" },
      { name: "EMCS", path: "#emcs" },
      { name: "EMA", path: "#ema" },
      { name: "EMICT", path: "#emict" },
    ]
  }
];

const administrationsDropdownItems = [
  {
    category: "Academic Heads",
    items: []
  },
  {
    category: "Member Profile",
    items: [
      { name: "Faculty Member Profile", path: "#faculty-member-profile" },
      { name: "Officer Profile", path: "#officer-profile" },
    ]
  },
  {
    category: "Others",
    items: [
      { name: "VC office", path: "#vc-office" },
      { name: "Pro VC Office", path: "#pro-vc-office" },
      { name: "Treasurer Office", path: "#treasurer-office" },
      { name: "Proctor Office", path: "#proctor-office" },
      { name: "Research & Extension Office", path: "#research-extension-office" },
      { name: "IQAC", path: "#iqac" },
      { name: "Student Counselling", path: "#student-counselling" },
      { name: "All Offices", path: "#all-offices" },
    ]
  }
];

const researchDropdownItems = [
  {
    category: "Research",
    items: [
      { name: "Ongoing Research", path: "#ongoing-research" },
      { name: "Completed Research", path: "#completed-research" },
      { name: "Funded Research", path: "#funded-research" },
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
              {menuItems.map((item) => {
                if (item.hasDropdown) {
                  const isOpen = openDropdown === item.name;
                  let dropdownItems;
                  if (item.name === "About") {
                    dropdownItems = aboutDropdownItems;
                  } else if (item.name === "Academics") {
                    dropdownItems = academicsDropdownItems;
                  } else if (item.name === "Administrations") {
                    dropdownItems = administrationsDropdownItems;
                  } else {
                    dropdownItems = researchDropdownItems;
                  }
                  
                  return (
                    <div 
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Button
                        variant="ghost"
                        data-testid={`link-${item.name.toLowerCase()}`}
                        className="flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </Button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-max bg-background border border-border rounded-md shadow-lg overflow-hidden transition-all duration-300 origin-top z-40 ${
                          isOpen 
                            ? 'opacity-100 visible scale-y-100 translate-y-0' 
                            : 'opacity-0 invisible scale-y-95 -translate-y-2'
                        }`}
                      >
                        <div className={`${dropdownItems.length === 1 ? 'grid grid-cols-1' : 'grid grid-cols-3 divide-x'} divide-border p-6`}>
                          {dropdownItems.map((column, idx) => (
                            <div key={idx} className={`${dropdownItems.length > 1 ? 'px-6' : ''} min-w-max`}>
                              <h3 className="font-semibold text-sm text-foreground mb-4">{column.category}</h3>
                              <div className="flex flex-col gap-3">
                                {column.items.map((subitem) => (
                                  <a
                                    key={subitem.name}
                                    href={subitem.path}
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 no-underline"
                                    data-testid={`link-${subitem.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  >
                                    {subitem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
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
                );
              })}
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
