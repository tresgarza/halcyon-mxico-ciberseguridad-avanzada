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
  Users, 
  ArrowRight, 
  CheckCircle2,
  Lock,
  RefreshCw,
  Database,
  AlertTriangle,
  Zap,
  Eye,
  Key,
  Network,
  UserCog,
  Search,
  Move,
  Ban,
  FileX,
  FileLock
} from 'lucide-react';
import { 
  fadeInUp, 
  subtleFadeIn, 
  staggerContainer,
  slideInLeft,
  slideInRight,
  subtleScale
} from '@/lib/animations';

export default function PlatformOverviewPage() {
  const attackChainStages = [
    {
      stage: "ACCESO INICIAL",
      english: "INITIAL ACCESS",
      description: "Halcyon detecta cuando los atacantes usan ejecutables maliciosos, intentos de fuerza bruta o infraestructura de comando y control (C2) para acceder a tu entorno.",
      technology: "PREVENCIÓN",
      features: ["DXP", "BEHAVIORAL"],
      icon: <AlertTriangle className="h-8 w-8" />
    },
    {
      stage: "ACCESO REMOTO",
      english: "REMOTE ACCESS",
      description: "Después de obtener acceso inicial, los atacantes típicamente usan herramientas de acceso remoto para llevar a cabo sus ataques de manera más efectiva. Halcyon detecta esta actividad, creando alertas para investigaciones inmediatas.",
      technology: "PREVENCIÓN",
      features: ["DXP"],
      icon: <Network className="h-8 w-8" />
    },
    {
      stage: "ESCALAMIENTO DE PRIVILEGIOS",
      english: "PRIVILEGE ESCALATION",
      description: "Halcyon alerta e interrumpe el intento de un atacante de escalar privilegios de usuario usando ejecutables maliciosos o controladores de kernel vulnerables.",
      technology: "PREVENCIÓN",
      features: ["KERNEL GUARD"],
      icon: <UserCog className="h-8 w-8" />
    },
    {
      stage: "ENUMERACIÓN DEL ENTORNO",
      english: "ENVIRONMENT ENUMERATION",
      description: "Halcyon identifica cuando un atacante intenta enumerar tu entorno para reconocimiento y recopilación de inteligencia, para hacer su ataque finalmente más efectivo.",
      technology: "PREVENCIÓN",
      icon: <Search className="h-8 w-8" />
    },
    {
      stage: "RECOLECCIÓN DE CREDENCIALES",
      english: "CREDENTIAL HARVESTING",
      description: "Halcyon entiende los métodos de los atacantes para recolectar credenciales válidas de usuario, detectando y previniendo sus acciones automáticamente.",
      technology: "PREVENCIÓN",
      icon: <Key className="h-8 w-8" />
    },
    {
      stage: "MOVIMIENTO LATERAL",
      english: "LATERAL MOVEMENT",
      description: "Halcyon detecta y previene cuando los atacantes intentan moverse lateralmente a través de tu entorno. Por ejemplo, cuando usan una herramienta RMM para intentar conectarse a máquinas en el entorno, Halcyon puede detener su progresión.",
      technology: "PREVENCIÓN",
      icon: <Move className="h-8 w-8" />
    },
    {
      stage: "BYPASS DE SEGURIDAD",
      english: "SECURITY BYPASS",
      description: "Halcyon emplea características únicas como EDR Last Gasp y Tamper Guard para proteger contra los intentos de los atacantes de eludir y deshabilitar productos de seguridad en tiempo real.",
      technology: "PREVENCIÓN",
      features: ["LAST GASP", "TAMPER GUARD"],
      icon: <Ban className="h-8 w-8" />
    },
    {
      stage: "EXFILTRACIÓN DE DATOS",
      english: "DATA EXFILTRATION",
      description: "Halcyon Data Exfiltration Protection (DXP) actúa como un sistema de alerta temprana advirtiéndote del intento de un atacante de robar tus datos, aún no detectado por otras herramientas de seguridad.",
      technology: "DXP",
      features: ["BEHAVIORAL"],
      icon: <Database className="h-8 w-8" />
    },
    {
      stage: "DESTRUCCIÓN DE BACKUPS",
      english: "BACKUP DESTRUCTION",
      description: "Halcyon puede detectar y interrumpir un atacante intentando obtener acceso inicial a tu entorno usando ejecutables maliciosos, ataques de fuerza bruta o infraestructura de comando y control (C2).",
      technology: "BEHAVIORAL",
      features: ["DXP"],
      icon: <FileX className="h-8 w-8" />
    },
    {
      stage: "ENCRIPTACIÓN DE DATOS",
      english: "DATA ENCRYPTION",
      description: "La capacidad de Halcyon para descifrar datos usando material de llave capturado permite una ruta de recuperación alternativa si los datos se encriptan durante un evento de ransomware.",
      technology: "BEHAVIORAL",
      features: ["KEY CAPTURE"],
      icon: <FileLock className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section Mejorado */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                Plataforma
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                La Plataforma Anti-Ransomware Halcyon
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Elimina pagos de rescate, garantiza la continuidad operativa y protege a las empresas de la extorsión de datos.
              </p>
              <Button
                size="lg"
                className="bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white font-semibold px-8 py-6 text-lg"
                asChild
              >
                <a href="#contacto">Solicitar Demo</a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Qué Incluye */}
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
                Qué Incluye
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                La plataforma Halcyon combina nuestra tecnología anti-ransomware, servicio gestionado 24/7 y garantía de ransomware para eliminar el riesgo de ransomware para tu negocio.
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
                  icon: <ShieldCheck className="h-16 w-16 text-[var(--halcyon-orange)]" />,
                  title: "Tecnología Anti-Ransomware",
                  description: "Halcyon protege en cada etapa del ransomware — desde la pre-ejecución hasta la exfiltración de datos y la encriptación."
                },
                {
                  icon: <Users className="h-16 w-16 text-[var(--halcyon-yellow)]" />,
                  title: "Detección y Recuperación de Ransomware (RDR)",
                  description: "Nuestro equipo de expertos RDR 24/7 maneja la lucha contra el ransomware por ti, sirviendo sin costo adicional."
                },
                {
                  icon: <Shield className="h-16 w-16 text-[var(--halcyon-orange)]" />,
                  title: "Garantía de Ransomware",
                  description: "Reduce el riesgo con nuestra garantía integral contra ransomware."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="mb-6 flex justify-center">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tecnología Anti-Ransomware - Detalle */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                  Tecnología Anti-Ransomware
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Protección End-to-End contra Ransomware
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Halcyon proporciona protección de ciclo completo contra ransomware, identificando y interrumpiendo proactivamente a los atacantes en cada etapa de la cadena de ataque de ransomware. Con motores de comportamiento entrenados en indicadores de ransomware, detectamos actividad sospechosa temprano en la cadena de ataque.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Si un atacante obtiene un punto de apoyo, prevenimos la ejecución y detectamos intentos de exfiltración de datos. Y si sucede tu peor día, incluso podemos descifrar y recuperar tus datos sin depender de backups.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/plataforma/anti-ransomware">
                    Saber más <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center"
              >
                <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-orange)]/20">
                  <ShieldCheck className="h-24 w-24 text-[var(--halcyon-orange)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Servicio RDR - Detalle */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                  SOC de Ransomware 24x7 Incluido
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Un equipo de expertos en ransomware monitorea tu entorno 24/7/365 como parte de nuestro servicio incluido de Detección y Recuperación de Ransomware (RDR). Ellos hacen todo el trabajo pesado por ti: investigando alertas, respondiendo a amenazas y liderando el esfuerzo de recuperación si eres impactado por ransomware.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--halcyon-yellow)] text-[var(--halcyon-yellow)] hover:bg-[var(--halcyon-yellow)]/10 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/plataforma/deteccion-recuperacion">
                    Saber más <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Garantía de Ransomware - Detalle */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                  La Garantía Halcyon
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Continuidad del Negocio, Garantizada
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  El ransomware no solo exige pago — también interrumpe las operaciones. Por eso Halcyon ofrece una Garantía Integral de Ransomware. Si un ataque elude las defensas de Halcyon, proporcionamos servicios de respuesta a incidentes y recuperación liderados por expertos sin costo adicional, ayudando a tu negocio a volver a la normalidad rápidamente.
                </p>
                <Button
                  variant="outline"
                  className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/plataforma/warranty">
                    Saber más <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center"
              >
                <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-orange)]/20">
                  <Shield className="h-24 w-24 text-[var(--halcyon-orange)]" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Attack Chain Section */}
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
                Cómo Funciona Halcyon en la Cadena de Ataque
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Halcyon protege en cada etapa del ciclo de vida de un ataque de ransomware, desde el acceso inicial hasta la encriptación de datos.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {attackChainStages.map((stage, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 shadow-sm">
                    <CardContent className="p-5">
                      <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div className="bg-[var(--halcyon-orange)]/20 p-3 rounded-lg">
                            <div className="text-[var(--halcyon-orange)]">
                              {stage.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[var(--halcyon-navy)] mb-1">{stage.stage}</h3>
                            <p className="text-sm text-gray-500 italic">{stage.english}</p>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 mb-3">{stage.description}</p>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/40">
                              {stage.technology}
                            </Badge>
                            {stage.features?.map((feature, idx) => (
                              <Badge key={idx} className="bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/40">
                                {feature}
                              </Badge>
                            ))}
                          </div>
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
        <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={subtleScale}
            >
              <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                Agenda una Demo
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Agenda una Demo de Halcyon Hoy
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                ¿Quieres detener el ransomware, recuperarte de ataques sin backups y prevenir la extorsión de datos? ¡Conecta con un experto en ransomware de Halcyon!
              </p>

              <div className="bg-[var(--halcyon-blue)] rounded-2xl p-8 md:p-12 border border-[var(--halcyon-orange)]/20 mb-12">
                <ul className="space-y-4 text-left text-gray-300 mb-8">
                  {[
                    "Obtén una demostración EN VIVO de 20 minutos de prevención de ransomware",
                    "Aprende cómo Halcyon elimina los riesgos de tiempo de inactividad del negocio por un ataque",
                    "Ve cómo Halcyon detiene ataques de extorsión de datos y exfiltración",
                    "Descubre por qué la protección contra ransomware va más allá de los controles tradicionales de endpoint"
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
