import {Table,TableContainer,Box} from "@mui/material";
import DataTableFilter from "../components/DataTable/DataTableFilter";
import DataTableHeader from "../components/DataTable/DataTableHeader";
import DataTableBody from "../components/DataTable/DataTableBody";

const DataTable = () => {
  return (
    <>
      <DataTableFilter />
      <TableContainer>
        <Table>
          <DataTableHeader />
          <DataTableBody />
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
