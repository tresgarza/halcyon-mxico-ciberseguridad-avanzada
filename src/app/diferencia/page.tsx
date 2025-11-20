"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, RefreshCw } from 'lucide-react';

export default function DifferencePage() {
  return (
    <div className="min-h-screen bg-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24 pb-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              La Diferencia Halcyon
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Por Qué Somos Diferentes
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              La plataforma Halcyon combina nuestra tecnología anti-ransomware, servicio gestionado 24/7 y garantía de ransomware para eliminar el riesgo de ransomware en tu negocio.
            </p>
          </div>
        </section>

        <section className="bg-[var(--halcyon-blue)] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[var(--halcyon-navy)] p-6 rounded-2xl border border-[var(--halcyon-orange)]/20 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300">
                   <Shield className="h-16 w-16 text-[var(--halcyon-orange)] mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4">TECNOLOGÍA ANTI-RANSOMWARE</h3>
                   <p className="text-gray-300 text-lg">
                     Halcyon protege a través de cada etapa del ransomware – desde la pre-ejecución hasta la exfiltración de datos y la encriptación. A diferencia de otras herramientas que solo detectan, nosotros bloqueamos y revertimos.
                   </p>
                </div>
                
                <div className="bg-[var(--halcyon-navy)] p-8 rounded-2xl border border-[var(--halcyon-yellow)]/20 hover:border-[var(--halcyon-yellow)]/50 transition-all duration-300">
                   <Lock className="h-16 w-16 text-[var(--halcyon-yellow)] mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4">DETECCIÓN Y RECUPERACIÓN (RDR)</h3>
                   <p className="text-gray-300 text-lg">
                     Nuestro equipo de expertos RDR 24/7 maneja la lucha contra el ransomware por ti, sirviendo sin costo adicional. Monitoreo constante, caza de amenazas y respuesta a incidentes incluida.
                   </p>
                </div>
                
                <div className="bg-[var(--halcyon-navy)] p-6 rounded-2xl border border-[var(--halcyon-orange)]/20 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300">
                   <RefreshCw className="h-16 w-16 text-[var(--halcyon-orange)] mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4">GARANTÍA DE RANSOMWARE</h3>
                   <p className="text-gray-300 text-lg">
                     Reduce el riesgo con nuestra garantía integral contra ransomware. Ofrecemos respaldo financiero y técnico, demostrando nuestra confianza en la eficacia de nuestra plataforma.
                   </p>
                </div>
             </div>

             <div className="mt-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Halcyon Hace Lo Que Otros No Pueden
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                   <div className="p-6 bg-[var(--halcyon-navy)]/50 rounded-xl">
                      <h4 className="font-bold text-[var(--halcyon-orange)] mb-2">PREVENCIÓN DE RANSOMWARE</h4>
                      <p className="text-sm text-gray-400">Motores de IA y comportamiento sintonizados específicamente para detectar ransomware y actividad relacionada.</p>
                   </div>
                   <div className="p-6 bg-[var(--halcyon-navy)]/50 rounded-xl">
                      <h4 className="font-bold text-[var(--halcyon-orange)] mb-2">DETECCIÓN DE MANIPULACIÓN EDR</h4>
                      <p className="text-sm text-gray-400">Halcyon detiene ataques BYOVD que intentan manipular herramientas de seguridad y monitorea EDRs de terceros.</p>
                   </div>
                   <div className="p-6 bg-[var(--halcyon-navy)]/50 rounded-xl">
                      <h4 className="font-bold text-[var(--halcyon-orange)] mb-2">PROTECCIÓN EXFILTRACIÓN DE DATOS</h4>
                      <p className="text-sm text-gray-400">Para detener intentos de doble extorsión, Halcyon busca signos de robo de datos que a menudo preceden al cifrado.</p>
                   </div>
                   <div className="p-6 bg-[var(--halcyon-navy)]/50 rounded-xl">
                      <h4 className="font-bold text-[var(--halcyon-orange)] mb-2">RECUPERACIÓN SIN BACKUP</h4>
                      <p className="text-sm text-gray-400">Si un ataque es exitoso, nuestra capacidad única de capturar material clave y descifradores personalizados permite recuperar archivos rápidamente.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
