import React, { useState } from "react";
import styles from "./styles.module.scss";
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import PageWrapper from "../../../../com/shared/PageWrapper";

const TextQuestions = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <PageWrapper
      header={{
        title: "Question 3",
        leftButton: <div>Time: 00:10:00</div>,
        rightButton: <div>Xp: 5</div>,
      }}
    >
      <div className={styles.title}>
        What is the purpose of information technology?
      </div>
      <div className={styles.variantWrapper}>
        <TextField
          className={styles.input}
          id='filled-multiline-flexible'
          label='Enter the answer'
          multiline
          maxRows={10}
          variant='filled'
        />
      </div>
      <div className={styles.buttonWrapper}>
        <LoadingButton
          className={loading ? styles.button : ""}
          onClick={handleClick}
          loading={loading}
          loadingPosition='end'
          variant='contained'
        >
          NEXT
        </LoadingButton>
      </div>
    </PageWrapper>
  );
};

export default TextQuestions;
