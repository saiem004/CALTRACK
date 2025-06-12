// Animation variants for Framer Motion
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const fadeInDown = {
  initial: {
    opacity: 0,
    y: -60
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -60
  },
  animate: {
    opacity: 1,
    x: 0
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 60
  },
  animate: {
    opacity: 1,
    x: 0
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const slideInLeft = {
  initial: {
    opacity: 0,
    x: -100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};

export const slideInRight = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};

export const slideInUp = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};

export const slideInDown = {
  initial: {
    opacity: 0,
    y: -100
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const scaleInCenter = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 0.8,
    ease: "backOut"
  }
};

export const rotateIn = {
  initial: {
    opacity: 0,
    rotate: -180,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};

export const bounceIn = {
  initial: {
    opacity: 0,
    scale: 0.3
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 0.8,
    ease: "backOut"
  }
};

export const flipIn = {
  initial: {
    opacity: 0,
    rotateY: -90
  },
  animate: {
    opacity: 1,
    rotateY: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeOut"
  }
};

export const zoomIn = {
  initial: {
    opacity: 0,
    scale: 0.5
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

export const zoomOut = {
  initial: {
    opacity: 0,
    scale: 1.5
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 0.6,
    ease: "easeOut"
  }
};

// Container animations for staggering children
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerFast = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

export const staggerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

// Hover animations
export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  whileTap: {
    scale: 0.95
  }
};

export const hoverFloat = {
  whileHover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

export const hoverRotate = {
  whileHover: {
    rotate: 5,
    transition: { duration: 0.2 }
  }
};

export const hoverGlow = {
  whileHover: {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
    transition: { duration: 0.2 }
  }
};

// Continuous animations
export const float = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const spin = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export const bounce = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const wiggle = {
  animate: {
    rotate: [-5, 5, -5],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Exit animations
export const fadeOut = {
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const slideOutLeft = {
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const slideOutRight = {
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const scaleOut = {
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export const slidePageTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.3 }
};

// Custom easing curves
export const customEasing = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.320, 1.275]
};