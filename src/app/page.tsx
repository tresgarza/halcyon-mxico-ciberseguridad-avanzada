"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FeatureCard } from '@/components/FeatureCard';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  ShieldCheck,
  Server,
  Lock,
  AlertTriangle,
  Zap,
  Globe,
  CheckCircle2,
  RefreshCw,
  Database,
  FileWarning,
  UserX,
  Mail,
  Phone,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import { 
  fadeInUp, 
  fadeIn, 
  subtleScale, 
  slideInLeft, 
  slideInRight, 
  staggerContainer,
  subtleHover,
  subtleFadeIn
} from '@/lib/animations';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--halcyon-navy)] via-[var(--halcyon-blue)] to-[var(--halcyon-navy)]">
      <Navigation />

      {/* 1. Hero Section - Inicio */}
      <section id="inicio" className="relative py-16 flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background pattern */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--halcyon-orange) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </motion.div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30 px-4 py-2 text-sm font-semibold">
              Representación oficial en México
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Detecta. Bloquea.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--halcyon-orange)] to-[var(--halcyon-yellow)]">
              Neutraliza el Ransomware.
            </span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Evita pagos de rescate, garantiza la continuidad de tu operación y protege tu información contra la extorsión.
            <br />
            <span className="text-[var(--halcyon-orange)] mt-4 block">
              Blindaje contra ransomware, evitando la empresa sufra el robo y encriptación de información.
            </span>
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
             <Button
              size="lg"
              className="bg-[var(--halcyon-red)] hover:bg-[var(--halcyon-red)]/90 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="/reportar-ataque">
                <Lock className="mr-2 h-5 w-5" />
                ¿Estás experimentando un ataque?
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold px-8 py-6 text-lg hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#contacto">Contáctanos</a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { value: "99.9%", label: "Tasa de recuperación", color: "var(--halcyon-orange)" },
              { value: "<60s", label: "Tiempo de respuesta", color: "var(--halcyon-yellow)" },
              { value: "$0", label: "Pagos de rescate", color: "var(--halcyon-orange)" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={subtleFadeIn}
                whileHover={subtleHover}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Qué es Halcyon (Merged with Por qué Halcyon) */}
      <section id="que-es-halcyon" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)] border-t border-[var(--halcyon-orange)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Qué es Halcyon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              La solución anti-ransomware más avanzada
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Halcyon redefine la protección empresarial con la primera plataforma especializada en defensa anti-ransomware que actúa de manera integral a lo largo de toda la cadena de ataque.
            </p>
          </motion.div>

          {/* 3 Diferencias Clave (Formerly Por Qué Halcyon) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             {[
              { 
                icon: <ShieldCheck className="h-16 w-16 text-[var(--halcyon-orange)]" />, 
                title: "TECNOLOGÍA ANTI-RANSOMWARE", 
                description: "Halcyon protege a través de cada etapa del ransomware – desde la pre-ejecución hasta la exfiltración de datos y la encriptación." 
              },
              { 
                icon: <Users className="h-16 w-16 text-[var(--halcyon-orange)]" />, 
                title: "DETECCIÓN Y RECUPERACIÓN (RDR)", 
                description: "Nuestro equipo de expertos RDR 24/7 maneja la lucha contra el ransomware por ti, sirviendo sin costo adicional." 
              },
              { 
                icon: <Award className="h-16 w-16 text-[var(--halcyon-orange)]" />, 
                title: "GARANTÍA DE RANSOMWARE", 
                description: "Reduce el riesgo con nuestra garantía integral contra ransomware, ofreciendo tranquilidad financiera y operativa." 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={subtleFadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--halcyon-blue)] p-6 rounded-xl border border-[var(--halcyon-orange)]/20 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 text-center flex flex-col items-center hover:shadow-lg hover:shadow-[var(--halcyon-orange)]/10"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <div className="mb-6 p-4 bg-[var(--halcyon-navy)] rounded-full border border-[var(--halcyon-orange)]/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--halcyon-orange)]">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Cards (From original Qué es Halcyon) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
               <Card className="h-full bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Globe className="h-12 w-12 text-[var(--halcyon-orange)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Presencia Internacional</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Halcyon protege empresas Fortune 500 y organizaciones críticas en todo el mundo, con presencia en Estados Unidos, Europa, Asia y América Latina.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
            >
               <Card className="h-full bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-yellow)]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-[var(--halcyon-yellow)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Capacidad de Desencriptación</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Tecnología única capaz de desencriptar archivos afectados por ransomware sin necesidad de pagar rescates, recuperando información crítica en minutos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Eliminando la Brecha (CTA) */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-[var(--halcyon-orange)] text-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/10 font-semibold px-8 py-6 text-lg"
              asChild
            >
              <a href="/diferencia">
                Conoce la Diferencia Halcyon <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Quiénes Somos - Halcyon México (Refocused) */}
      <section id="quienes-somos" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Quiénes Somos - Halcyon México
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
              Tu aliado local con respaldo global
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Somos la representación oficial de Halcyon en México. Nuestra misión es brindar a las empresas mexicanas acceso directo a la tecnología anti-ransomware más potente del mundo, con el soporte y acompañamiento de expertos locales.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { 
                icon: <Target className="h-12 w-12" />, 
                title: "Asesoría Estratégica", 
                description: "Brindamos consultoría especializada para adaptar la plataforma Halcyon a las necesidades específicas de tu infraestructura y cumplimiento normativo en México." 
              },
              { 
                icon: <Users className="h-12 w-12" />, 
                title: "Acompañamiento Local", 
                description: "Equipo de ingeniería y soporte en tu idioma y zona horaria, trabajando contigo desde la implementación hasta la gestión de incidentes." 
              },
              { 
                icon: <Award className="h-12 w-12" />, 
                title: "Representación Oficial", 
                description: "Como canal autorizado directo, garantizamos acceso prioritario a actualizaciones, nuevas funcionalidades y soporte de nivel empresarial de Halcyon." 
              },
              { 
                icon: <ShieldCheck className="h-12 w-12" />, 
                title: "Garantía y Confianza", 
                description: "Respaldamos la efectividad de la solución con compromisos claros de servicio y atención inmediata ante cualquier eventualidad." 
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={subtleFadeIn}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Cómo Protege Halcyon */}
      <section id="proteccion" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)] border-t border-[var(--halcyon-orange)]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Cómo Protege Halcyon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Triple capa de protección inteligente
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Halcyon combina prevención, detección y recuperación automática para garantizar 
              la continuidad de tu negocio sin interrupciones.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Shield className="h-8 w-8 text-[var(--halcyon-orange)]" />,
                number: "01",
                title: "Prevención",
                description: "IA que analiza comportamientos en tiempo real para bloquear amenazas antes de que se ejecuten.",
                features: [
                  "Análisis conductual avanzado",
                  "Detección de amenazas de día cero",
                  "Protección en endpoints y servidores"
                ],
                color: "var(--halcyon-orange)"
              },
              {
                icon: <Lock className="h-8 w-8 text-[var(--halcyon-yellow)]" />,
                number: "02",
                title: "Aislamiento",
                description: "Contención automática e inmediata de amenazas detectadas para evitar propagación.",
                features: [
                  "Aislamiento en milisegundos",
                  "Prevención de movimiento lateral",
                  "Protección de datos sensibles"
                ],
                color: "var(--halcyon-yellow)"
              },
              {
                icon: <RefreshCw className="h-8 w-8 text-[var(--halcyon-orange)]" />,
                number: "03",
                title: "Recuperación",
                description: "Desencriptación y restauración automática de archivos sin pagar rescates.",
                features: [
                  "Recuperación en menos de 60 segundos",
                  "Sin downtime operacional",
                  "Cero pagos de rescate"
                ],
                color: "var(--halcyon-orange)"
              }
            ].map((step, index) => (
              <motion.div key={index} variants={subtleFadeIn} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-opacity-30 hover:shadow-2xl transition-all duration-300" style={{ borderColor: step.color }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${step.color}20` }}>
                      {step.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2" style={{ color: step.color }}>{step.number}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" style={{ color: step.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={subtleScale}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-[var(--halcyon-orange)]/20 to-[var(--halcyon-yellow)]/20 border-[var(--halcyon-orange)]/30 inline-block hover:shadow-2xl hover:shadow-[var(--halcyon-orange)]/20 transition-all duration-300">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-[var(--halcyon-orange)] mx-auto mb-4" />
                <p className="text-white text-xl font-semibold">
                  Respuesta automática en <span className="text-[var(--halcyon-orange)]">menos de 60 segundos</span> desde la detección
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 5. Amenazas y Realidad */}
      <section id="amenazas" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-red)]/20 text-[var(--halcyon-red)] border-[var(--halcyon-red)]/30">
              Amenazas y Realidad
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
              El panorama actual de ciberataques
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Las empresas enfrentan amenazas cada vez más sofisticadas que comprometen 
              la continuidad del negocio y la información crítica.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: <FileWarning className="h-12 w-12 text-[var(--halcyon-red)] mb-4" />, title: "Phishing", description: "Correos electrónicos fraudulentos que engañan a usuarios para revelar credenciales o descargar malware. El 90% de los ataques comienzan aquí.", borderColor: "var(--halcyon-red)" },
              { icon: <UserX className="h-12 w-12 text-[var(--halcyon-orange)] mb-4" />, title: "Ingeniería Social", description: "Manipulación psicológica para obtener acceso no autorizado. Los atacantes se hacen pasar por personas de confianza.", borderColor: "var(--halcyon-orange)" },
              { icon: <AlertTriangle className="h-12 w-12 text-[var(--halcyon-red)] mb-4" />, title: "Ransomware", description: "Encriptación de archivos críticos con exigencia de rescate. Puede paralizar operaciones completas en minutos.", borderColor: "var(--halcyon-red)" }
            ].map((threat, index) => (
              <motion.div key={index} variants={subtleFadeIn}>
                <Card className="bg-white hover:shadow-xl transition-all duration-300 hover:scale-105" style={{ borderColor: threat.borderColor, borderWidth: '1px' }}>
                  <CardContent className="p-6">
                    {threat.icon}
                    <h3 className="text-xl font-semibold text-[var(--halcyon-navy)] mb-3">{threat.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{threat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={subtleScale}
            className="bg-gradient-to-r from-[var(--halcyon-red)]/10 to-[var(--halcyon-orange)]/10 border-2 border-[var(--halcyon-red)]/30 rounded-lg p-8"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <AlertTriangle className="h-20 w-20 text-[var(--halcyon-red)] flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-2">Estadísticas Alarmantes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• El costo promedio de un ataque de ransomware supera los $4.5 millones USD</li>
                  <li>• Un nuevo ataque ocurre cada 11 segundos a nivel mundial</li>
                  <li>• El 60% de las pequeñas empresas cierran dentro de 6 meses tras un ataque</li>
                  <li>• México es el segundo país más atacado en América Latina</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Casos de Éxito */}
      <section id="casos-exito" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Casos de Éxito
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Resultados comprobados
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empresas de diferentes sectores han recuperado sus operaciones gracias a Halcyon, 
              ahorrando millones en rescates y tiempo de inactividad.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Server className="h-12 w-12 text-[var(--halcyon-orange)] mb-4" />,
                title: "Sector Financiero",
                description: "Institución bancaria con 500+ sucursales sufrió ataque de ransomware que encriptó servidores críticos. Halcyon recuperó todos los sistemas en 45 minutos.",
                stats: [
                  { value: "45min", label: "Tiempo de recuperación", color: "var(--halcyon-orange)" },
                  { value: "$0", label: "Rescate pagado", color: "var(--halcyon-orange)" }
                ]
              },
              {
                icon: <Database className="h-12 w-12 text-[var(--halcyon-yellow)] mb-4" />,
                title: "Sector Salud",
                description: "Hospital con registros de 100,000+ pacientes atacado. Halcyon restauró historiales médicos sin interrupción de servicios de emergencia.",
                stats: [
                  { value: "100%", label: "Datos recuperados", color: "var(--halcyon-yellow)" },
                  { value: "0h", label: "Downtime", color: "var(--halcyon-yellow)" }
                ]
              },
              {
                icon: <Globe className="h-12 w-12 text-[var(--halcyon-orange)] mb-4" />,
                title: "Manufactura",
                description: "Planta de producción con sistemas SCADA comprometidos. Halcyon evitó detención de líneas productivas valoradas en $2M diarios.",
                stats: [
                  { value: "$2M+", label: "Pérdidas evitadas", color: "var(--halcyon-orange)" },
                  { value: "24/7", label: "Operación continua", color: "var(--halcyon-orange)" }
                ]
              },
              {
                icon: <ShieldCheck className="h-12 w-12 text-[var(--halcyon-yellow)] mb-4" />,
                title: "Retail",
                description: "Cadena retail con 200+ tiendas atacada durante temporada alta. Halcyon protegió datos de clientes y sistemas POS sin interrupciones.",
                stats: [
                  { value: "200+", label: "Tiendas protegidas", color: "var(--halcyon-yellow)" },
                  { value: "99.9%", label: "Uptime", color: "var(--halcyon-yellow)" }
                ]
              }
            ].map((caseStudy, index) => (
              <motion.div key={index} variants={subtleFadeIn} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="bg-white/5 border-opacity-30 hover:shadow-xl transition-all duration-300 backdrop-blur-sm" style={{ borderColor: caseStudy.stats[0].color }}>
                  <CardContent className="p-6">
                    {caseStudy.icon}
                    <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{caseStudy.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="rounded-lg p-4 bg-white/5">
                          <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. Industrias */}
      <section id="industrias" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
        <div className="max-w-7xl mx-auto">
           <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Industrias
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
              Protección especializada por sector
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Adaptamos nuestra estrategia de ciberseguridad a las necesidades críticas y regulaciones de cada industria.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  value: "finanzas",
                  title: "Finanzas",
                  icon: <TrendingUp className="h-6 w-6 text-[var(--halcyon-orange)]" />,
                  content: "Protección crítica para instituciones financieras, asegurando transacciones, datos de clientes y cumplimiento normativo estricto. Detenemos ataques que buscan interrumpir servicios bancarios o robar información financiera sensible."
                },
                {
                  value: "empresas",
                  title: "Empresas",
                  icon: <Server className="h-6 w-6 text-[var(--halcyon-orange)]" />,
                  content: "Soluciones escalables para corporativos de todos los tamaños. Protegemos la propiedad intelectual, la continuidad del negocio y la reputación de la marca frente a ataques de extorsión y ransomware."
                },
                {
                  value: "hospitales",
                  title: "Hospitales y Salud",
                  icon: <Zap className="h-6 w-6 text-[var(--halcyon-orange)]" />,
                  content: "Defensa vital para el sector salud, donde la disponibilidad de los datos puede ser una cuestión de vida o muerte. Aseguramos historiales médicos y sistemas hospitalarios contra secuestros digitales."
                },
                {
                  value: "universidades",
                  title: "Universidades y Educación",
                  icon: <Globe className="h-6 w-6 text-[var(--halcyon-orange)]" />,
                  content: "Protección para entornos académicos abiertos pero seguros. Resguardamos investigaciones, datos de estudiantes y sistemas administrativos sin comprometer la accesibilidad necesaria para el aprendizaje."
                },
                {
                  value: "gobierno",
                  title: "Gobierno",
                  icon: <Shield className="h-6 w-6 text-[var(--halcyon-orange)]" />,
                  content: "Seguridad nacional y estatal para infraestructuras críticas y servicios ciudadanos. Prevenimos interrupciones en servicios públicos y protegemos bases de datos gubernamentales confidenciales."
                }
              ].map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border border-[var(--halcyon-orange)]/20 rounded-lg bg-white px-4">
                  <AccordionTrigger className="text-[var(--halcyon-navy)] hover:text-[var(--halcyon-orange)] hover:no-underline text-lg font-semibold py-6">
                    <div className="flex items-center gap-4">
                      {item.icon}
                      {item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* 8. Contacto */}
      <section id="contacto" className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Contacto
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Protege tu empresa hoy mismo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agenda una consultoría gratuita con nuestros expertos y descubre cómo 
              Halcyon puede proteger tu información crítica.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: <Mail className="h-12 w-12 text-[var(--halcyon-orange)] mx-auto mb-4" />, title: "Email", content: "achavez@halcyon.mx", href: "mailto:achavez@halcyon.mx" },
              { icon: <Phone className="h-12 w-12 text-[var(--halcyon-yellow)] mx-auto mb-4" />, title: "Teléfono", content: "811-313-2698", href: "tel:+528113132698" },
              { icon: <Globe className="h-12 w-12 text-[var(--halcyon-orange)] mx-auto mb-4" />, title: "Sitio Global", content: "www.halcyon.ai", href: "https://halcyon.ai" }
            ].map((contact, index) => (
              <motion.div key={index} variants={subtleFadeIn} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    {contact.icon}
                    <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                    <a href={contact.href} className="text-[var(--halcyon-orange)] hover:text-white transition-colors" target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {contact.content}
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
