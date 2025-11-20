"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Quiénes Somos', href: '#quienes-somos' },
    { label: 'Qué es Halcyon', href: '#que-es-halcyon' },
    { label: 'Amenazas', href: '#amenazas' },
    { label: 'Protección', href: '#proteccion' },
    { label: 'Casos de Éxito', href: '#casos-exito' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--halcyon-navy)]/95 backdrop-blur-md border-b border-[var(--halcyon-orange)]/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="#inicio"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Shield className="h-8 w-8 text-[var(--halcyon-orange)]" />
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-[var(--halcyon-orange)] transition-colors duration-300">
              Halcyon México
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  asChild
                  className="text-white hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 transition-all duration-300 relative group"
                >
                  <a href={item.href}>
                    {item.label}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--halcyon-orange)] group-hover:w-full transition-all duration-300"
                    />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[var(--halcyon-navy)]/98 backdrop-blur-lg border-t border-[var(--halcyon-orange)]/20"
          >
            <div className="px-4 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Button
                    variant="ghost"
                    asChild
                    className="w-full justify-start text-white hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}