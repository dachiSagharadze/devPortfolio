import { motion } from "framer-motion";
import React from "react";

export default function TransitionLink({ children }) {
  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-full h-full bg-[#1E1E1E] origin-bottom z-20 flex items-center justify-center"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1 
          className="text-white text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
           HIRE ME!
        </motion.h1>
      </motion.div>

      <motion.div 
        className="fixed top-0 left-0 w-full h-full bg-[#1E1E1E] origin-top z-10"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="relative z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
