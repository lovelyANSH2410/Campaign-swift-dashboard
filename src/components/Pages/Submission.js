import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Button, Pagination } from "@mui/material";

function createData(id, Number, started, ended, doneby) {
  return { id, Number, started, ended, doneby };
}

const rows = [
    createData(1, 1, "18/09/2023 | 12:15:00 PM", "Submitted", "Manoj Jaiswal"),
    createData(2, 2, "18/09/2023 | 12:15:00 PM", "Revision", "Yogesh Jadhav"),
    createData(3, 3, "18/09/2023 | 12:15:00 PM", "Submitted", "Manoj Jaiswal"),
    createData(4, 4, "18/09/2023 | 12:15:00 PM", "Submitted", "Ramesh Kumar"),
    createData(5, 5, "18/09/2023 | 12:15:00 PM", "Revision", "Suresh Mehta"),
    createData(6, 6, "18/09/2023 | 12:15:00 PM", "Submitted", "Rahul Dravid"),
    createData(7, 7, "18/09/2023 | 12:15:00 PM", "Revision", "Sachin Tendulkar"),
    createData(8, 8, "18/09/2023 | 12:15:00 PM", "Submitted", "Manoj Jaiswal"),
    createData(9, 9, "18/09/2023 | 12:15:00 PM", "Revision", "Yogesh Jadhav"),
    createData(10, 10, "18/09/2023 | 12:15:00 PM", "Submitted", "Manoj Jaiswal"),
    createData(11, 11, "18/09/2023 | 12:15:00 PM", "Submitted", "Ramesh Kumar"),
    createData(12, 12, "18/09/2023 | 12:15:00 PM", "Revision", "Suresh Mehta"),
    createData(13, 13, "18/09/2023 | 12:15:00 PM", "Submitted", "Rahul Dravid"),
    createData(14, 14, "18/09/2023 | 12:15:00 PM", "Revision", "Sachin Tendulkar"),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E9EFF6",
    color: "#696B78",
    fontWeight: "bold",
    textAlign: "center",
    borderBottom: "2px solid #f0f0f0",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "white",
    color: "#7E84A3",
    fontSize: 14,
    textAlign: "center",
    borderBottom: "1px solid #f0f0f0",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FFFFFF",
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Submission() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Calculate the slice indices for the current page
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", borderBottom: ".5px solid #e0e0e0" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Submitted on</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Done by</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(startIndex, endIndex).map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell>{row.Number}</StyledTableCell>
                <StyledTableCell>{row.started}</StyledTableCell>
                <StyledTableCell>{row.ended}</StyledTableCell>
                <StyledTableCell>{row.doneby}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    sx={{
                      backgroundColor: "#E9EFF6",
                      color: "#131523",
                      fontWeight: "600",
                      textTransform: "none",
                      minWidth: "80px",
                    }}
                    variant="text"
                  >
                    View
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(rows.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
        color="primary"
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      />
    </>
  );
}
