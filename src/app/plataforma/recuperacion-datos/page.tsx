"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Key,
  RefreshCw,
  Database,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  HardDrive,
  FileLock,
  Zap
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

export default function DataRecoveryPage() {
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
                Recuperación de Datos
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Recupera Datos Encriptados
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Recupera tus datos encriptados en horas, no semanas. Sin depender de backups. Sin pagar rescate. Halcyon captura las llaves de encriptación en tiempo real, permitiéndote descifrar y restaurar tus archivos instantáneamente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Ransomware Recovery Can Be Complex */}
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
                La Recuperación de Ransomware Puede Ser Compleja
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                Recuperarse de un ataque de ransomware no es solo un desafío técnico. Afecta cada aspecto de tu negocio.
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
                  title: "No Es Solo Técnico",
                  description: "Un ataque de ransomware interrumpe operaciones, afecta a clientes y puede dañar la reputación de tu marca. La recuperación requiere coordinación entre múltiples equipos.",
                  icon: <Shield className="h-12 w-12" />
                },
                {
                  title: "Backups Pueden Estar Comprometidos",
                  description: "Los atacantes a menudo destruyen o corrompen backups antes de ejecutar el ransomware. Incluso si tienes backups, pueden estar incompletos o desactualizados.",
                  icon: <Database className="h-12 w-12" />
                },
                {
                  title: "El Tiempo de Inactividad Es Costoso",
                  description: "Cada día que tu negocio está fuera de línea cuesta dinero. La recuperación tradicional puede tomar semanas, resultando en pérdidas significativas de ingresos.",
                  icon: <Clock className="h-12 w-12" />
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-6 text-[var(--halcyon-orange)]">
                        {challenge.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{challenge.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Halcyon's Encryption Detection + Key Capture */}
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
                  Detección de Encriptación + Captura de Llaves
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                  La Tecnología de Recuperación de Halcyon
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Halcyon detecta actividad de encriptación en tiempo real y captura automáticamente el material criptográfico que los atacantes usan para encriptar tus archivos. Esta capacidad única te permite descifrar y recuperar tus datos sin depender de backups o pagar rescate.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A diferencia de otras soluciones que solo pueden prevenir o detectar, Halcyon proporciona una ruta de recuperación alternativa incluso si el ransomware logra encriptar tus datos.
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
                <div className="bg-white p-8 rounded-2xl border border-[var(--halcyon-orange)]/30 shadow-sm">
                  <Key className="h-24 w-24 text-[var(--halcyon-orange)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits of Fast Recovery */}
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
                Beneficios de la Recuperación Rápida
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
                  title: "Recuperación en Horas vs Semanas",
                  description: "Mientras que la recuperación tradicional puede tomar semanas, Halcyon te permite recuperar tus datos en horas, minimizando el tiempo de inactividad del negocio.",
                  icon: <Zap className="h-12 w-12" />
                },
                {
                  title: "Sin Depender de Backups",
                  description: "Incluso si tus backups están comprometidos, incompletos o desactualizados, Halcyon puede recuperar tus datos usando las llaves capturadas durante el ataque.",
                  icon: <HardDrive className="h-12 w-12" />
                },
                {
                  title: "Sin Pagar Rescate",
                  description: "Con la capacidad de descifrar tus datos usando llaves capturadas, puedes recuperar tus archivos sin necesidad de pagar a los atacantes.",
                  icon: <Shield className="h-12 w-12" />
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-yellow)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6 text-[var(--halcyon-yellow)]">
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

        {/* How Key Capture Works */}
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
                Cómo Funciona la Captura de Llaves
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Halcyon intercepta y captura el material criptográfico que los atacantes usan para encriptar tus archivos, proporcionándote una ruta de recuperación alternativa.
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
                  title: "Detección de Actividad de Encriptación",
                  description: "Halcyon monitorea continuamente tu entorno, detectando cuando comienza la actividad de encriptación de ransomware en tiempo real.",
                  icon: <FileLock className="h-8 w-8" />
                },
                {
                  step: "2",
                  title: "Interceptación de Llaves en Memoria",
                  description: "Mientras el ransomware genera llaves de encriptación en memoria, Halcyon intercepta y captura este material criptográfico antes de que pueda ser borrado por los atacantes.",
                  icon: <Key className="h-8 w-8" />
                },
                {
                  step: "3",
                  title: "Protección Contra Borrado",
                  description: "Halcyon protege las llaves capturadas contra intentos de los atacantes de borrarlas, asegurando que tengas acceso al material necesario para descifrar tus datos.",
                  icon: <Shield className="h-8 w-8" />
                },
                {
                  step: "4",
                  title: "Proceso de Descifrado",
                  description: "Usando las llaves capturadas, Halcyon puede descifrar automáticamente tus archivos encriptados, restaurándolos a su estado original sin necesidad de backups.",
                  icon: <RefreshCw className="h-8 w-8" />
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

        {/* RDR Service in Recovery */}
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
                  <Users className="h-24 w-24 text-[var(--halcyon-yellow)]" />
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
                  Servicio Halcyon RDR
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
                  Recuperación Liderada por Expertos
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Si el ransomware logra encriptar tus datos, nuestro equipo de Detección y Recuperación de Ransomware (RDR) está listo para ayudarte. Como parte del servicio incluido, nuestros expertos lideran el esfuerzo de recuperación, guiándote a través del proceso de descifrado y restauración.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  No estás solo en la recuperación. Nuestro equipo trabaja contigo las 24 horas del día hasta que todos tus sistemas estén operativos nuevamente.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--halcyon-yellow)] text-[var(--halcyon-yellow)] hover:bg-[var(--halcyon-yellow)]/10 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/plataforma/deteccion-recuperacion">Saber más <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
              </motion.div>
            </div>
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
                Toma el Pago Fuera de la Mesa
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Recupera Sin Pagar Rescate
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Con Halcyon, puedes recuperar tus datos encriptados sin depender de backups o pagar rescate. La captura de llaves te da una ruta de recuperación alternativa que elimina la necesidad de negociar con atacantes.
              </p>

              <div className="bg-[var(--halcyon-blue)] rounded-2xl p-8 md:p-12 border border-[var(--halcyon-orange)]/20">
                <ul className="space-y-4 text-left text-gray-300 mb-8">
                  {[
                    "Recupera datos encriptados en horas, no semanas",
                    "Sin depender de backups que pueden estar comprometidos",
                    "Sin necesidad de pagar rescate a los atacantes",
                    "Recuperación liderada por expertos incluida en el servicio"
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
