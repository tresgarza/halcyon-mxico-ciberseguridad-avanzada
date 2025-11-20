"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Database,
  AlertTriangle,
  Shield,
  Eye,
  Network,
  Users,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileWarning,
  Ban
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

export default function DataExfiltrationPage() {
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
                Protección de Datos
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Detén la Exfiltración de Datos y la Doble Extorsión
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                El ransomware moderno no solo cifra tus datos, también los roba. Halcyon Data Exfiltration Protection (DXP) detecta y previene el robo de datos antes de que sea demasiado tarde.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What is Double Extortion */}
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
                ¿Qué es la Doble Extorsión?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                La doble extorsión es una táctica donde los atacantes no solo encriptan tus datos, sino que también los roban y amenazan con publicarlos si no pagas el rescate. Esto aumenta significativamente la presión para pagar.
              </p>
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
                  stat: "91%",
                  description: "de los ataques de ransomware incluyen exfiltración de datos (Q4 2024)",
                  icon: <TrendingUp className="h-12 w-12" />
                },
                {
                  stat: "2.5X",
                  description: "más probabilidad de pago cuando hay extorsión de datos involucrada",
                  icon: <AlertTriangle className="h-12 w-12" />
                },
                {
                  stat: "95%",
                  description: "de los intentos de exfiltración de datos son exitosos",
                  icon: <Database className="h-12 w-12" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full text-center shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-4 text-[var(--halcyon-orange)]">
                        {item.icon}
                      </div>
                      <div className="text-5xl font-bold text-[var(--halcyon-navy)] mb-4">{item.stat}</div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Detection Challenges */}
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
                Desafíos de Detección
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Detectar la exfiltración de datos es extremadamente difícil con herramientas tradicionales. Estos son los principales desafíos que enfrentan las organizaciones.
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
                  title: "Los Datos Se Van Antes de Que Caiga el Rescate",
                  description: "Los atacantes roban datos semanas o meses antes de ejecutar el ransomware. Para cuando recibes la nota de rescate, tus datos ya están en sus servidores.",
                  icon: <FileWarning className="h-8 w-8" />
                },
                {
                  title: "Si No Puedes Verlo, No Puedes Detenerlo",
                  description: "Los atacantes usan técnicas encubiertas como transferencias lentas, protocolos legítimos y conexiones cifradas para evadir la detección tradicional.",
                  icon: <Eye className="h-8 w-8" />
                },
                {
                  title: "Las Multas Duelen. También los Titulares",
                  description: "Si los datos robados se publican, enfrentas multas regulatorias masivas, pérdida de confianza del cliente y daño a la reputación de la marca.",
                  icon: <AlertTriangle className="h-8 w-8" />
                }
              ].map((challenge, index) => (
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
                            {challenge.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{challenge.title}</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">{challenge.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How We Uncover Data Exfiltration */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/40">
                  Data Exfiltration Protection (DXP)
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                  Cómo Descubrimos la Exfiltración de Datos
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Halcyon Data Exfiltration Protection (DXP) actúa como un sistema de alerta temprana, monitoreando actividad sospechosa de red y acceso a archivos a nivel de kernel. Detectamos patrones de comportamiento que indican robo de datos, incluso cuando los atacantes intentan ocultar sus actividades.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Nuestro sistema identifica transferencias anómalas de datos, conexiones a infraestructura de comando y control, y volúmenes inusuales de acceso a archivos sensibles, alertándote antes de que sea demasiado tarde.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/#contacto">Solicitar Demo</a>
                </Button>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center"
              >
                <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-[var(--halcyon-orange)]/30 shadow-sm">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fyCUv0BQtpY?list=TLGGK-CxwPXWIrQyMDExMjAyNQ&start=10"
                    title="Halcyon Data Exfiltration Protection"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key DXP Features */}
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
                Características Clave de DXP
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Tres capacidades principales que hacen de DXP la solución más efectiva para detectar y prevenir la exfiltración de datos.
              </p>
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
                  title: "Detección de Pares Maliciosos",
                  description: "Identifica infraestructura de comando y control (C2) y conexiones sospechosas a servidores externos, incluso cuando usan protocolos legítimos o están cifradas.",
                  icon: <Network className="h-16 w-16" />,
                  colorClass: "border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50",
                  iconColor: "text-[var(--halcyon-orange)]"
                },
                {
                  title: "Detección Volumétrica",
                  description: "Monitorea volúmenes de datos transferidos y detecta transferencias anómalas en un período de 24 horas, identificando patrones que indican robo de datos.",
                  icon: <TrendingUp className="h-16 w-16" />,
                  colorClass: "border-[var(--halcyon-yellow)]/30 hover:border-[var(--halcyon-yellow)]/50",
                  iconColor: "text-[var(--halcyon-yellow)]"
                },
                {
                  title: "Investigación Liderada por Expertos",
                  description: "Nuestro equipo RDR 24/7/365 investiga alertas de exfiltración, proporcionando contexto y recomendaciones para responder rápidamente a amenazas.",
                  icon: <Users className="h-16 w-16" />,
                  colorClass: "border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50",
                  iconColor: "text-[var(--halcyon-orange)]"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className={`bg-white ${feature.colorClass} transition-all duration-300 h-full shadow-sm`}>
                    <CardContent className="p-6 text-center">
                      <div className={`flex justify-center mb-6 ${feature.iconColor}`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Benefits */}
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
                Los Beneficios
              </h2>
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
                  title: "Elimina la Fuga. Detén la Amenaza.",
                  description: "Detecta y bloquea la exfiltración de datos antes de que los atacantes puedan usarla para extorsión. Sin datos robados, no hay doble extorsión.",
                  icon: <Ban className="h-8 w-8" />
                },
                {
                  title: "Evita las Multas. Evita los Titulares.",
                  description: "Previene la publicación de datos robados, evitando multas regulatorias masivas, pérdida de confianza del cliente y daño a la reputación.",
                  icon: <Shield className="h-8 w-8" />
                },
                {
                  title: "Identifica Brechas, Desde Protección de Endpoint Hasta Recuperación.",
                  description: "DXP proporciona visibilidad completa del ciclo de vida del ataque, ayudándote a identificar y cerrar brechas en tu postura de seguridad.",
                  icon: <Eye className="h-8 w-8" />
                }
              ].map((benefit, index) => (
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
                            {benefit.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{benefit.title}</h3>
                          <p className="text-lg text-gray-700 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
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
                Rompe el Ciclo de Extorsión
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detén la Doble Extorsión Antes de Que Comience
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Con Halcyon DXP, puedes detectar y prevenir la exfiltración de datos antes de que los atacantes puedan usarla para extorsión. Sin datos robados, no hay doble extorsión. Sin doble extorsión, menos presión para pagar.
              </p>

              <div className="bg-[var(--halcyon-blue)] rounded-2xl p-8 md:p-12 border border-[var(--halcyon-orange)]/20">
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
