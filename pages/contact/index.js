import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "../anim";
import styles from "./Contact.module.scss";

import Hero from "@/components/Hero/Hero";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  const { t } = useTranslation("contact");
  return (
    <>
      <Head>
        <title>sweeppeople -- contact</title>
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
        <p className={styles.contact__paragraph}>{t("subtitle")}</p>
      </motion.div>
      <motion.div
        variants={reveal}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.contact__actions}
      >
        <span>
          <a href="mailto:hello@sweeppeople.com">hello@sweeppeople.com</a>
        </span>
        <span>(+49) 174-2374814</span>
      </motion.div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "contact",
      "common",
      "footer",
    ])),
  },
});
