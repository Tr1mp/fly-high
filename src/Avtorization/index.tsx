import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import LoadingButton from "@mui/lab/LoadingButton";
import PageWrapper from "../com/shared/PageWrapper";

const Avtorization = () => {
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };

  return (
    <PageWrapper>
      <div className={styles.text}>LOG IN</div>
      <div className={styles.inputs}>
        <TextField
          className={styles.loginAndPassword}
          id='login'
          label='Login'
          variant='standard'
          name='login'
        />
        <TextField
          className={styles.loginAndPassword}
          id='password'
          label='Password'
          variant='standard'
          name='password'
        />
      </div>

      <div className={styles.checkbox}>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label='Remember me'
        />
      </div>
      <div className={styles.login}>
        <LoadingButton
          href='/course'
          className={loading ? styles.button : ""}
          onClick={handleClick}
          loading={loading}
          loadingPosition='end'
          variant='contained'
        >
          START
        </LoadingButton>
      </div>
    </PageWrapper>
  );
};

export default Avtorization;
