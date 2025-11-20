"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function SLAPage() {
  return (
    <div className="min-h-screen bg-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24 pb-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Compromiso de Servicio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Acuerdo de Nivel de Servicio (SLA)
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              En Halcyon, nos comprometemos con la excelencia y la velocidad. Nuestro SLA refleja nuestra confianza en la plataforma y nuestro compromiso con la protección de tu negocio.
            </p>
          </div>
        </section>

        <section className="bg-[var(--halcyon-blue)] py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[var(--halcyon-navy)] p-6 rounded-2xl border border-[var(--halcyon-orange)]/20">
                   <Clock className="h-12 w-12 text-[var(--halcyon-orange)] mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4">Tiempos de Respuesta</h3>
                   <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[var(--halcyon-orange)] mr-3 mt-1" />
                        <span><strong>Crítico:</strong> Respuesta inicial en menos de 15 minutos para incidentes de ransomware activos.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[var(--halcyon-orange)] mr-3 mt-1" />
                        <span><strong>Alto:</strong> Respuesta en menos de 60 minutos para alertas de alta prioridad.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[var(--halcyon-orange)] mr-3 mt-1" />
                        <span><strong>Normal:</strong> Respuesta en 4 horas hábiles para consultas generales y soporte.</span>
                      </li>
                   </ul>
                </div>

                <div className="bg-[var(--halcyon-navy)] p-8 rounded-2xl border border-[var(--halcyon-yellow)]/20">
                   <ShieldCheck className="h-12 w-12 text-[var(--halcyon-yellow)] mb-6" />
                   <h3 className="text-2xl font-bold text-white mb-4">Disponibilidad de Plataforma</h3>
                   <ul className="space-y-4 text-gray-300">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[var(--halcyon-yellow)] mr-3 mt-1" />
                        <span><strong>Uptime Garantizado:</strong> 99.9% de disponibilidad mensual de la consola de administración y servicios en la nube.</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[var(--halcyon-yellow)] mr-3 mt-1" />
                        <span><strong>Mantenimiento Programado:</strong> Notificación con 48 horas de anticipación y ventanas de mantenimiento fuera de horario laboral crítico.</span>
                      </li>
                   </ul>
                </div>
             </div>

             <div className="mt-12 bg-[var(--halcyon-navy)]/50 p-8 rounded-2xl border border-[var(--halcyon-orange)]/20 text-center max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Garantía de Recuperación</h3>
                <p className="text-gray-300 text-lg">
                  Si a pesar de tener Halcyon correctamente implementado y configurado, su organización sufre un ataque de ransomware exitoso, activaremos nuestra garantía de servicio para cubrir los costos de recuperación y remediación hasta el límite establecido en su contrato.
                </p>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
