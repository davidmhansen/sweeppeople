import Hero from "@/components/Hero/Hero";
import styles from "./Legal-Notice.module.scss";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function LegalNotice() {
  const { t } = useTranslation("legal");
  return (
    <div className={styles.legal__wrapper}>
      <Hero title={t("title")}></Hero>
      <div className={styles.legal__container}>
        <h2>Angaben gemäß § 5 TMG</h2>
        <div className={styles.legal__block}>
          <div className={styles.block__item}>
            <span>sweeppeople GmbH</span>
            <span>Aurikelstraße 1</span>
            <span>82515 Wolfratshausen</span>
          </div>
          <div className={styles.block__item}>
            <span>Handelsregister: HRB 288488</span>
            <span>Registergericht: Amtsgericht München</span>
          </div>
          <div className={styles.block__item}>
            <h3>Vertreten durch:</h3>
            <span>Loic Kölbl</span>
            <span>Philipp Goodluck</span>
            <span>Maximilian Schmidt</span>
          </div>
        </div>
        <h2>Kontakt</h2>
        <div className={styles.block__item}>
          <span>Telefon: +49174/2374814</span>
          <span>
            E-Mail:{" "}
            <a href="mailto:hello@sweeppeople.com">hello@sweeppeople.com</a>
          </span>
        </div>
        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <div className={styles.block__item}>
          <span>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </span>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "common",
      "legal",
      "footer",
    ])),
  },
});
