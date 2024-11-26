import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PageWrapper from "../../../../com/shared/PageWrapper";

const SingleQuestions = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <PageWrapper
      header={{
        title: "Question 1",
        leftButton: <div>Time: 00:10:00</div>,
        rightButton: <div>Xp: 1</div>,
      }}
    >
      <div className={styles.title}>What is information technology?</div>
      <div className={styles.variantWrapper}>
        <FormControl>
          <RadioGroup
            className={styles.variant}
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='none'
            name='radio-buttons-group'
          >
            <FormControlLabel
              className={styles.radio}
              value='correct '
              control={<Radio />}
              label=' Information technology is a field of knowledge and practical skills related to the use of computers and software for the collection, processing, storage, transmission and analysis of information.'
            />
            <FormControlLabel
              className={styles.radio}
              value='nocorrect'
              control={<Radio />}
              label='Information technology is a field of knowledge and practical skills related to the use of tablets and phones to collect, process, store, transmit and analyze information.'
            />
            <FormControlLabel
              className={styles.radio}
              value='Nocorrect'
              control={<Radio />}
              label='I dont know'
            />
          </RadioGroup>
        </FormControl>
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

export default SingleQuestions;
