import Head from "next/head";
import styles from "./Service.module.scss";

// Components
import Hero from "@/components/Hero/Hero";
import Accordion from "@/components/Accordion/Accordion";
import CTA from "@/components/CTA/CTA";

// Animations
import { reveal } from "../../components/Hero/anim";
import { motion } from "framer-motion";

// Data
import accordionData from "../../data/accordion.json";

// Translation
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Service() {
  const { t } = useTranslation("service");
  return (
    <>
      <Head>
        <title>sweeppeople -- service</title>
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
        className={styles.content__wrapper}
      >
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <p className={styles.copy}>
          Aus diesem Grund konzentrieren wir uns darauf, zuzuhören und
          maßgeschneiderte Lösungen anzubieten, die wirklich zu den
          individuellen Bedürfnissen unserer Kunden passen. Mit einem tiefen
          Verständnis für unternehmerische Herausforderungen und einem reichen
          Erfahrungsschatz, streben wir danach, Ihr Projekt mit Kreativität und
          strategischem Denken & harter Arbeit zu unterstützen. Ob vor Ort oder
          weltweit, wir sind hier, um Sie zu begleiten und gemeinsam mit Ihnen
          Wege zu entdecken, die Ihr Unternehmen voranbringen. Lassen Sie uns
          gemeinsam herausfinden, wie wir Ihre Vision zum Leben erwecken können.
        </p>
      </motion.div>
      <motion.section
        variants={reveal}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.sitegrid}
      >
        <Accordion accordionData={accordionData}></Accordion>
      </motion.section>
      <CTA
        title={"Our Works"}
        comingSoon={true}
        imageURL={"our-works-cta.jpg"}
        alt={"test alt tag"}
      ></CTA>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "common",
      "service",
      "footer",
    ])),
  },
});
