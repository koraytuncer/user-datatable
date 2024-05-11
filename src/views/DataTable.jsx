import ContextProvider from '../contexts/ContextProvider';
import { Table, TableContainer } from "@mui/material";
import DataTableFilter from "../components/DataTable/DataTableFilter";
import DataTableHeader from "../components/DataTable/DataTableHeader";
import DataTableBody from "../components/DataTable/DataTableBody";

const DataTable = () => {
  return (
    <>
      <ContextProvider>
          <DataTableFilter />
          <TableContainer>
            <Table>
              <DataTableHeader />
              <DataTableBody />
            </Table>
          </TableContainer>
        </ContextProvider>
    </>
  );
};

export default DataTable;
