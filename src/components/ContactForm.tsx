"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Gracias por tu interés. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="bg-gradient-to-br from-[var(--halcyon-blue)] to-[var(--halcyon-navy)] border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/50 transition-all duration-300">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                Nombre completo *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--halcyon-orange)] focus:ring-[var(--halcyon-orange)] transition-all duration-300"
                placeholder="Tu nombre"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                Correo electrónico *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--halcyon-orange)] focus:ring-[var(--halcyon-orange)] transition-all duration-300"
                placeholder="tu@empresa.com"
              />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label htmlFor="company" className="block text-sm font-medium mb-2 text-white">
                Empresa *
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--halcyon-orange)] focus:ring-[var(--halcyon-orange)] transition-all duration-300"
                placeholder="Nombre de tu empresa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">
                Teléfono
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--halcyon-orange)] focus:ring-[var(--halcyon-orange)] transition-all duration-300"
                placeholder="+52 55 1234 5678"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
              Mensaje *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-[var(--halcyon-orange)] focus:ring-[var(--halcyon-orange)] transition-all duration-300"
              placeholder="Cuéntanos sobre tus necesidades de ciberseguridad..."
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-[var(--halcyon-orange)] hover:bg-[var(--halcyon-orange)]/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-2xl hover:shadow-[var(--halcyon-orange)]/30 transition-all duration-300 group"
            >
              Enviar mensaje
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
}