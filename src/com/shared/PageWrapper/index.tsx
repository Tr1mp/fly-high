import React from "react";
import PageHeader, { PageHeaderProps } from "../PageHeader";
import styles from "./styles.module.scss";

interface Props {
  header?: PageHeaderProps;
  children: JSX.Element | JSX.Element[];
}

const PageWrapper: React.FC<Props> = (props) => {
  const { header, children } = props;

  return (
    <div className={styles.pageWrapper}>
      {header && (
        <PageHeader
          title={header.title}
          leftButton={header.leftButton}
          rightButton={header.rightButton}
        />
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
