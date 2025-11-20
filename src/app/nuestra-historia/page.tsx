"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Shield, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { subtleFadeIn, subtleScale } from '@/lib/animations';

export default function NuestraHistoriaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--halcyon-navy)] via-[var(--halcyon-blue)] to-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24 pb-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-7xl mx-auto text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={subtleFadeIn}
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Nuestra Historia
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Orígenes y Misión
            </h1>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Inicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subtleFadeIn}
              >
                <h3 className="text-3xl font-bold mb-4 text-[var(--halcyon-orange)]">Nuestros Inicios</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Halcyon fue fundada en 2021 por un equipo de veteranos de la industria de la ciberseguridad, después de años de enfrentar el creciente problema del ransomware y otras amenazas avanzadas. Nuestro equipo directivo está conformado por especialistas provenientes de empresas líderes como Boldend, Cylance (ahora BlackBerry), Accuvant (ahora Optiv) e ISS X-Force (ahora IBM).
                  <br /><br />
                  Unidos por la visión de un futuro más seguro, donde el ransomware deje de ser un riesgo empresarial, operamos como una organización global.
                </p>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subtleScale}
              >
                 <div className="bg-[var(--halcyon-navy)] p-6 rounded-2xl shadow-xl border border-[var(--halcyon-orange)]/20 transition-all duration-500 hover:border-[var(--halcyon-orange)]/50">
                    <Shield className="h-32 w-32 text-[var(--halcyon-orange)]" />
                 </div>
              </motion.div>
            </div>

            {/* Por Qué */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
               <motion.div 
                className="flex justify-center md:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subtleScale}
              >
                 <div className="bg-[var(--halcyon-navy)] p-8 rounded-2xl shadow-xl border border-[var(--halcyon-yellow)]/20 transition-all duration-500 hover:border-[var(--halcyon-yellow)]/50">
                    <AlertTriangle className="h-32 w-32 text-[var(--halcyon-yellow)]" />
                 </div>
              </motion.div>
              <motion.div 
                className="md:order-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subtleFadeIn}
              >
                <h3 className="text-3xl font-bold mb-4 text-[var(--halcyon-orange)]">Nuestro Por qué</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Estamos comprometidos con ofrecer soluciones dedicadas contra el ransomware que eliminen la necesidad de pagar rescates, aseguren la continuidad operativa y protejan a las empresas de la extorsión de datos.
                  <br /><br />
                  A pesar de las soluciones actuales, los grupos de ransomware siguen avanzando. Han perfeccionado técnicas para evadir y deshabilitar controles tradicionales, comprometiendo endpoints y eliminando respaldos una vez que logran acceso al entorno.
                </p>
              </motion.div>
            </div>

            {/* Cómo */}
            <motion.div 
              className="bg-white/5 p-8 md:p-12 rounded-2xl shadow-lg border border-[var(--halcyon-orange)]/20 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={subtleFadeIn}
            >
              <h3 className="text-3xl font-bold mb-6 text-[var(--halcyon-orange)] text-center">Nuestro Cómo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nuestra plataforma —la primera diseñada exclusivamente para combatir este tipo de ataques— opera a lo largo de toda la cadena de ataque, desde la intrusión inicial hasta la exfiltración y el cifrado.
                  <br /><br />
                  Halcyon se integra perfectamente con su infraestructura de seguridad actual, fortaleciendo sus defensas con una capa especializada de detección, protección y recuperación.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nuestra tecnología captura llaves de cifrado y material criptográfico crítico en pleno ataque, permitiendo descifrar y recuperar los datos esenciales de la organización. Además, ofrecemos detección y recuperación de ransomware 24/7/365.
                </p>
              </div>
            </motion.div>

            {/* Nombre */}
            <motion.div 
              className="text-center max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl border border-[var(--halcyon-blue)]/30"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={subtleScale}
            >
              <h3 className="text-3xl font-bold mb-2 text-white">hal·cy·on</h3>
              <p className="text-sm text-gray-400 mb-6 italic">/ˈhalsēən/</p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Halcyon es una palabra real que significa “un periodo del pasado caracterizado por la paz y la tranquilidad”. Este concepto refleja nuestra visión de un futuro donde el ransomware deja de ser una amenaza para las organizaciones.
                <br /><br />
                El nombre también rinde homenaje a la cultura tecnológica que inspira a nuestro equipo. Proviene de “Halcyon”, una pieza musical de la banda Orbital utilizada en la película Hackers (1995), un referente dentro del mundo de la ciberseguridad.
              </p>
            </motion.div>
          </div>
          
          {/* Reconocimientos Link */}
          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtleFadeIn}
          >
            <Button
              variant="outline"
              className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="/informacion/rankings">Ver Reconocimientos y Rankings</a>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
