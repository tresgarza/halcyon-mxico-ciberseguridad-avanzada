"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Users,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import { 
  fadeInUp, 
  subtleFadeIn, 
  staggerContainer,
  slideInLeft,
  slideInRight,
  subtleScale,
  cardHover
} from '@/lib/animations';

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                Garantía de Ransomware
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Garantía de Ransomware Halcyon
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Reduce el riesgo con nuestra garantía integral contra ransomware. Si un ataque elude las defensas de Halcyon, proporcionamos servicios de respuesta a incidentes y recuperación liderados por expertos sin costo adicional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is the Halcyon Warranty */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/40">
                  La Garantía Halcyon
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                  ¿Qué es la Garantía Halcyon?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  La Garantía de Ransomware Halcyon es nuestro compromiso contigo. Si un ataque de ransomware elude las defensas de Halcyon mientras tienes la plataforma correctamente implementada y configurada, proporcionamos servicios completos de respuesta a incidentes y recuperación sin costo adicional.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Esta garantía demuestra nuestra confianza en la efectividad de nuestra plataforma y nuestro compromiso con tu éxito. No solo vendemos tecnología; respaldamos su efectividad con acción.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center"
              >
                <div className="bg-white p-8 rounded-2xl border border-[var(--halcyon-orange)]/30 shadow-sm">
                  <ShieldCheck className="h-24 w-24 text-[var(--halcyon-orange)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Warranty Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                Cobertura de la Garantía
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Si se activa la garantía, Halcyon proporciona servicios completos de respuesta y recuperación sin costo adicional.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: "Servicios de Respuesta a Incidentes",
                  description: "Nuestro equipo de expertos en ransomware lidera la respuesta al incidente, investigando el ataque, conteniendo la amenaza y evaluando el alcance del daño.",
                  icon: <AlertTriangle className="h-12 w-12" />
                },
                {
                  title: "Servicios de Recuperación",
                  description: "Lideramos el esfuerzo de recuperación completo, usando llaves capturadas para descifrar datos, restaurar sistemas y devolver tu negocio a la normalidad operativa.",
                  icon: <RefreshCw className="h-12 w-12" />
                },
                {
                  title: "Sin Costo Adicional",
                  description: "Todos los servicios de respuesta y recuperación están incluidos sin costo adicional cuando se activa la garantía. No hay cargos ocultos ni costos inesperados.",
                  icon: <FileCheck className="h-12 w-12" />
                },
                {
                  title: "Liderazgo por Expertos",
                  description: "Nuestro equipo de expertos en ransomware trabaja contigo las 24 horas del día hasta que todos tus sistemas estén completamente operativos nuevamente.",
                  icon: <Users className="h-12 w-12" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="bg-[var(--halcyon-orange)]/20 p-4 rounded-lg flex-shrink-0">
                          <div className="text-[var(--halcyon-orange)]">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{item.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why We Offer a Warranty */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="lg:order-2 flex justify-center"
              >
                <div className="bg-white p-8 rounded-2xl border border-[var(--halcyon-yellow)]/30 shadow-sm">
                  <Shield className="h-24 w-24 text-[var(--halcyon-yellow)]" />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="lg:order-1"
              >
                <Badge className="mb-4 bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/40">
                  Nuestra Confianza
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                  Por Qué Ofrecemos una Garantía
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ofrecemos esta garantía porque tenemos confianza absoluta en la efectividad de nuestra plataforma. Hemos construido Halcyon específicamente para prevenir, detectar y recuperarse de ataques de ransomware, y sabemos que funciona.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Esta garantía no es solo una promesa; es una demostración de nuestro compromiso contigo y nuestra confianza en que Halcyon protegerá tu negocio contra ransomware.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How the Warranty Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                Cómo Funciona la Garantía
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                El proceso de activación de la garantía es simple y directo. Estamos aquí para ayudarte cuando más lo necesitas.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {[
                {
                  step: "1",
                  title: "Implementación Correcta de Halcyon",
                  description: "Halcyon debe estar correctamente implementado y configurado en tu entorno según nuestras mejores prácticas y recomendaciones.",
                  icon: <FileCheck className="h-8 w-8" />
                },
                {
                  step: "2",
                  title: "Si Hay un Ataque Exitoso",
                  description: "Si a pesar de tener Halcyon correctamente implementado, tu organización sufre un ataque de ransomware exitoso que elude las defensas de Halcyon.",
                  icon: <AlertTriangle className="h-8 w-8" />
                },
                {
                  step: "3",
                  title: "Activación de la Garantía",
                  description: "Contactas a nuestro equipo para activar la garantía. Nuestro equipo evalúa la situación y confirma que se cumplen los términos de la garantía.",
                  icon: <Shield className="h-8 w-8" />
                },
                {
                  step: "4",
                  title: "Servicios Proporcionados",
                  description: "Nuestro equipo de expertos proporciona servicios completos de respuesta a incidentes y recuperación sin costo adicional hasta que todos tus sistemas estén operativos nuevamente.",
                  icon: <Users className="h-8 w-8" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="bg-[var(--halcyon-orange)]/20 p-4 rounded-lg flex-shrink-0">
                          <div className="text-[var(--halcyon-orange)]">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <Badge className="bg-[var(--halcyon-orange)] text-white text-lg px-4 py-1">
                              {step.step}
                            </Badge>
                            <h3 className="text-2xl font-bold text-[var(--halcyon-navy)]">{step.title}</h3>
                          </div>
                          <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                Beneficios de la Garantía
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Reducción de Riesgo Financiero",
                  description: "La garantía reduce tu riesgo financiero al proporcionar servicios de respuesta y recuperación sin costo adicional si hay un ataque exitoso.",
                  icon: <ShieldCheck className="h-12 w-12" />
                },
                {
                  title: "Confianza en la Plataforma",
                  description: "La garantía demuestra nuestra confianza en la efectividad de Halcyon y nuestro compromiso con tu éxito.",
                  icon: <Shield className="h-12 w-12" />
                },
                {
                  title: "Respuesta Garantizada",
                  description: "Sabes que si algo sale mal, tienes un equipo de expertos listo para ayudarte inmediatamente sin preocuparte por costos adicionales.",
                  icon: <CheckCircle2 className="h-12 w-12" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-6 text-[var(--halcyon-orange)]">
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{benefit.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={subtleScale}
            >
              <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                Protección con Garantía
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Obtén Protección con Garantía
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Con Halcyon, obtienes no solo la mejor protección contra ransomware, sino también la garantía de que si algo sale mal, estamos aquí para ayudarte sin costo adicional.
              </p>

              <div className="bg-[var(--halcyon-blue)] rounded-2xl p-8 md:p-12 border border-[var(--halcyon-orange)]/20">
                <ul className="space-y-4 text-left text-gray-300 mb-8">
                  {[
                    "Garantía integral contra ransomware",
                    "Servicios de respuesta y recuperación sin costo adicional",
                    "Confianza en la efectividad de la plataforma",
                    "Reducción de riesgo financiero",
                    "Respuesta garantizada por expertos"
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={subtleFadeIn}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-[var(--halcyon-orange)] flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/#contacto">Solicitar Demo</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

