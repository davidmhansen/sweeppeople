import styles from "./Hero.module.scss";
import { staggerWordReveal, reveal } from "./anim";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ title, subtitle, imageURL }) {
  const getWords = (sentence) => {
    let words = [];
    sentence.split(" ").forEach((word, i) => {
      words.push(
        <motion.span
          custom={[i * 0.04, (word.length - i) * 0.01]}
          variants={staggerWordReveal}
          initial="initial"
          animate="enter"
          exit="exit"
          key={word + i}
        >
          {word}
        </motion.span>
      );
    });
    return words;
  };
  return (
    <section className={styles.hero}>
      <motion.h1 className={styles.hero__heading}>{getWords(title)}</motion.h1>

      {subtitle && (
        <motion.div
          variants={reveal}
          initial="initial"
          animate="enter"
          exit="exit"
          className={styles.subtitle__wrapper}
        >
          <motion.span className={styles.hero__subtitle}>
            {subtitle}
          </motion.span>
        </motion.div>
      )}

      {imageURL && (
        <motion.div
          variants={reveal}
          initial="initial"
          animate="enter"
          exit="exit"
          className={styles.hero__image_wrapper}
        >
          <Image
            src={`/images/` + imageURL}
            width={0}
            height={0}
            sizes="100vw"
            alt="Picture of the author"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      )}
    </section>
  );
}
