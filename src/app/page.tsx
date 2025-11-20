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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--halcyon-navy)] via-[var(--halcyon-blue)] to-[var(--halcyon-navy)]">
      <Navigation />

      {/* Hero Section - Inicio */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30 px-4 py-2 text-sm font-semibold">
              Representación oficial en México
            </Badge>
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Ciberseguridad avanzada para proteger la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--halcyon-orange)] to-[var(--halcyon-yellow)]">
              información crítica
            </span>
            {' '}de tu empresa
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Representación oficial de Halcyon en México.
            <br />
            Protección inteligente contra ransomware con IA.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#que-es-halcyon">
                Conoce la solución <ArrowRight className="ml-2 h-5 w-5" />
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
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { value: "99.9%", label: "Tasa de recuperación", color: "var(--halcyon-orange)" },
              { value: "<60s", label: "Tiempo de respuesta", color: "var(--halcyon-yellow)" },
              { value: "$0", label: "Pagos de rescate", color: "var(--halcyon-orange)" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="quienes-somos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Quiénes Somos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
              Tu socio estratégico en resiliencia digital
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Somos el representante oficial de Halcyon en México, dedicados a brindar asesoría estratégica 
              y acompañamiento integral a empresas mexicanas.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: <Target className="h-12 w-12" />, title: "Asesoría Estratégica", description: "Evaluamos tu postura de seguridad y diseñamos estrategias personalizadas de protección." },
              { icon: <Users className="h-12 w-12" />, title: "Acompañamiento Total", description: "Te guiamos en cada paso de la implementación y optimización de tu seguridad." },
              { icon: <TrendingUp className="h-12 w-12" />, title: "Resiliencia Digital", description: "Fortalecemos la capacidad de tu empresa para resistir y recuperarse de ataques." },
              { icon: <Award className="h-12 w-12" />, title: "Representación Oficial", description: "Respaldo directo de Halcyon, líder mundial en protección contra ransomware." }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Qué es Halcyon */}
      <section id="que-es-halcyon" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Qué es Halcyon
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              La solución anti-ransomware más avanzada del mundo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Halcyon utiliza inteligencia artificial de última generación para prevenir, detectar 
              y recuperar automáticamente información de ataques de ransomware.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--halcyon-orange)]/20">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-[var(--halcyon-orange)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Presencia Internacional</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Halcyon protege empresas Fortune 500 y organizaciones críticas en todo el mundo, 
                    con presencia en Estados Unidos, Europa, Asia y América Latina.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[var(--halcyon-orange)] mr-2 flex-shrink-0" />
                      Empresas Fortune 500
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[var(--halcyon-orange)] mr-2 flex-shrink-0" />
                      Infraestructura crítica
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[var(--halcyon-orange)] mr-2 flex-shrink-0" />
                      Sectores financiero y salud
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-yellow)]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--halcyon-yellow)]/20">
                <CardContent className="p-8">
                  <Database className="h-12 w-12 text-[var(--halcyon-yellow)] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Capacidad de Desencriptación</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Tecnología única capaz de desencriptar archivos afectados por ransomware sin necesidad 
                    de pagar rescates, recuperando información crítica en minutos.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[var(--halcyon-yellow)] mr-2 flex-shrink-0" />
                      Desencriptación automática
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[var(--halcyon-yellow)] mr-2 flex-shrink-0" />
                      Sin pagos de rescate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-[var(--halcyon-yellow)] mr-2 flex-shrink-0" />
                      Recuperación en tiempo récord
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-[var(--halcyon-orange)]/20 to-[var(--halcyon-yellow)]/20 border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <ShieldCheck className="h-16 w-16 text-[var(--halcyon-orange)] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Tecnología con Inteligencia Artificial</h3>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Halcyon utiliza modelos de IA entrenados específicamente para identificar y neutralizar 
                  variantes de ransomware, incluyendo amenazas de día cero, con precisión superior al 99.9%.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Amenazas y Realidad */}
      <section id="amenazas" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { icon: <FileWarning className="h-12 w-12 text-[var(--halcyon-red)] mb-4" />, title: "Phishing", description: "Correos electrónicos fraudulentos que engañan a usuarios para revelar credenciales o descargar malware. El 90% de los ataques comienzan aquí.", borderColor: "var(--halcyon-red)" },
              { icon: <UserX className="h-12 w-12 text-[var(--halcyon-orange)] mb-4" />, title: "Ingeniería Social", description: "Manipulación psicológica para obtener acceso no autorizado. Los atacantes se hacen pasar por personas de confianza.", borderColor: "var(--halcyon-orange)" },
              { icon: <AlertTriangle className="h-12 w-12 text-[var(--halcyon-red)] mb-4" />, title: "Ransomware", description: "Encriptación de archivos críticos con exigencia de rescate. Puede paralizar operaciones completas en minutos.", borderColor: "var(--halcyon-red)" }
            ].map((threat, index) => (
              <motion.div key={index} variants={fadeInUp}>
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
            variants={scaleIn}
            transition={{ duration: 0.6 }}
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

      {/* Cómo Protege Halcyon */}
      <section id="proteccion" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
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
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-opacity-30 hover:shadow-2xl transition-all duration-300" style={{ borderColor: step.color }}>
                  <CardContent className="p-8">
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
            variants={scaleIn}
            transition={{ duration: 0.6, delay: 0.3 }}
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

      {/* Casos de Éxito */}
      <section id="casos-exito" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-beige)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Casos de Éxito
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--halcyon-navy)] mb-6">
              Resultados comprobados sin pagar rescates
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Empresas de diferentes sectores han recuperado sus operaciones gracias a Halcyon, 
              ahorrando millones en rescates y tiempo de inactividad.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              <motion.div key={index} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white border-opacity-30 hover:shadow-xl transition-all duration-300" style={{ borderColor: caseStudy.stats[0].color }}>
                  <CardContent className="p-8">
                    {caseStudy.icon}
                    <h3 className="text-2xl font-bold text-[var(--halcyon-navy)] mb-4">{caseStudy.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{caseStudy.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="rounded-lg p-4" style={{ backgroundColor: `${stat.color}10` }}>
                          <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
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

      {/* Contacto */}
      <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--halcyon-navy)]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
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
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            {[
              { icon: <Mail className="h-12 w-12 text-[var(--halcyon-orange)] mx-auto mb-4" />, title: "Email", content: "info@halcyon.mx", href: "mailto:info@halcyon.mx" },
              { icon: <Phone className="h-12 w-12 text-[var(--halcyon-yellow)] mx-auto mb-4" />, title: "Teléfono", content: "+52 55 5555 5555", href: "tel:+525555555555" },
              { icon: <Globe className="h-12 w-12 text-[var(--halcyon-orange)] mx-auto mb-4" />, title: "Sitio Global", content: "www.halcyon.ai", href: "https://halcyon.ai" }
            ].map((contact, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
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
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}