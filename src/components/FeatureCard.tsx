"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { subtleHover, subtleFadeIn, subtleScale } from '@/lib/animations';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="bg-white border-[var(--halcyon-orange)]/30 hover:border-[var(--halcyon-orange)]/60 hover:shadow-xl hover:shadow-[var(--halcyon-orange)]/10 transition-all duration-300 h-full">
        <CardContent className="p-6">
          <motion.div 
            className="text-[var(--halcyon-orange)] mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {icon}
          </motion.div>
          <motion.h3 
            className="text-xl font-semibold text-[var(--halcyon-navy)] mb-3"
            variants={subtleFadeIn}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-gray-700 leading-relaxed"
            variants={subtleFadeIn}
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
