import { UsersProvider } from "../contexts/UsersContext";
import {Table,TableContainer} from "@mui/material";
import DataTableFilter from "../components/DataTable/DataTableFilter";
import DataTableHeader from "../components/DataTable/DataTableHeader";
import DataTableBody from "../components/DataTable/DataTableBody";

const DataTable = () => {
  return (
    <>
    <UsersProvider>
      <DataTableFilter />
      <TableContainer>
        <Table>
          <DataTableHeader />
          <DataTableBody />
        </Table>
      </TableContainer>
      </UsersProvider>
    </>
  );
};

export default DataTable;
