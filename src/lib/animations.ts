import { Variants } from 'framer-motion';

// Constantes para consistencia
export const DURATION = {
  FAST: 0.2,
  NORMAL: 0.4,
  SLOW: 0.6,
};

export const EASING = {
  DEFAULT: "easeOut",
  SMOOTH: "easeInOut",
};

// Variantes de animación
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.NORMAL,
      ease: EASING.DEFAULT
    }
  }
};

export const subtleFadeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.NORMAL,
      ease: EASING.DEFAULT
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: DURATION.NORMAL
    }
  }
};

export const subtleScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATION.NORMAL,
      ease: EASING.DEFAULT
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATION.NORMAL,
      ease: EASING.DEFAULT
    }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: DURATION.NORMAL,
      ease: EASING.DEFAULT
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover sutil para elementos interactivos
export const subtleHover = {
  scale: 1.02,
  transition: { duration: DURATION.FAST, ease: "easeOut" as const }
};

// Hover para tarjetas
export const cardHover = {
  y: -4,
  transition: { duration: DURATION.FAST, ease: "easeOut" as const }
};

// Hover para botones
export const buttonHover = {
  scale: 1.02,
  transition: { duration: DURATION.FAST, ease: "easeOut" as const }
};

