"use client";

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      
      <main className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[var(--halcyon-navy)]">Política de Privacidad</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-MX')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--halcyon-navy)]">1. Introducción</h2>
            <p>
              Halcyon México ("nosotros", "nuestro" o "la Empresa") se compromete a proteger su privacidad y sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos su información cuando visita nuestro sitio web o utiliza nuestros servicios.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--halcyon-navy)]">2. Información que Recopilamos</h2>
            <p>Podemos recopilar la siguiente información:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Información de Contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono y nombre de la empresa.</li>
              <li><strong>Información Técnica:</strong> Dirección IP, tipo de navegador, sistema operativo y datos de navegación a través de cookies y tecnologías similares.</li>
              <li><strong>Información de Reportes:</strong> Datos proporcionados voluntariamente en formularios de reporte de incidentes o contacto.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--halcyon-navy)]">3. Uso de la Información</h2>
            <p>Utilizamos su información para:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proveer y mantener nuestros servicios de ciberseguridad.</li>
              <li>Contactarle para responder a sus consultas o reportes de incidentes.</li>
              <li>Mejorar nuestro sitio web y servicios.</li>
              <li>Cumplir con obligaciones legales y normativas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--halcyon-navy)]">4. Protección de Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida, el uso indebido o la alteración.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--halcyon-navy)]">5. Sus Derechos ARCO</h2>
            <p>
              De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), usted tiene derecho a Acceder, Rectificar, Cancelar y Oponerse al tratamiento de sus datos personales (Derechos ARCO). Para ejercer estos derechos, por favor contáctenos a través de los medios proporcionados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--halcyon-navy)]">6. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta Política de Privacidad, puede contactarnos en:
              <br />
              <strong>Email:</strong> <a href="mailto:achavez@halcyon.mx" className="text-[var(--halcyon-orange)] hover:underline">achavez@halcyon.mx</a>
              <br />
              <strong>Teléfono:</strong> <a href="tel:+528113132698" className="text-[var(--halcyon-orange)] hover:underline">811-313-2698</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
