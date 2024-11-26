import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { LoadingButton } from "@mui/lab";
import styles from "./styles.module.scss";
import { FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import PageWrapper from "../../../../com/shared/PageWrapper";

const MultiQuestions = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <PageWrapper
      header={{
        title: "Question 2 ",
        leftButton: <div>Time: 00:10:00</div>,
        rightButton: <div>Xp: 2</div>,
      }}
    >
      <div className={styles.title}>
        What means are used for information technology?
      </div>
      <div className={styles.variantWrapper}>
        <FormLabel component='legend' className={styles.howMach}>
          (You can choose one or more correct answers)
        </FormLabel>
        <FormGroup className={styles.checkbox}>
          <FormControlLabel
            className={styles.variant}
            control={<Checkbox />}
            label='Software and technical'
          />
          <FormControlLabel
            className={styles.variant}
            control={<Checkbox />}
            label='Phone numbers'
          />
          <FormControlLabel
            className={styles.variant}
            control={<Checkbox />}
            label='Technological'
          />
          <FormControlLabel
            control={<Checkbox />}
            className={styles.variant}
            label='All of the above answers'
          />
        </FormGroup>
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

export default MultiQuestions;
