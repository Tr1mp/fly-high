import React from "react";
import styles from "./styles.module.scss";
import PageWrapper from "../../com/shared/PageWrapper";
import { Link } from "react-router-dom";

const ChoosingCourse = () => {
  return (
    <PageWrapper header={{ title: "Choose Course", leftButton: true }}>
      <Link className={styles.lessons}>
        <Link className={styles.lesson} to={"/fly-high/course/choosingLesson"}>
          <div>English</div>
          <div className={styles.procent}>10%</div>
        </Link>
        <Link className={styles.lesson} to={"/fly-high/course/choosingLesson"}>
          <div>Aerodynamics</div>
          <div className={styles.procent}>10%</div>
        </Link>
        <Link className={styles.lesson} to={"/fly-high/course/choosingLesson"}>
          <div> Aviation Legislation</div>
          <div className={styles.procent}>10%</div>
        </Link>
        <Link className={styles.lesson} to={"/fly-high/course/choosingLesson"}>
          <div> Aircraft Construction Mechanics</div>
          <div className={styles.procent}>10%</div>
        </Link>
        <Link className={styles.lesson} to={"/fly-high/course/choosingLesson"}>
          <div> Aircraft Construction</div>
          <div className={styles.procent}>10%</div>
        </Link>
        <Link className={styles.lesson} to={"/fly-high/course/choosingLesson"}>
          <div> Electrical Engineering and Electronics</div>
          <div className={styles.procent}>10%</div>
        </Link>
      </Link>
    </PageWrapper>
  );
};

export default ChoosingCourse;
