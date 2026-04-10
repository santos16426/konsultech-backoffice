import type { Variants } from "framer-motion";

export const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

export const toolbarVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.05, ease: smoothEase },
  },
};

export const tableBodyVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.06 },
  },
};

export const rowVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: smoothEase },
  },
};

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: -4,
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

/** Vertical list / accordion group cards (medicine, labs). */
export const stackItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: smoothEase },
  },
};

/** Empty states and light fades. */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: smoothEase },
  },
};

/** Paginated footer / bars that mount and unmount (e.g. medicine table). */
export const paginationBarVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.05, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.2, ease: smoothEase },
  },
};
