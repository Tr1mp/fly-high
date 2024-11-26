import React, { useState } from "react";
import styles from "./styles.module.scss";
import { LoadingButton } from "@mui/lab";
import PageWrapper from "../../com/shared/PageWrapper";
import { Link } from "react-router-dom";

const LessonsInstruction = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <PageWrapper header={{ title: " Lesson 1", leftButton: true }}>
      <div className={styles.topicsWrapper}>
        <div
          className={styles.topic}
          //   to={"/course/choosingLesson/choosingTopic"}
        >
          <div className={styles.card}>
            <div>Topic: Information technology</div>
            <div>Maximum points: 10</div>
            <div>Number of questions: 20</div>
            <div>Time limit: 30 minutes</div>
            <div className={styles.buttonWrapper}>
              <LoadingButton
                className={isLoading ? styles.button : ""}
                onClick={handleClick}
                loading={isLoading}
                loadingPosition='end'
                variant='contained'
                href={"/lesson/instruction/questions"}
              >
                START
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

console.log(typeof NaN);

export default LessonsInstruction;
