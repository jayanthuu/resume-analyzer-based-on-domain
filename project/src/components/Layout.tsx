import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-100">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Heart className="h-8 w-8 text-pink-500" />
                <span className="ml-2 text-xl font-bold text-pink-600">Resume Analyzer Pro</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md transition ${
                  location.pathname === '/' ? 'text-pink-600 font-medium' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/domains" 
                className={`text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md transition ${
                  location.pathname.includes('/domains') ? 'text-pink-600 font-medium' : ''
                }`}
              >
                Domains
              </Link>
              <a 
  href="http://localhost:5000/" 
  className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md transition"
>
  Analyze Resume
</a>

            </div>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-3 px-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md ${
                  location.pathname === '/' ? 'text-pink-600 font-medium' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/domains" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md ${
                  location.pathname.includes('/domains') ? 'text-pink-600 font-medium' : ''
                }`}
              >
                Domains
              </Link>
              <Link 
                to="/analyze" 
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md ${
                  location.pathname === '/analyze' ? 'text-pink-600 font-medium' : ''
                }`}
              >
                Analyze Resume
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="ml-2 text-lg font-semibold text-pink-600">Resume Analyzer Pro</span>
            </div>
            <div className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Resume Analyzer Pro. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};