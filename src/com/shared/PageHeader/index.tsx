import { Button } from "@mui/material";
import React from "react";
import styles from "./styles.module.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export interface PageHeaderProps {
  title: string | JSX.Element;
  leftButton?: boolean | JSX.Element;
  rightButton?: JSX.Element;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const navigate = useNavigate();
  const { title, leftButton = false, rightButton } = props;
  return (
    <div className={styles.title}>
      <div className={styles.item}>
        {typeof leftButton === "boolean"
          ? leftButton && (
              <Button
                onClick={() => navigate(-1)}
                className={styles.buttonBack}
                variant='outlined'
                startIcon={<ArrowBackIosNewIcon>back_icon</ArrowBackIosNewIcon>}
              >
                Back
              </Button>
            )
          : leftButton}
      </div>

      <div className={styles.titleWrapper}> {title} </div>

      <div className={styles.item}> {rightButton}</div>
    </div>
  );
};

export default PageHeader;
