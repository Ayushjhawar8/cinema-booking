import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Film className="h-8 w-8 text-secondary-500" />
              <span className="font-display font-bold text-xl">CineWorld</span>
            </Link>
            <p className="text-neutral-300 text-sm mb-6">
              Experience the magic of cinema with premium comfort and cutting-edge technology. Book your perfect movie experience today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-secondary-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/movies" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  All Movies
                </Link>
              </li>
              <li>
                <Link to="/movies?filter=now-showing" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  Now Showing
                </Link>
              </li>
              <li>
                <Link to="/movies?filter=coming-soon" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  Coming Soon
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  My Bookings
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-300 hover:text-secondary-500 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary-500 mt-0.5" />
                <span className="text-neutral-300 text-sm">123 Cinema Street, Movie District, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary-500" />
                <span className="text-neutral-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary-500" />
                <span className="text-neutral-300 text-sm">support@cineworld.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} CineWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;