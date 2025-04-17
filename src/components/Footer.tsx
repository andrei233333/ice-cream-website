import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nutri-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">NutriScoop</h3>
            <p className="text-white/80">
              Delicious vegan ice cream made with natural ingredients. 
              Perfect for everyone who loves a healthy treat!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-nutri-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-nutri-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-nutri-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-nutri-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Our Flavors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ice Cream Flavors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Flavors</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products/1" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Carrot Flavor
                </Link>
              </li>
              <li>
                <Link to="/products/2" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Corn Flavor
                </Link>
              </li>
              <li>
                <Link to="/products/3" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Cucumber Flavor
                </Link>
              </li>
              <li>
                <Link to="/products/4" className="text-white/80 hover:text-nutri-orange transition-colors">
                  Sweet Potato Flavor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80">
              <li>123 Ice Cream Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@nutriscoop.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} NutriScoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
