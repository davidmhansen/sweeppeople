import Head from "next/head";
import Image from "next/image";
import styles from "./About.module.scss";
import { motion } from "framer-motion";
import { reveal } from "../anim";

import Hero from "@/components/Hero/Hero";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("about");
  return (
    <>
      <Head>
        <title>sweeppeople -- about</title>
        <meta
          name="description"
          content="full service marketing and event management agency near munich - germany"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={t("title")}></Hero>
      <motion.div
        variants={reveal}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <p className={styles.about__paragraph}>{t("subtitle")}</p>
      </motion.div>
      <motion.div
        variants={reveal}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.section__image_wrapper}
      >
        <Image
          src="/images/about-us.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Picture of the author"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "about",
      "common",
      "footer",
    ])),
  },
});
