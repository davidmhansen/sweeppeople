import { useState } from "react";

import styles from "./Item.module.scss";

export default function Item({ title, content, listItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.item}>
      <div onClick={toggleAccordion} className={styles.item__question}>
        <h3 className={styles.item__title}>{title}</h3>
        {!isOpen ? (
          <span className={styles.item__icon}>+</span>
        ) : (
          <span className={styles.item__icon}>-</span>
        )}
      </div>
      <div
        className={`${styles.item__answer} ${
          isOpen ? styles.item__answer_active : ""
        }`}
      >
        <div className={styles.copy__wrapper}>
          {content && content.map((item, index) => <p key={index}>{item}</p>)}
        </div>
        <div className={styles.item__wrapper}>
          {listItems &&
            listItems.map((item, index) => (
              <div key={index} className={styles.item__container}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <ul>
                  {item.list &&
                    item.list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              </div>
            ))}
        </div>

        <div className={styles.item__answer_footer}>
          <p>
            Any projects in mind?{" "}
            <a
              className={styles.item__answer_cta}
              href="mailto:hello@sweeppeople.com"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
