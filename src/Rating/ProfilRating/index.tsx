import PageWrapper from "../../com/shared/PageWrapper";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import styles from "./styles.module.scss";
import { Button, ButtonGroup } from "@mui/material";

const ProfileRating = () => {
  return (
    <PageWrapper header={{ title: "Student Profile", leftButton: true }}>
      <div className={styles.profile}>
        <div className={styles.name}>Akimov Egor Alexandrovich</div>

        <div className={styles.personBlock}>
          <AccountBoxIcon className={styles.personPhoto} />
          <div className={styles.personalData}>
            <div>Faculty: Institute of Aviation, Land Transport and Energy</div>
            <div>Group:1331</div>
          </div>
        </div>
        <div className={styles.progress}>
          <ButtonGroup
            disableElevation
            variant='contained'
            aria-label='Disabled button group'
          >
            <Button>Progress</Button>
            <Button>Grade</Button>
          </ButtonGroup>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProfileRating;
