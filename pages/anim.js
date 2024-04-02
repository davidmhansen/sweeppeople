export const reveal = {
  initial: {
    y: "30%",
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
  exit: {
    y: "30%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
};
