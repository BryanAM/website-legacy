  export const navVariant = {
    desktop: {
      visibility: 'visible',
      height: 70,
      zIndex: 1,
      transition: { duration: 1, type: 'spring', delay: 0.2 }
    },
    open: {
      visibility: 'visible',
      height: 200,
      zIndex: 1,
      transition: { duration: 1, type: 'spring', delay: 0.2 }
    },

    closed: {
      height: 0,
      transition: { duration: 1, type: 'tween', delay: 0.2 },
      transitionEnd: {
        visibility: 'hidden'
      }
    },
  }
  
  export const liVariants = {
    desktop: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stuffness: 1000 }
      }
    },

    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stuffness: 1000, velocity: -100 }
      }
    },

    closed: {
      y: 20,
      opacity: 0,
      transition: {
        y: { stuffness: 1000 }
      }
    }
  }

  export const ulVariants = {
    desktop: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    },
    
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },

    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }

  export const svgVariants = {
     open: {
      height: 110,
      transition: {
        height: { stuffness: 1000, type: 'spring', delay: 0.5}
      }
    },

    closed: {
      height: 0,
      transition: {
        height: { stuffness: 1000, delay: 0.2 }
      }
    }
  }

  