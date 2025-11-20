"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users,
  Clock,
  Activity,
  Shield,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle2,
  Search,
  AlertTriangle,
  RefreshCw
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

export default function DetectionRecoveryPage() {
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
                Servicio Halcyon RDR
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Detección y Recuperación de Ransomware 24/7
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Convierte Nuestra Experiencia en tu Ventaja Defensiva
              </p>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Halcyon RDR pone la mejor experiencia en ransomware directamente a tu alcance sin costo adicional. Nuestro equipo de expertos vigila tu entorno las 24 horas del día, los 7 días de la semana, los 365 días del año, detectando y deteniendo amenazas de ransomware.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Turn Our Expertise Into Your Defensive Advantage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Badge className="mb-4 bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/40">
                  Servicio Incluido
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                  Convierte Nuestra Experiencia en tu Ventaja Defensiva
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Halcyon RDR pone la mejor experiencia en ransomware directamente a tu alcance sin costo adicional. Nuestro equipo de expertos vigila tu entorno las 24 horas del día, los 7 días de la semana, los 365 días del año, detectando y deteniendo amenazas de ransomware.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Nos enfocamos en detener los ataques antes de que sucedan, pero si el ransomware golpea, estamos listos para ayudarte a recuperarte rápidamente y volver a lo que más importa: hacer funcionar tu negocio sin el estrés.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center"
              >
                <div className="bg-white p-8 rounded-2xl border border-[var(--halcyon-yellow)]/30 shadow-sm">
                  <Users className="h-24 w-24 text-[var(--halcyon-yellow)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What RDR Includes */}
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
                Qué Incluye RDR
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nuestro servicio de Detección y Recuperación de Ransomware incluye todo lo que necesitas para proteger y recuperar tu entorno de ataques de ransomware.
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
                  title: "Monitoreo Continuo 24/7/365",
                  description: "Vigilancia ininterrumpida de tu entorno, detectando actividad sospechosa y amenazas de ransomware en tiempo real.",
                  icon: <Activity className="h-12 w-12" />
                },
                {
                  title: "Investigación de Alertas",
                  description: "Nuestros analistas investigan cada alerta, proporcionando contexto y determinando si representa una amenaza real.",
                  icon: <Search className="h-12 w-12" />
                },
                {
                  title: "Respuesta a Amenazas",
                  description: "Cuando se detecta una amenaza, nuestro equipo responde inmediatamente para contener y neutralizar el ataque.",
                  icon: <Zap className="h-12 w-12" />
                },
                {
                  title: "Liderazgo en Recuperación",
                  description: "Si el ransomware golpea, nuestro equipo lidera el esfuerzo de recuperación, guiándote a través del proceso de descifrado y restauración.",
                  icon: <RefreshCw className="h-12 w-12" />
                },
                {
                  title: "Threat Hunting Proactivo",
                  description: "Búsqueda activa de amenazas en tu entorno, identificando actividad sospechosa antes de que se convierta en un ataque completo.",
                  icon: <Eye className="h-12 w-12" />
                },
                {
                  title: "Comunicación y Reportes",
                  description: "Mantente informado con reportes regulares y comunicación directa sobre el estado de tu seguridad y cualquier amenaza detectada.",
                  icon: <AlertTriangle className="h-12 w-12" />
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

        {/* How RDR Works */}
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
                Cómo Funciona RDR
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nuestro proceso de Detección y Recuperación de Ransomware está diseñado para detectar amenazas temprano y responder rápidamente cuando es necesario.
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
                  title: "Detección Temprana",
                  description: "Nuestro sistema monitorea continuamente tu entorno, detectando actividad sospechosa y patrones que indican un ataque de ransomware en desarrollo.",
                  icon: <Eye className="h-8 w-8" />
                },
                {
                  step: "2",
                  title: "Investigación Inmediata",
                  description: "Cuando se detecta actividad sospechosa, nuestros analistas investigan inmediatamente, determinando la naturaleza y el alcance de la amenaza.",
                  icon: <Search className="h-8 w-8" />
                },
                {
                  step: "3",
                  title: "Respuesta Rápida",
                  description: "Si se confirma una amenaza, nuestro equipo responde rápidamente para contener el ataque, prevenir la propagación y proteger tus sistemas.",
                  icon: <Zap className="h-8 w-8" />
                },
                {
                  step: "4",
                  title: "Recuperación Guiada",
                  description: "Si el ransomware logra encriptar datos, nuestro equipo lidera el esfuerzo de recuperación, usando llaves capturadas y guiándote a través del proceso de restauración.",
                  icon: <RefreshCw className="h-8 w-8" />
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-yellow)]/50 transition-all duration-300 shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="bg-[var(--halcyon-yellow)]/20 p-4 rounded-lg flex-shrink-0">
                          <div className="text-[var(--halcyon-yellow)]">
                            {step.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <Badge className="bg-[var(--halcyon-yellow)] text-white text-lg px-4 py-1">
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

        {/* Benefits of Managed Service */}
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
                Beneficios del Servicio Gestionado
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
                  title: "Sin Necesidad de Equipo Interno Especializado",
                  description: "No necesitas contratar y mantener un equipo interno de expertos en ransomware. Nuestro equipo está disponible las 24 horas del día sin costo adicional.",
                  icon: <Users className="h-12 w-12" />
                },
                {
                  title: "Experiencia en Ransomware",
                  description: "Nuestro equipo tiene años de experiencia lidiando con ataques de ransomware, conociendo las tácticas, técnicas y procedimientos de los atacantes.",
                  icon: <Shield className="h-12 w-12" />
                },
                {
                  title: "Respuesta Rápida",
                  description: "Con monitoreo continuo y respuesta inmediata, podemos detectar y contener amenazas antes de que causen daño significativo a tu negocio.",
                  icon: <Clock className="h-12 w-12" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-8 text-center">
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
                Servicio Incluido Sin Costo Adicional
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Obtén Protección 24/7 Sin Costo Adicional
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                El servicio Halcyon RDR está incluido con cada licencia de Halcyon. No hay costos adicionales, no hay límites de uso. Obtén la mejor protección contra ransomware las 24 horas del día, los 7 días de la semana.
              </p>

              <div className="bg-[var(--halcyon-blue)] rounded-2xl p-8 md:p-12 border border-[var(--halcyon-orange)]/20">
                <ul className="space-y-4 text-left text-gray-300 mb-8">
                  {[
                    "Monitoreo continuo 24/7/365 de tu entorno",
                    "Investigación y respuesta inmediata a amenazas",
                    "Liderazgo en recuperación si hay ataque",
                    "Sin necesidad de equipo interno especializado",
                    "Incluido sin costo adicional con cada licencia"
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
