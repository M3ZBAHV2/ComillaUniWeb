import { Facebook, Twitter, Youtube, Linkedin, FlameIcon, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const footerLinks = {
  about: [
    { name: "Mission & Vision", path: "/about/mission" },
    { name: "History", path: "/about/history" },
    { name: "Leadership", path: "/about/leadership" },
    { name: "Campus", path: "/about/campus" },
  ],
  academics: [
    { name: "Departments", path: "/academics/departments" },
    { name: "Programs", path: "/academics/programs" },
    { name: "Faculty", path: "/academics/faculty" },
    { name: "Academic Calendar", path: "/academics/calendar" },
  ],
  resources: [
    { name: "Library", path: "/resources/library" },
    { name: "Research", path: "/resources/research" },
    { name: "Student Portal", path: "/resources/portal" },
    { name: "Career Services", path: "/resources/career" },
  ],
  apply: [
    { name: "Undergraduate", path: "/apply/undergraduate" },
    { name: "Graduate", path: "/apply/graduate" },
    { name: "International", path: "/apply/international" },
    { name: "Scholarships", path: "/apply/scholarships" },
  ],
};

const socialLinks = [
  { icon: Facebook, name: "Facebook", url: "#" },
  { icon: Twitter, name: "Twitter", url: "#" },
  { icon: Youtube, name: "YouTube", url: "#" },
  { icon: Linkedin, name: "LinkedIn", url: "#" },
  { icon: FlameIcon, name: "Flickr", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold">Comilla University</p>
                  <p className="text-sm">Cumilla-3506</p>
                  <p className="text-sm">Bangladesh</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">02334411101</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">info@cou.ac.bd</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-all hover-elevate"
                      aria-label={social.name}
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm hover:text-primary-foreground/80 transition-colors hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Academics</h3>
            <ul className="space-y-3">
              {footerLinks.academics.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm hover:text-primary-foreground/80 transition-colors hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm hover:text-primary-foreground/80 transition-colors hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Apply</h3>
            <ul className="space-y-3">
              {footerLinks.apply.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-sm hover:text-primary-foreground/80 transition-colors hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden mb-12 h-64">
          <iframe
            title="Comilla University Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.123456789!2d91.1810!3d23.4607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI3JzM4LjUiTiA5McKwMTAnNTEuNiJF!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-lg"
            data-testid="button-request-info"
          >
            Request for Information
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Comilla University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
