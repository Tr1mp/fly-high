import { NavLink } from "react-router-dom";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./styles.module.scss";
import { Button, ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const buttonList = [
  { href: "/course", text: "Courses" },
  { href: "/lesson", text: "Tests" },
  { href: "/rating", text: "Rating" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>FLY HIGH</h1>
      <div className={styles.navLink}>
        <ButtonGroup
          disableElevation
          variant='contained'
          aria-label='Disabled button group'
          className={styles.button}
        >
          {buttonList.map((el) => {
            return (
              <Link
                className={location.pathname === el.href ? styles.link : ""}
                to={el.href}
              >
                {el.text}
              </Link>
            );
          })}
        </ButtonGroup>
      </div>
      <div className={styles.profile}>
        <Link to={"/fly-high/profile"} className={styles.avatar}>
          <Stack direction='row' spacing={1}>
            <Avatar alt='Ivanov Ivn' src='/static/images/avatar/1.jpg' />
          </Stack>
          Ivanov Ivan
        </Link>
      </div>
    </div>
  );
};

export default Header;
