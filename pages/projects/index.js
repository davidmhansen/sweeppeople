// generic
import { useState, useEffect } from "react";
import Head from "next/head";

// styles
import styles from "./Projects.module.scss";

// data
import projectData from "../../data/projects.json";

// translation
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// components
import Hero from "@/components/Hero/Hero";
import Project from "@/components/Project/Project";
import Modal from "@/components/Project/Modal/Modal";

// fixing data structure
const images = projectData.projects.map((obj) => {
  const { img } = obj;
  return img;
});

const noImages = projectData.projects.map((obj) => {
  const { img, ...rest } = obj;
  return rest;
});

const headers = Object.keys(noImages[0]);

const Projects = () => {
  const { t, i18n } = useTranslation("projects");
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <Head>
        <title>sweeppeople -- projects</title>
        <meta
          name="description"
          content="full service marketing and event management agency near munich - germany"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={t("h1")}></Hero>
      <div className={styles.body}>
        <div className={styles.project}>
          {headers.map((header, index) => (
            <div key={index}>
              <p>{header.toString().toUpperCase()}</p>
            </div>
          ))}
        </div>
        {projectData.projects.map((project, index) => (
          <Project
            key={index}
            project={project}
            index={index}
            setModal={setModal}
          ></Project>
        ))}
        <Modal modal={modal} images={images}></Modal>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", [
      "projects",
      "common",
      "footer",
    ])),
  },
});

export default Projects;
