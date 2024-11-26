import React from "react";
import styles from "./sttyles.module.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TeacherLessons = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: " #1565c0",
      color: theme.palette.common.white,
    },

    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: theme.palette.common.white,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "rgb(68, 97, 199)",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "rgb(48, 72, 150)",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    lessons: string,
    done: number,
    all: number,
    successRate: number,
    executability: number
  ) {
    return { lessons, done, all, successRate, executability };
  }

  const rows = [
    createData("English", 0, 100, 0, 0),
    createData("German ", 0, 100, 0, 0),
  ];
  return (
    <div className={styles.choosingBlock}>
      <div className={styles.title}>CHOOSE A SUBJECT</div>
      <div className={styles.lessons}>
        <TableContainer component={Paper} className={styles.paper}>
          <Table sx={{ minWidth: 1000 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell className={styles.tableRow}>
                  Lesson
                </StyledTableCell>
                <StyledTableCell className={styles.tableRow} align='center'>
                  Done / Total
                </StyledTableCell>
                <StyledTableCell className={styles.tableRow} align='center'>
                  Success rate (%)
                </StyledTableCell>
                <StyledTableCell className={styles.tableRow} align='center'>
                  Executability (%)
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.lessons}>
                  <StyledTableCell component='th' scope='row'>
                    {row.lessons}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.done} / {row.all}{" "}
                  </StyledTableCell>

                  <StyledTableCell align='center'>
                    {row.successRate}
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    {row.executability}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default TeacherLessons;
