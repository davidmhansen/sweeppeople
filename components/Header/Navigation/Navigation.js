import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import styles from "./Navigation.module.scss";
import Body from "./Body/Body";
import Image from "./Image/Image";

import { useTranslation } from "next-i18next";

const links = [
  {
    title: "About",
    href: "/about",
    src: "stage.jpg",
  },
  {
    title: "Service",
    href: "/service",
    src: "our-works-cta.jpg",
  },
  {
    title: "Projects",
    href: "/projects",
    src: "homepage-header.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "homepage-hollistic-approach.jpg",
  },
];

const Navigation = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  const { t } = useTranslation("common");

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links.map((link) => ({
              ...link,
              title: t(`navigation.` + link.title.toLowerCase()),
            }))}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
};

export default Navigation;
