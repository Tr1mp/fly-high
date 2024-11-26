import React from "react";
import styles from "./styles.module.scss";
import Icon from "@mui/material/Icon";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

import { Button, getSelectUtilityClasses } from "@mui/material";
import PageWrapper from "../com/shared/PageWrapper";

const ChoosingLessonTeacher = () => {
  return (
    <PageWrapper
      header={{
        title: "English",
        leftButton: true,
        rightButton: (
          <Button
            className={styles.buttonAdd}
            variant='contained'
            startIcon={<Icon>add_circle</Icon>}
          >
            Add
          </Button>
        ),
      }}
    >
      <div>Choosing test</div>

      <div className={styles.list}></div>
    </PageWrapper>
  );
};

export default ChoosingLessonTeacher;
