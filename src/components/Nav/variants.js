
  export const navVariant = {
    open: {
      visibility: 'visible',
      height: 200,
      transition: { duration: 1, type: 'spring' }
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
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },

    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  }
  