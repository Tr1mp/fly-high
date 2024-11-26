import PageWrapper from "../../com/shared/PageWrapper";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, ButtonGroup } from "@mui/material";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const AllRaiting = () => {
  return (
    <PageWrapper
      header={{
        title: "Leaderboard",
        leftButton: true,
        rightButton: (
          <div className={styles.rightSection}>
            <ButtonGroup
              disableElevation
              variant='contained'
              aria-label='Disabled button group'
            >
              <Button>Group</Button>
              <Button>Faculty</Button>
              <Button>Institute</Button>
            </ButtonGroup>
            <Button variant='contained'>
              <SearchIcon />
            </Button>
          </div>
        ),
      }}
    >
      <div>
        <div className={styles.leaders}>
          <Link to={"/rating/personRating"}>1.Akimov Egor</Link>
        </div>
        <div className={styles.leaders}>2.Varichev Georgy</div>
        <div className={styles.leaders}>3.Gayed Martin</div>
        <div className={styles.leaders}>4.Anastasia Gudkova</div>
      </div>
    </PageWrapper>
  );
};

export default AllRaiting;
