import PageWrapper from "../../com/shared/PageWrapper";
import React from "react";
import styles from "./styles.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";

const CourseTitle = () => {
  return (
    <PageWrapper header={{ title: "English", leftButton: true }}>
      <div className={styles.topicsWrapper}>
        <Link
          className={styles.topic}
          to={"/fly-high/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.lessonName}>Topic 1</div>
          <div className={styles.card}>
            Engineering in our Life
            <div className={styles.line}>
              <div className={styles.progressLine}></div>
            </div>
          </div>
        </Link>

        <Link
          className={styles.topic}
          to={"/fly-high/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.lessonName}>Topic 2</div>
          <div className={styles.card}>
            Types of Engineering
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link
          className={styles.topic}
          to={"/fly-high/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.lessonName}>Topic 3</div>
          <div className={styles.card}>
            Making the right choice
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>{" "}
          </div>
        </Link>

        <Link
          className={styles.topic}
          to={"/fly-high/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.lessonName}>Topic 4</div>
          <div className={styles.card}>
            Materials and their properties
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link
          className={styles.topic}
          to={"/fly-high/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.lessonName}>Topic 5</div>
          <div className={styles.card}>
            Smart materials
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>

        <Link
          className={styles.topic}
          to={"/fly-high/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.lessonName}>Topic 6</div>
          <div className={styles.card}>
            Technical drawing
            <div className={styles.line}>
              <div className={styles.progressLine2}></div>
            </div>
          </div>
        </Link>
      </div>
    </PageWrapper>
  );
};

export default CourseTitle;
