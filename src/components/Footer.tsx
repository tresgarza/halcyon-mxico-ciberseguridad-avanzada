"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' }
  ];

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { label: 'Quiénes Somos', href: '#quienes-somos' },
        { label: 'Qué es Halcyon', href: '#que-es-halcyon' },
        { label: 'Casos de Éxito', href: '#casos-exito' }
      ]
    },
    {
      title: 'Soluciones',
      links: [
        { label: 'Protección Ransomware', href: '#proteccion' },
        { label: 'Amenazas', href: '#amenazas' },
        { label: 'Contacto', href: '#contacto' }
      ]
    }
  ];

  return (
    <footer className="bg-[var(--halcyon-navy)] border-t border-[var(--halcyon-orange)]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="h-8 w-8 text-[var(--halcyon-orange)]" />
              </motion.div>
              <span className="text-xl font-bold group-hover:text-[var(--halcyon-orange)] transition-colors duration-300">
                Halcyon México
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Representación oficial de Halcyon en México. Protección inteligente contra ransomware con IA.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--halcyon-orange)]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[var(--halcyon-orange)]">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <motion.li 
                className="flex items-center space-x-2 text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@halcyon.mx">info@halcyon.mx</a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2 text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300 group"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+525555555555">+52 55 5555 5555</a>
              </motion.li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="bg-[var(--halcyon-blue)] hover:bg-[var(--halcyon-orange)] text-white p-2 rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-[var(--halcyon-orange)]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Halcyon México. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacidad
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Términos
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}