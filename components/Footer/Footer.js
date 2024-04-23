import { useRef } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";

import { motion, useInView } from "framer-motion";

import { useTranslation } from "next-i18next";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const currentDate = new Date().getFullYear();

  const { t } = useTranslation("footer");

  return (
    <footer ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.76, 0, 0.24, 1) 0.3s",
        }}
        className={styles.footer}
      >
        <div className={styles.footer__contact}>
          <div className={styles.footer__contact_copy}>
            <p>{t("title")}</p>
            <p>{t("claim")}</p>
          </div>
          <a
            className={styles.footer__contact_mail}
            href="mailto:hello@sweeppeople.com"
          >
            hello@sweeppeople.com
          </a>
        </div>
        <div className={styles.footer__links}>
          <div className={styles.footer__links_wrapper}>
            <span className={styles.footer__links_title}>Sitemap</span>
            <ul className={styles.footer__links_list}>
              <li className={styles.links__list_item}>
                <Link href="/">{t("nav.sitemap.home")}</Link>
              </li>
              <li className={styles.links__list_item}>
                <Link href="/service">{t("nav.sitemap.service")}</Link>
              </li>
              {/* <li className="footer__links-list--item"><a href="#">Projects</a></li> */}
              <li className={styles.links__list_item}>
                <Link href="/about">{t("nav.sitemap.about")}</Link>
              </li>
              <li className={styles.links__list_item}>
                <Link href="/contact">{t("nav.sitemap.contact")}</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__links_wrapper}>
            <span className={styles.footer__links_title}>Socials</span>
            <ul className={styles.footer__links_list}>
              <li className={styles.links__list_item}>
                <a href="https://www.instagram.com/sweep.people/">Instagram</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__links_wrapper}>
            <span className={styles.footer__links_title}>Tickets</span>
            <ul className={styles.footer__links_list}>
              <li className={styles.links__list_item}>
                <a href="https://eventix.shop/qf8vzrqb">Eventix</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__links_wrapper}>
            <span className={styles.footer__links_title}>
              {t("nav.legal.title")}
            </span>
            <ul className={styles.footer__links_list}>
              <li className={styles.links__list_item}>
                <Link href="/privacy-policy/">{t("nav.legal.privacy")}</Link>
              </li>
              <li className={styles.links__list_item}>
                <Link href="/legal-notice/">{t("nav.legal.notice")}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__company_wrapper}>
          <span className={styles.footer__company_logo}>
            <span className={styles.logo__gray}>Sweep</span>people
          </span>
          <p className={styles.footer__company_copyright}>
            Copyright @ sweeppeople // {currentDate.toString()}
          </p>
        </div>
      </div>
    </footer>
  );
}
