import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ progress }) => {
  const [showShutter, setShowShutter] = useState(false);
  const [hidePreloader, setHidePreloader] = useState(false);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => setShowShutter(true), 400); // Wait for bar to fill
      setTimeout(() => setHidePreloader(true), 1200); // Wait for shutter animation
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!hidePreloader && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            overflow: "hidden",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Progress Bar */}
          <div
            style={{
              width: "220px",
              height: "8px", // Thinner bar
              background: "#eee",
              borderRadius: "4px",
              overflow: "hidden",
              marginBottom: "12px",
            }}
          >
           <motion.div
  style={{
    height: "100%",
    background: "linear-gradient(90deg, #ff6a00, #ee0979)", // Gradient colors
  }}
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
/>

          </div>
          <motion.span
            style={{ fontSize: "1rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {progress}%
          </motion.span>
          {/* Vertical Shutter Animation */}
          <AnimatePresence>
            {showShutter && (
              <motion.div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "#fff",
                  zIndex: 10000,
                  pointerEvents: "none",
                  transformOrigin: "top", // Ensure transform origin is set
                }}
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;