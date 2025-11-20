"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Lock, Send, Loader2 } from 'lucide-react';
import { subtleFadeIn, subtleScale } from '@/lib/animations';

export function AttackReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    jobTitle: '',
    personalEmail: '',
    message: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      consent: checked
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Attack Report Submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={subtleScale}
        className="text-center p-12 bg-[var(--halcyon-blue)]/30 rounded-xl border border-[var(--halcyon-orange)]/30"
      >
        <div className="w-20 h-20 bg-[var(--halcyon-orange)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock className="h-10 w-10 text-[var(--halcyon-orange)]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Reporte Recibido</h3>
        <p className="text-gray-300 mb-8 text-lg">
          Hemos recibido tu reporte de incidente. Nuestro equipo de respuesta a incidentes analizará la información y se pondrá en contacto contigo de inmediato al número proporcionado.
        </p>
        <p className="text-[var(--halcyon-orange)] font-bold text-xl">
          Para atención inmediata llama al: +1 (210) 830-9940
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">Nombre *</Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
            placeholder="Tu nombre"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">Apellido *</Label>
          <Input
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
            placeholder="Tu apellido"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-white">Nombre de la Empresa *</Label>
          <Input
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
            placeholder="Empresa afectada"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-white">Cargo / Puesto</Label>
          <Input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
            placeholder="Tu cargo"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="businessEmail" className="text-white">Correo Electrónico Empresarial *</Label>
          <Input
            id="businessEmail"
            name="businessEmail"
            type="email"
            required
            value={formData.businessEmail}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
            placeholder="correo@empresa.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="personalEmail" className="text-white">Correo Personal / Secundario</Label>
          <Input
            id="personalEmail"
            name="personalEmail"
            type="email"
            value={formData.personalEmail}
            onChange={handleChange}
            className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
            placeholder="correo@gmail.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-white">Número de Teléfono *</Label>
        <Input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)]"
          placeholder="+52 55 1234 5678"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">¿Cómo puede ayudarte Halcyon? *</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="bg-white/10 border-white/20 text-white focus:border-[var(--halcyon-orange)] min-h-[120px]"
          placeholder="Describe brevemente el incidente o ataque..."
        />
      </div>

      <div className="flex items-start space-x-3 pt-4">
        <Checkbox 
          id="consent" 
          checked={formData.consent}
          onCheckedChange={handleCheckboxChange}
          required
          className="mt-1 border-white/50 data-[state=checked]:bg-[var(--halcyon-orange)] data-[state=checked]:border-[var(--halcyon-orange)]"
        />
        <Label htmlFor="consent" className="text-sm text-gray-300 leading-tight font-normal">
          Al enviar este formulario, aceptas recibir comunicaciones de Halcyon, incluyendo actualizaciones, ofertas y más información relacionada con productos y servicios de Halcyon. Puedes darte de baja en cualquier momento. Consulta nuestra Política de Privacidad para más detalles.
        </Label>
      </div>

      <div className="pt-6">
        <Button 
          type="submit" 
          disabled={isSubmitting || !formData.consent}
          className="w-full bg-[var(--halcyon-red)] hover:bg-[var(--halcyon-red)]/90 text-white font-bold py-6 text-lg shadow-lg hover:shadow-[var(--halcyon-red)]/30 transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando reporte...
            </>
          ) : (
            <>
              <Lock className="mr-2 h-5 w-5" />
              Reportar Ataque Ahora
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        Este sitio está protegido por reCAPTCHA y se aplican la Política de Privacidad y los Términos de Servicio de Google.
      </p>
    </form>
  );
}
