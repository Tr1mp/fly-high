import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import PageWrapper from "../../com/shared/PageWrapper";

const ChoosingLesson = () => {
  return (
    <PageWrapper header={{ title: "Assessment of knowledge" }}>
      <div className={styles.topicsWrapper}>
        <Link className={styles.topic} to={"/lesson/instruction"}>
          <div className={styles.lessonName}>20/25</div>
          <div className={styles.card}>
            English
            <div className={styles.line}>
              <div className={styles.progressLine}></div>
            </div>
          </div>
        </Link>

        <Link className={styles.topic} to={"/lesson/instruction"}>
          <div className={styles.lessonName}>0/25</div>
          <div className={styles.card}>
            Aerodynamics
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link className={styles.topic} to={"/lesson/instruction"}>
          <div className={styles.lessonName}>0/25</div>
          <div className={styles.card}>
            Aviation Legislation
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link className={styles.topic} to={"/lesson/instruction"}>
          <div className={styles.lessonName}>0/25</div>
          <div className={styles.card}>
            Aircraft Construction Mechanics
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link className={styles.topic} to={"/lesson/instruction"}>
          <div className={styles.lessonName}>0/25</div>
          <div className={styles.card}>
            Aircraft Construction
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link className={styles.topic} to={"/lesson/instruction"}>
          <div className={styles.lessonName}>0/25</div>
          <div className={styles.card}>
            Electrical Engineering and Electronics
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default ChoosingLesson;
