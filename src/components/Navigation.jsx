import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Team', href: '#team' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' }
  ];

  const navClass = isScrolled 
    ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg' 
    : 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent';

  const linkClass = isScrolled
    ? 'font-medium transition-colors hover:text-primary-600 text-gray-700'
    : 'font-medium transition-colors hover:text-primary-600 text-white';

  const buttonClass = isScrolled
    ? 'lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100'
    : 'lg:hidden p-2 rounded-lg transition-colors text-white';

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  WCRL
                </span>
              </div>
            </a>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={linkClass}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Contact Us
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={buttonClass}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white border-t shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;