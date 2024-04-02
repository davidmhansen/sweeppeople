import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useInView } from "framer-motion";

// CSS
import styles from "./Home.module.scss";

// Components
import Hero from "@/components/Hero/Hero";
import CTA from "@/components/CTA/CTA";

// Translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation("home");
  return (
    <>
      <Head>
        <title>sweeppeople -- homepage</title>
        <meta
          name="description"
          content="full service marketing and event management agency near munich - germany"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero
          title="HUMAN STORIES. SUPERHUMAN BRANDS."
          subtitle={t("subtitle")}
          imageURL="compressed-header-green.jpg"
        ></Hero>
        <div ref={ref}>
          <section className={styles.section__1}>
            <div
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.76, 0, 0.24, 1) 0.3s",
              }}
              className={styles.section__wrapper}
            >
              <div className={styles.section}>
                <h2 className={styles.section__title}>
                  {t("sectionOne.title")}
                </h2>
                <p className={styles.section__copy}>{t("sectionOne.para")}</p>
              </div>
              <div className={styles.section__content}>
                <h3 className={styles.section__content_title}>
                  {t("sectionOne.subtitle")}
                </h3>
                <p className={styles.section__content_copy}>
                  {t("sectionOne.copy")}
                </p>
              </div>
            </div>
            <div className={styles.section__image_wrapper}>
              <Image
                src="/images/stage.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="Picture of the author"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </section>
          <section className={styles.section__2}>
            <div
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.76, 0, 0.24, 1) 0.3s",
              }}
              className={styles.section__wrapper}
            >
              <div className={styles.section}>
                <h2 className={styles.section__title}>
                  {t("sectionTwo.title")}
                </h2>
              </div>
              <div className={styles.section__content}>
                <h3 className={styles.section__content_title}>
                  {t("sectionTwo.subtitle")}
                </h3>
                <div className={styles.section__copy_wrapper}>
                  <p>{t("sectionTwo.leading")}</p>
                  <p className={styles.section__content_copy}>
                    {t("sectionTwo.copy.first")}
                  </p>
                  <p>{t("sectionTwo.copy.second")}</p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.sitegrid}>
            <div className={styles.section__image_wrapper}>
              <Image
                src="/images/compressed.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt="Picture of the author"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </section>
          <section className={styles.section__3}>
            <div
              style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.76, 0, 0.24, 1) 0.3s",
              }}
              className={styles.section__wrapper}
            >
              <div className={styles.section}>
                <h2 className={styles.section__title}>
                  {t("sectionThree.title")}
                </h2>
              </div>
              <div className={styles.section__content}>
                <div className={styles.section__copy_wrapper}>
                  <p className={styles.section__content_copy}>
                    {t("sectionThree.copy.first")}
                  </p>
                  <p>{t("sectionThree.copy.second")}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <CTA
          title={"Our Works"}
          comingSoon={true}
          imageURL={"our-works-cta.jpg"}
          alt={"test alt tag"}
        ></CTA>
      </main>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "home",
      "projects",
      "common",
      "footer",
    ])),
  },
});
