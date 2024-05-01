import styles from "./Table.module.scss";
import { useState } from "react";
import { reveal } from "../Hero/anim";
import { motion } from "framer-motion";
import projectData from "../../data/projects.json";

import Project from "../Project/Project";
import Modal from "../Project/Modal/Modal";

const images = projectData.projects.map((proj) => {
  const { img } = proj;
  return img;
});

const projectsWithoutImages = projectData.projects.map((obj) => {
  const { img, ...rest } = obj;
  return rest;
});

export default function Table({ projectData }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const headers = Object.keys(projectsWithoutImages[0]);
  return (
    <motion.div
      variants={reveal}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.table}
    >
      <div className={styles.container}>
        <div className={styles.projects}>
          <div className={styles.project}>
            {headers.map((header) => (
              <div key={header} className={`${styles.test}`}>
                <p>{header.toUpperCase()}</p>
              </div>
            ))}
          </div>
          {projectsWithoutImages.map((project, index) => (
            <Project
              key={index}
              project={project}
              index={index}
              setModal={setModal}
            ></Project>
          ))}
          <Modal modal={modal} images={images}></Modal>
        </div>
      </div>
    </motion.div>
  );
}
