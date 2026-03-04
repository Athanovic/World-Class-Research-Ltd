import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { companyData } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Market Research', href: '#services' },
      { name: 'Social Research', href: '#services' },
      { name: 'CATI Centre', href: '#services' },
      { name: 'Data Analysis', href: '#services' }
    ],
    resources: [
      { name: 'Insights', href: '#insights' },
      { name: 'Case Studies', href: '#insights' },
      { name: 'Newsletter', href: '#insights' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                WCRL
              </span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {companyData.about.whoWeAre.substring(0, 150)}...
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-sm">{companyData.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href={`tel:${companyData.contact.phones[0]}`} className="text-sm hover:text-white transition-colors">
                  {companyData.contact.phones[0]}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Follow us:</span>
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 text-center">
              <p>
                Copyright © {currentYear} World-Class Research Limited. All rights reserved.
              </p>
              <p className="mt-1">
                Designed by <span className="text-primary-400">Athanas Mochama</span> & 
                Developed by <span className="text-primary-400">Albert Mochama</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
