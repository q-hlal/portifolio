export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
};
export const showText = {
    initial: {
        y: "100vh"
    },
    exit: {
        y: "0",
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
};

export const animateLeft = {
    initial: {
        x: 0
    },
    exit: {
        x: "-100vw",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }
    }
};

export const animateRight = {
    initial: {
        x: 0
    },
    exit: {
        x: "100vw",
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }
    }
};