import React, { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Body.module.scss";
import { blur, translate } from "../../anim";
import { headerContext } from "../../Header";

export default function Body({ links, selectedLink, setSelectedLink }) {
  const { setIsActive } = useContext(headerContext);
  // const getChars = (word) => {
  //   let chars = [];
  //   word.split("").forEach((char, i) => {
  //     if (char.trim() === " ") {
  //       chars.push(" ");
  //     } else {
  //       chars.push(
  //         <motion.span
  //           custom={[i * 0.02, (word.length - i) * 0.01]}
  //           variants={translate}
  //           initial="initial"
  //           animate="enter"
  //           exit="exit"
  //           key={char + i}
  //         >
  //           {char}
  //         </motion.span>
  //       );
  //     }
  //   });
  //   return chars;
  // };

  const getChars = (word) => {
    let chars = [];
    let wordArray = word.split(""); // Split by each character
    wordArray.forEach((char, i) => {
      if (char.trim() === "") {
        chars.push(<span className={styles.empty}> </span>); // Preserve empty space
      } else {
        chars.push(
          <motion.span
            custom={[i * 0.02, (wordArray.length - i) * 0.01]}
            variants={translate}
            initial="initial"
            animate="enter"
            exit="exit"
            key={char + i}
          >
            {char}
          </motion.span>
        );
      }
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              onClick={() => {
                setIsActive(false);
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
              className={styles.p}
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
