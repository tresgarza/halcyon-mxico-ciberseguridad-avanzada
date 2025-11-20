"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { subtleHover } from '@/lib/animations';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const platformMainItems = [
    { label: 'Visión General', href: '/plataforma/overview' },
    { label: 'Cómo Funciona', href: '/plataforma/como-funciona' },
    { label: 'Garantía', href: '/plataforma/warranty' },
  ];

  const platformCapabilitiesItems = [
    { label: 'Prevenir Ransomware', href: '/plataforma/anti-ransomware' },
    { label: 'Detener Exfiltración y Extorsión', href: '/plataforma/proteccion-exfiltracion' },
    { label: 'Recuperar Datos Encriptados', href: '/plataforma/recuperacion-datos' },
    { label: 'Monitoreo 24/7 por Expertos', href: '/plataforma/deteccion-recuperacion' },
  ];

  const infoItems = [
    { label: 'Nuestra Historia', href: '/nuestra-historia' },
    { label: 'Rankings Ransomware', href: '/informacion/rankings' },
    { label: 'Ataques Tiempo Real', href: '/informacion/ataques-tiempo-real' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 bg-gray-50/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl max-w-7xl mx-auto"
    >
      <div className="px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sección 1: Logo (funciona como inicio) */}
          <motion.a 
            href="/"
            className="flex items-center space-x-2 group"
            whileHover={subtleHover}
            whileTap={{ scale: 0.98 }}
          >
            <Image 
              src="/logo/Halcyon_Horiz_RGB_TRI-POS.png" 
              alt="Halcyon México" 
              width={160} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.a>

          {/* Desktop Menu - Secciones 2 y 3 */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            {/* Separador transparente */}
            <div className="flex-1"></div>
            
            {/* Sección 2: Links de navegación */}
            <div className="flex items-center space-x-2">
              {/* Plataforma Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-900 hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 gap-1 text-sm font-medium px-4 py-2 transition-colors duration-200">
                    Plataforma <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 text-[var(--halcyon-navy)] p-6 min-w-[280px] shadow-xl rounded-lg">
                  <div className="mb-4">
                    <div className="text-[var(--halcyon-orange)] font-semibold text-sm mb-2 px-2">
                      Plataforma Anti-Ransomware Halcyon
                    </div>
                    {platformMainItems.map((item) => (
                      <DropdownMenuItem key={item.href} asChild className="focus:bg-[var(--halcyon-orange)]/10 focus:text-[var(--halcyon-orange)] cursor-pointer px-3 py-2.5 rounded-md transition-colors duration-200 hover:bg-gray-50">
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="text-[var(--halcyon-orange)] font-semibold text-sm mb-2 px-2">
                      Capacidades Clave
                    </div>
                    {platformCapabilitiesItems.map((item) => (
                      <DropdownMenuItem key={item.href} asChild className="focus:bg-[var(--halcyon-orange)]/10 focus:text-[var(--halcyon-orange)] cursor-pointer px-3 py-2.5 rounded-md transition-colors duration-200 hover:bg-gray-50">
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Información Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-gray-900 hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 gap-1 text-sm font-medium px-4 py-2 transition-colors duration-200">
                    Información <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white border border-gray-200 text-[var(--halcyon-navy)] shadow-xl rounded-lg p-6">
                  {infoItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild className="focus:bg-[var(--halcyon-orange)]/10 focus:text-[var(--halcyon-orange)] cursor-pointer px-3 py-2.5 rounded-md transition-colors duration-200 hover:bg-gray-50">
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Other Static Links */}
              <Button variant="ghost" asChild className="text-gray-900 hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 text-sm font-medium px-4 py-2 transition-colors duration-200">
                <Link href="/#que-es-halcyon">Qué es Halcyon</Link>
              </Button>
              <Button variant="ghost" asChild className="text-gray-900 hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 text-sm font-medium px-4 py-2 transition-colors duration-200">
                <Link href="/#quienes-somos">Quiénes Somos</Link>
              </Button>
              <Button variant="ghost" asChild className="text-gray-900 hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 text-sm font-medium px-4 py-2 transition-colors duration-200">
                <Link href="/#industrias">Industrias</Link>
              </Button>
            </div>

            {/* Separador transparente */}
            <div className="flex-1"></div>

            {/* Sección 3: Botón Solicitar Demo */}
            <Button 
              asChild
              className="bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white text-sm font-medium px-6 py-2 rounded-full transition-colors duration-200"
            >
              <Link href="/#contacto">Solicitar Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
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
            className="md:hidden overflow-hidden bg-gray-50/98 backdrop-blur-lg border-t border-gray-200 h-screen overflow-y-auto rounded-b-2xl"
          >
            <div className="px-4 py-4 space-y-2 pb-24">
              <div className="px-4 py-2 text-[var(--halcyon-orange)] font-bold text-sm uppercase tracking-wider">Plataforma Anti-Ransomware Halcyon</div>
              {platformMainItems.map((item) => (
                <Button key={item.href} variant="ghost" asChild className="w-full justify-start text-gray-700 pl-8 hover:text-[var(--halcyon-orange)]" onClick={() => setIsOpen(false)}>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <div className="px-4 py-2 text-[var(--halcyon-orange)] font-bold text-sm uppercase tracking-wider mt-4">Capacidades Clave</div>
              {platformCapabilitiesItems.map((item) => (
                <Button key={item.href} variant="ghost" asChild className="w-full justify-start text-gray-700 pl-8 hover:text-[var(--halcyon-orange)]" onClick={() => setIsOpen(false)}>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}

              <div className="px-4 py-2 text-[var(--halcyon-orange)] font-bold text-sm uppercase tracking-wider">Información</div>
              {infoItems.map((item) => (
                 <Button key={item.href} variant="ghost" asChild className="w-full justify-start text-gray-700 pl-8 hover:text-[var(--halcyon-orange)]" onClick={() => setIsOpen(false)}>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}

              <Button variant="ghost" asChild className="w-full justify-start text-gray-700 hover:text-[var(--halcyon-orange)]" onClick={() => setIsOpen(false)}>
                <Link href="/#que-es-halcyon">Qué es Halcyon</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start text-gray-700 hover:text-[var(--halcyon-orange)]" onClick={() => setIsOpen(false)}>
                <Link href="/#quienes-somos">Quiénes Somos</Link>
              </Button>
              <Button variant="ghost" asChild className="w-full justify-start text-gray-700 hover:text-[var(--halcyon-orange)]" onClick={() => setIsOpen(false)}>
                <Link href="/#industrias">Industrias</Link>
              </Button>
              <Button 
                asChild 
                className="w-full justify-center bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white mt-4"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/#contacto">Solicitar Demo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
