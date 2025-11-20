"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { subtleHover, subtleFadeIn } from '@/lib/animations';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Empresa',
      links: [
        { label: 'Quiénes Somos', href: '/#quienes-somos' },
        { label: 'Nuestra Historia', href: '/#nuestra-historia' },
        { label: 'Por qué Halcyon', href: '/#por-que-halcyon' },
        { label: 'Casos de Éxito', href: '/#casos-exito' }
      ]
    },
    {
      title: 'Soluciones',
      links: [
        { label: 'Plataforma', href: '/plataforma/overview' },
        { label: 'Anti-Ransomware', href: '/plataforma/anti-ransomware' },
        { label: 'Recuperación', href: '/plataforma/recuperacion-datos' },
        { label: 'Servicios (RDR)', href: '/plataforma/deteccion-recuperacion' }
      ]
    }
  ];

  return (
    <footer className="bg-[var(--halcyon-navy)] border-t border-[var(--halcyon-orange)]/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtleFadeIn}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 group">
              <motion.div
                whileHover={subtleHover}
              >
                <Image 
                  src="/logo/Halcyon_Horiz_RGB_TRI-WHT.png" 
                  alt="Halcyon México" 
                  width={180} 
                  height={48}
                  className="h-12 w-auto"
                />
              </motion.div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Representación oficial de Halcyon en México. Protección inteligente contra ransomware con IA.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={subtleFadeIn}
              transition={{ delay: (sectionIndex + 1) * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-[var(--halcyon-orange)]">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li 
                    key={link.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300 text-sm block"
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtleFadeIn}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-[var(--halcyon-orange)]">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <motion.li 
                className="flex items-center space-x-2 text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300 group"
                whileHover={{ x: 4 }}
              >
                <Mail className="h-4 w-4 transition-transform duration-300" />
                <a href="mailto:achavez@halcyon.mx">achavez@halcyon.mx</a>
              </motion.li>
              <motion.li 
                className="flex items-center space-x-2 text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300 group"
                whileHover={{ x: 4 }}
              >
                <Phone className="h-4 w-4 transition-transform duration-300" />
                <a href="tel:+528113132698">811-313-2698</a>
              </motion.li>
            </ul>
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
              href="/privacidad"
              className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Privacidad
            </motion.a>
            <motion.a
              href="/sla"
              className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              SLA
            </motion.a>
            <motion.a
              href="https://halcyon.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--halcyon-orange)] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Halcyon Global
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
