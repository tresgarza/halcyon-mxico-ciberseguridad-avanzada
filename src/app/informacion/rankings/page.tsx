"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, BarChart2 } from 'lucide-react';

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-[var(--halcyon-navy)]">
      <Navigation />
      
      <main className="pt-24 pb-24">
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[var(--halcyon-orange)]/20 text-[var(--halcyon-orange)] border-[var(--halcyon-orange)]/30">
              Información
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Top Grupos de Ransomware
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Consulta los rankings actualizados de los grupos de ransomware más activos y peligrosos a nivel mundial, basados en la inteligencia de amenazas de Halcyon.
            </p>
            
            <div className="bg-[var(--halcyon-blue)] p-8 rounded-2xl border border-[var(--halcyon-orange)]/20">
              <BarChart2 className="h-24 w-24 text-[var(--halcyon-orange)] mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-white mb-4">Reporte Trimestral de Ransomware Malicious</h3>
              <p className="text-gray-300 mb-8">
                Accede al reporte completo y detallado en nuestro sitio global.
              </p>
              <Button
                size="lg"
                className="bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white font-bold px-8 py-6 text-lg"
                asChild
              >
                <a href="https://www.halcyon.ai/top-ransomware-groups" target="_blank" rel="noopener noreferrer">
                  Ver Rankings Globales <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
