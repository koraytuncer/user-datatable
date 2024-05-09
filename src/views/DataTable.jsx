import React from "react";
import {Table,TableContainer} from "@mui/material";
import DataTableFilter from "../components/DataTable/DataTableFilter";
import DataTableHeader from "../components/DataTable/DataTableHeader";
import DataTableBody from "../components/DataTable/DataTableBody";

const DataTable = () => {
  return (
    <React.Fragment>
      <DataTableFilter />
      <TableContainer>
        <Table>
          <DataTableHeader />
          <DataTableBody />
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default DataTable;
