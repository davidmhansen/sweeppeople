import styles from "./CTA.module.scss";

import { useRef } from "react";
import { useInView } from "framer-motion";

import Image from "next/image";

// Translation
import { useTranslation } from "next-i18next";

export default function CTA({ title, imageURL, alt, comingSoon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation("common");
  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.76, 0, 0.24, 1) 0.3s",
        }}
        className={styles.cta}
      >
        <Image
          src={`/images/` + imageURL}
          width={0}
          height={0}
          sizes="100vw"
          alt={alt}
          style={{ width: "100%", height: "auto" }}
        />
        <div className={styles.cta__wrapper}>
          <span className={styles.cta__title}>{title.toUpperCase()}</span>
          {comingSoon && (
            <span className={styles.cta__info}>{t("cta.subtitle")}</span>
          )}
        </div>
      </div>
    </section>
  );
}
