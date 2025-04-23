import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Film, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-primary-900 shadow-md py-3' 
          : 'bg-gradient-to-b from-primary-900/90 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Film className="h-8 w-8 text-secondary-500" />
            <span className="text-white font-display font-bold text-xl md:text-2xl">CineWorld</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-secondary-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/movies" className="text-white hover:text-secondary-300 transition-colors font-medium">
              Movies
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-6">
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-white hover:text-secondary-300 transition-colors font-medium">
                    Admin
                  </Link>
                )}
                <Link to="/profile" className="text-white hover:text-secondary-300 transition-colors font-medium">
                  Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="text-white hover:text-secondary-300 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold px-4 py-2 rounded-md transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-primary-900 absolute top-full left-0 right-0 p-4 shadow-xl animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/movies" 
                className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                Movies
              </Link>
              
              {user ? (
                <>
                  {user.role === 'admin' && (
                    <Link 
                      to="/admin" 
                      className="text-white hover:text-secondary-300 transition-colors font-medium py-2"
                      onClick={closeMenu}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <Link 
                    to="/profile" 
                    className="text-white hover:text-secondary-300 transition-colors font-medium py-2 flex items-center gap-2"
                    onClick={closeMenu}
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 w-full justify-center"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-2">
                  <Link 
                    to="/login" 
                    className="text-white hover:text-secondary-300 transition-colors font-medium py-2 border border-white/20 rounded-md text-center"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-bold py-2 rounded-md transition-colors text-center"
                    onClick={closeMenu}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;