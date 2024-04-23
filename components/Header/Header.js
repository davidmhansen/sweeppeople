import styles from "./Header.module.scss";

import React, { useState, createContext } from "react";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";

import Navigation from "./Navigation/Navigation";

export const headerContext = createContext();

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <headerContext.Provider value={{ isActive, setIsActive }}>
      <nav className={styles.navigation}>
        <div className={styles.navigation__wrapper}>
          {isActive && (
            <style jsx global>{`
              body {
                position: fixed;
                overflow-y: scroll;
              }
            `}</style>
          )}
          <span
            onClick={() => {
              setIsActive(false);
            }}
            className={styles.navigation__logo}
          >
            <Link href="/">
              <span className={styles.logo__gray}>sweep</span>people
            </Link>
          </span>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.el}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>

            <div className={styles.label}>
              <motion.p
                variants={opacity}
                animate={!isActive ? "open" : "closed"}
              >
                Menu
              </motion.p>

              <motion.p
                variants={opacity}
                animate={isActive ? "open" : "closed"}
              >
                Close
              </motion.p>
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {isActive && <Navigation />}
        </AnimatePresence>
      </nav>
    </headerContext.Provider>
  );
}
