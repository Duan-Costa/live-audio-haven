
import { Link } from "react-router-dom";
import { Headphones, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Youtube, url: "#", label: "YouTube" },
  ];
  
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Schedule", url: "/schedule" },
    { name: "Blog", url: "/blog" },
    { name: "Contact", url: "/contact" },
    { name: "Donate", url: "/#donate" },
  ];

  return (
    <footer className="bg-radio-black text-white">
      <div className="container px-4 mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Headphones size={24} className="text-radio-blue" />
              <span className="font-bold text-xl">Radio Live</span>
            </div>
            <p className="text-radio-gray-300 mb-6">
              Bringing hope, inspiration, and the Good News to our community through uplifting music and encouraging messages.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-radio-blue transition-colors duration-300 p-2 rounded-full"
                >
                  <social.icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-radio-gray-300 hover:text-radio-blue transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-radio-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-radio-gray-300">
                  123 Worship Street, Faith City, FC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-radio-blue mr-3 flex-shrink-0" />
                <a
                  href="tel:+11234567890"
                  className="text-radio-gray-300 hover:text-radio-blue transition-colors duration-300"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-radio-blue mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@radiolive.com"
                  className="text-radio-gray-300 hover:text-radio-blue transition-colors duration-300"
                >
                  info@radiolive.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
            <p className="text-radio-gray-300 mb-4">
              Subscribe to our newsletter for updates and spiritual inspiration.
            </p>
            <div className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="rounded-l-none bg-radio-blue hover:bg-radio-dark-blue">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-radio-gray-300">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom footer - Copyright */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-radio-gray-300 text-sm">
            © {currentYear} Radio Live. All rights reserved.
          </div>
          <div className="flex items-center text-radio-gray-300 text-sm">
            Made with <Heart size={14} className="mx-1 text-radio-blue" /> for our listeners
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
