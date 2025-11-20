"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { AttackReportForm } from '@/components/AttackReportForm';
import { AlertTriangle, Phone } from 'lucide-react';

export default function ReportAttackPage() {
  return (
    <div className="min-h-screen bg-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-4 bg-[var(--halcyon-red)]/20 rounded-full mb-6">
              <AlertTriangle className="h-16 w-16 text-[var(--halcyon-red)]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Estás experimentando un ataque?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Completa este formulario para solicitudes urgentes de Respuesta a Incidentes. 
              El equipo de Servicios de Halcyon ayudará a tu organización a establecer rápidamente la actividad del atacante, 
              contener el ransomware y ayudarte a volver al negocio más rápido.
            </p>
            
            <div className="bg-[var(--halcyon-blue)] border border-[var(--halcyon-orange)]/30 rounded-lg p-6 inline-block">
              <p className="text-lg text-white font-semibold mb-2">
                Para solicitudes urgentes de servicio de respuesta a incidentes llama al:
              </p>
              <a href="tel:+12108309940" className="flex items-center justify-center text-2xl font-bold text-[var(--halcyon-orange)] hover:text-white transition-colors">
                <Phone className="mr-2 h-6 w-6" />
                +1 (210) 830-9940
              </a>
            </div>
          </div>

          <div className="bg-[var(--halcyon-blue)]/50 border border-[var(--halcyon-orange)]/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <AttackReportForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
