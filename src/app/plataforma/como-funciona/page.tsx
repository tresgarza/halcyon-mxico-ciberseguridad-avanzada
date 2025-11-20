"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldCheck,
  Brain,
  Eye,
  Shield,
  HardDrive,
  Database,
  Key,
  Users,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Network,
  UserCog,
  Search,
  Move,
  Ban,
  FileX,
  FileLock,
  Zap,
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

export default function HowItWorksPage() {
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
                Cómo Funciona Halcyon
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cómo Funciona Halcyon
              </h1>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Nuestra tecnología anti-ransomware adopta un enfoque integral para interrumpir proactivamente las amenazas en cada etapa del ciclo de vida del ataque, desde la pre-ejecución hasta la exfiltración de datos y la encriptación. Con un equipo de expertos incluido que investiga y responde a las amenazas por ti, Halcyon garantiza que no se pague rescate y no se tolere tiempo de inactividad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* End-to-End Ransomware Protection */}
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
                Protección Integral contra Ransomware
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Halcyon rompe la cadena de ataque de ransomware, proporcionando una defensa completa para proteger tu negocio.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  number: "1",
                  title: "Disipemos Algunas Falacias del Ransomware",
                  description: "El ransomware no es tan simple como un archivo o una etiqueta. No es una clasificación específica de malware. No es solo un ejecutable que encripta archivos. No es un solo tipo de detección o alerta. Es una estrategia de ataque coordinada, que involucra múltiples etapas, actores y herramientas.",
                  icon: <AlertTriangle className="h-12 w-12" />
                },
                {
                  number: "2",
                  title: "El Ransomware se Ha Convertido en un Ecosistema",
                  description: "No es un hacker solitario con capucha. Las Operaciones de Ransomware Modernas funcionan como negocios, completas con: Corredores de Acceso Inicial, operadores RaaS, afiliados, desarrolladores e incluso probadores de penetración. Cada jugador tiene un papel. Cada rol se beneficia de tu vulnerabilidad.",
                  icon: <Network className="h-12 w-12" />
                },
                {
                  number: "3",
                  title: "¿Un Ejecutable? Intenta un Playbook Completo.",
                  description: "El ransomware no es una herramienta singular o un evento único. Ha evolucionado a una campaña coordinada, sistemática y de múltiples etapas. Desde el acceso inicial hasta el movimiento lateral, encriptación y extorsión — cada paso está planificado, ejecutado e impulsado por ganancias.",
                  icon: <FileLock className="h-12 w-12" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-[var(--halcyon-orange)] text-white text-2xl px-4 py-2">
                          {item.number}
                        </Badge>
                        <div className="text-[var(--halcyon-orange)]">
                          {item.icon}
                        </div>
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

        {/* How it Works Across the Attack Chain */}
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

        {/* Key Features */}
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
                Características Clave
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Halcyon usa motores de IA y comportamiento para interrumpir proactivamente el ransomware y aislar rápidamente los ataques, capturando llaves de encriptación para recuperar datos. Respaldado por un SOC de ransomware 24/7, Halcyon garantiza que las amenazas sean detectadas, derrotadas y tu negocio se mantenga protegido y operativo.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Motor IA",
                  description: "Detectamos indicadores de ransomware con modelos de IA entrenados exclusivamente en señales de ransomware, basados en millones de puntos de datos de TTPs activos, muestras, playbooks y compromisos de respuesta a incidentes de ransomware del mundo real.",
                  icon: <Brain className="h-12 w-12" />
                },
                {
                  title: "Motor de Comportamiento",
                  description: "Las tácticas de ransomware pueden comúnmente eludir incluso los mejores motores de detección. El motor de comportamiento de Halcyon aprovecha el modelado de amenazas, anti-detonación y explotación de engaño, engañando al ransomware para que proporcione indicadores adicionales de compromiso para mayor precisión y tiempo de detección más rápido.",
                  icon: <Eye className="h-12 w-12" />
                },
                {
                  title: "Detección de Manipulación EDR",
                  description: "Una de las primeras cosas que los atacantes de ransomware suelen hacer es manipular las herramientas EDR para evadir la detección. Deshabilitar herramientas EDR y EPP acelera rápidamente el despliegue de herramientas de ransomware y aumenta el tiempo de permanencia hasta el descubrimiento. Halcyon monitorea la actividad EDR para detectar y notificar sobre la evasión y deshabilitación de EDRs.",
                  icon: <Shield className="h-12 w-12" />
                },
                {
                  title: "Bring Your Own Vulnerable Driver (BYOVD)",
                  description: "La protección Kernel Guard derrota el uso de controladores firmados pero vulnerables (Ataques \"Bring Your Own Vulnerable Driver\" BYOVD), que pueden crear puntos de explotación de entrada en tu entorno, asegurando que los actores maliciosos no puedan explotar esta confianza inherente para llevar a cabo sus objetivos.",
                  icon: <HardDrive className="h-12 w-12" />
                },
                {
                  title: "Protección de Exfiltración de Datos (DXP)",
                  description: "Los atacantes de ransomware modernos no solo encriptan datos, sino que también exfiltran información sensible del objetivo, luego exigen que las víctimas paguen para evitar que publiquen sus datos en línea. Usando tanto detección de pares maliciosos como detección volumétrica, DXP detecta y reporta movimientos de datos inusuales dentro de un período de 24 horas, incluyendo servicios de intercambio de archivos no autorizados, túnel en la nube e infraestructura de comando y control maliciosa conocida.",
                  icon: <Database className="h-12 w-12" />
                },
                {
                  title: "Captura de Material de Llave y Descifrado",
                  description: "Halcyon captura las llaves de encriptación simétrica que el ransomware usa para bloquear archivos y, aprovechando nuestro agente, descifra rápidamente los datos impactados, incluso si el ransomware elude EDR y Halcyon, restaurando archivos a su estado original rápidamente.",
                  icon: <Key className="h-12 w-12" />
                },
                {
                  title: "Detección y Recuperación de Ransomware (RDR)",
                  description: "Nuestro equipo de analistas de ransomware proporciona monitoreo las 24 horas del día y respuesta a amenazas en tiempo real, actuando como una extensión de tu equipo de seguridad. Ajustamos la detección para minimizar falsas alarmas y entregamos análisis instantáneo y experto de amenazas e ingeniería inversa de llaves de encriptación creando protección basada en inoculación de flota en tiempo real.",
                  icon: <Users className="h-12 w-12" />
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={subtleFadeIn}
                  whileHover={cardHover}
                >
                  <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-6 text-[var(--halcyon-orange)]">
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

        {/* Close the Ransomware Gap */}
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
                Cierra la Brecha del Ransomware
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Halcyon funciona dentro de tu ecosistema de seguridad existente proporcionando una capa de detección y protección que proporciona la capacidad de resiliencia y recuperación necesaria para ransomware, llenando así la \"brecha del ransomware\".
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={subtleFadeIn}
                whileHover={cardHover}
              >
                <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <Shield className="h-12 w-12 text-[var(--halcyon-orange)]" />
                        <h3 className="text-2xl font-bold text-[var(--halcyon-navy)]">HALCYON + EDR/XDR</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                      Halcyon funciona en conjunto con EDRs de dos maneras. Primero identifica y captura ataques de ransomware diseñados para eludir señales y firmas EDR, incluyendo intentos de exfiltración. Segundo, Halcyon actúa como un guardián monitoreando y detectando posibles manipulaciones y deshabilitaciones de EDR.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={subtleFadeIn}
                whileHover={cardHover}
              >
                <Card className="bg-white border-gray-200 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 h-full shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <RefreshCw className="h-12 w-12 text-[var(--halcyon-yellow)]" />
                      <h3 className="text-2xl font-bold text-[var(--halcyon-navy)]">HALCYON + BACKUP</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Los backups son importantes, pero cuando se trata de ransomware, no son suficientes. Halcyon ofrece una forma de proteger el Servicio de Volumen Shadow (VSS), o recuperar si esos backups se comprometen. Con captura de material de llave, Halcyon puede apuntar a llaves de encriptación para descifrar backups así como datos de archivos activos.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
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
                ¿Listo para quitar el ransomware de tu lista de preocupaciones?
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Detén Ataques, Responde Más Rápido
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Detén ataques, responde más rápido, aprovecha la inteligencia de amenazas líder en la industria con Halcyon RDR y cierra la extorsión antes de que comience. Habla con un experto de Halcyon hoy.
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
