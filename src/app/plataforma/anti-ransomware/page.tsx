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
  Zap,
  Lock,
  AlertTriangle,
  Database,
  Key,
  Network,
  UserCog,
  Search,
  Move,
  Ban,
  FileX,
  FileLock,
  ArrowRight,
  CheckCircle2,
  Users,
  Brain,
  HardDrive,
  Terminal
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

export default function AntiRansomwarePage() {
  const attackChainStages = [
    {
      stage: "ACCESO INICIAL",
      english: "INITIAL ACCESS",
      description: "Halcyon detecta cuando los atacantes usan ejecutables maliciosos, intentos de fuerza bruta o infraestructura de comando y control (C2) para acceder a tu entorno.",
      technology: "PREVENCIÓN",
      features: ["DXP"],
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
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                Prevención de Ransomware
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Prevención de Ransomware
              </h1>
              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Cerrando la Brecha entre la Defensa de Endpoint y la Recuperación de Ransomware
              </p>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                Contrarresta los riesgos de ransomware en constante evolución mientras mejoras la efectividad de tus soluciones EPP, EDR y XDR. Halcyon libera a tu equipo para enfocarse en lo que más importa fortaleciendo tu seguridad contra el riesgo. Protección contra ransomware que impulsa el progreso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Halcyon Closes the Ransomware Gap */}
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
                Halcyon Cierra la Brecha del Ransomware
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Nuestra plataforma está diseñada específicamente para prevenir, detectar y recuperarse de ataques de ransomware, proporcionando una capa adicional de protección que complementa tus herramientas de seguridad existentes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 6 Key Capabilities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {/* 1. Prevent Ransomware Execution */}
              <motion.div
                variants={subtleFadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                    Motor IA
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Previene la Ejecución de Ransomware con Nuestro Motor Impulsado por IA
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Entrenado con un enfoque hiperespecializado en reconocer ransomware, nuestro motor de IA detecta y previene archivos, aplicaciones y procesos maliciosos, incluso si es una amenaza completamente nueva o de día cero.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold"
                    asChild
                  >
                    <a href="/#contacto">Solicitar Demo</a>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-orange)]/20">
                    <Brain className="h-24 w-24 text-[var(--halcyon-orange)]" />
                  </div>
                </div>
              </motion.div>

              {/* 2. Thwart Vulnerable Driver Exploitation */}
              <motion.div
                variants={subtleFadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="lg:order-2 flex justify-center">
                  <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-yellow)]/20">
                    <Shield className="h-24 w-24 text-[var(--halcyon-yellow)]" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <Badge className="mb-4 bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/30">
                    Kernel Guard
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Frustra la Explotación de Controladores Vulnerables
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    La Protección Kernel Guard bloquea a los atacantes de explotar controladores confiables pero vulnerables, deteniendo los ataques BYOVD en sus pistas y manteniendo tu sistema seguro de amenazas externas.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--halcyon-yellow)] text-[var(--halcyon-yellow)] hover:bg-[var(--halcyon-yellow)]/10 font-semibold"
                    asChild
                  >
                    <a href="https://www.halcyon.ai/resources/datasheets/halcyon-kernel-guard-protection" target="_blank" rel="noopener noreferrer">Descargar Datasheet</a>
                  </Button>
                </div>
              </motion.div>

              {/* 3. Protect Against EDR Tampering */}
              <motion.div
                variants={subtleFadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                    Last Gasp & Tamper Guard
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Protege Contra Manipulación y Sabotaje de EDR
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Identifica rápidamente cualquier manipulación o sabotaje de servicios de seguridad clave como Microsoft® Defender, CrowdStrike®, SentinelOne®, y Palo Alto Networks® Cortex®, para que los atacantes no puedan pasar desapercibidos.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold"
                    asChild
                  >
                    <a href="/#contacto">Solicitar Demo</a>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-orange)]/20">
                    <ShieldCheck className="h-24 w-24 text-[var(--halcyon-orange)]" />
                  </div>
                </div>
              </motion.div>

              {/* 4. Deter Living off the Land Attacks */}
              <motion.div
                variants={subtleFadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="lg:order-2 flex justify-center">
                  <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-yellow)]/20">
                    <Terminal className="h-24 w-24 text-[var(--halcyon-yellow)]" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <Badge className="mb-4 bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/30">
                    Living off the Land
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Disuade Ataques Living off the Land
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Detecta y detiene ataques de ransomware lanzados a través de PowerShell®, WMIC y otras herramientas neutralizando sus esfuerzos, y protege automáticamente tus servicios de volumen shadow (VSS) de ser corrompidos.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--halcyon-yellow)] text-[var(--halcyon-yellow)] hover:bg-[var(--halcyon-yellow)]/10 font-semibold"
                    asChild
                  >
                    <a href="/#contacto">Agendar Demo</a>
                  </Button>
                </div>
              </motion.div>

              {/* 5. Uncover Data Exfiltration Efforts */}
              <motion.div
                variants={subtleFadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
                    Data Exfiltration Protection
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Descubre Esfuerzos de Exfiltración de Datos
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Detecta e identifica intentos de robo de datos monitoreando actividad sospechosa de IPS, DNS y volúmenes de datos, protegiéndote de las tácticas ahora comunes de 'doble extorsión' del ransomware.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold"
                    asChild
                  >
                    <a href="/plataforma/proteccion-exfiltracion">Saber más <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-orange)]/20">
                    <Database className="h-24 w-24 text-[var(--halcyon-orange)]" />
                  </div>
                </div>
              </motion.div>

              {/* 6. Detect and Disrupt Encryption Attempts */}
              <motion.div
                variants={subtleFadeIn}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className="lg:order-2 flex justify-center">
                  <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-yellow)]/20">
                    <Key className="h-24 w-24 text-[var(--halcyon-yellow)]" />
                  </div>
                </div>
                <div className="lg:order-1">
                  <Badge className="mb-4 bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/30">
                    Key Capture
                  </Badge>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Detecta e Interrumpe Intentos de Encriptación
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Captura automáticamente las llaves de encriptación y los datos que los atacantes usan durante un ataque de ransomware para que puedas recuperar rápidamente tus archivos y evitar pagar el rescate.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[var(--halcyon-yellow)] text-[var(--halcyon-yellow)] hover:bg-[var(--halcyon-yellow)]/10 font-semibold"
                    asChild
                  >
                    <a href="/plataforma/recuperacion-datos">Saber más <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Halcyon RDR Service */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
              >
                <Badge className="mb-4 bg-[var(--halcyon-yellow)]/20 text-[var(--halcyon-yellow)] border-[var(--halcyon-yellow)]/40">
                  Halcyon RDR
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
                <Button
                  variant="outline"
                  className="border-[var(--halcyon-yellow)] text-[var(--halcyon-yellow)] hover:bg-[var(--halcyon-yellow)]/10 font-semibold px-8 py-6 text-lg"
                  asChild
                >
                  <a href="/plataforma/deteccion-recuperacion">Saber más <ArrowRight className="ml-2 h-5 w-5" /></a>
                </Button>
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
                Cómo Funciona a Través de la Cadena de Ataque
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
                  whileHover={cardHover}
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

        {/* We Focus On Ransomware */}
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
                Nos Enfocamos en Ransomware, Para Que Tú No Tengas Que Hacerlo
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
                  title: "Combate Actores de Amenazas",
                  description: "Sin la necesidad de un equipo interno de investigación de inteligencia y experiencia en ransomware."
                },
                {
                  title: "Evita Costos de Tiempo de Inactividad",
                  description: "Evita costosos tiempos de inactividad, daños a la reputación, aumentos en primas de seguro cibernético y multas de cumplimiento debido a un ataque de doble extorsión."
                },
                {
                  title: "Elimina la Preocupación",
                  description: "Elimina la preocupación de que un ataque generalizado de ransomware pueda cerrar tu negocio o costarte millones en recuperación."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6">
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
                ¿Quieres Protección Contra Ransomware Que Funcione las 24 Horas?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cierra la Brecha del Ransomware
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Cierra la brecha del ransomware entre la protección de endpoint y la recuperación, sin necesidad de experiencia adicional. Habla con un experto de Halcyon hoy.
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
