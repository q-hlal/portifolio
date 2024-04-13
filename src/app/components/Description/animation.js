export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.03 * i}
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5}
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 1}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}
export const imgShow = {
    initial: {
        opacity: 0,
        x:-100,
        transition: {duration: 1}
    },
    animate: {
        opacity: 1,
        x:0,
        transition: {duration: 0.7}
    },
    exit: {
        opacity: 0,
    }
}