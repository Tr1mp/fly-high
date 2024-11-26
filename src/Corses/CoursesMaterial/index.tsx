import PageWrapper from "../../com/shared/PageWrapper";
import React from "react";
import styles from "./styles.module.scss";

const CourseMaterial = () => {
  return (
    <PageWrapper header={{ title: "English", leftButton: true }}>
      <div className={styles.title}>Topic 1. Engineering in our Life.</div>
      <div className={styles.presentationWrapper}>
        <div className={styles.presentationMaterial}>Presentation</div>
      </div>

      <div className={styles.description}> Part 1</div>

      <div className={styles.partOneWrapper}>
        <div className={styles.partOneMaterial}>Tasks</div>
        <div className={styles.partOneMaterial}>Homework</div>
      </div>

      <div className={styles.description}> Part 2</div>
      <div className={styles.partOneWrapper}>
        <div className={styles.partOneMaterial}>Tasks</div>
        <div className={styles.partOneMaterial}>Homework</div>
      </div>

      <div className={styles.description}> Part 3</div>
      <div className={styles.partOneWrapper}>
        <div className={styles.partOneMaterial}>Tasks</div>
        <div className={styles.partOneMaterial}>Homework</div>
      </div>

      <div className={styles.atistation}>
        <div className={styles.atistationMaterial}>Final Task</div>
      </div>
    </PageWrapper>
  );
};

export default CourseMaterial;
