import ContextProvider from '../contexts/ContextProvider';
import { Table, TableContainer } from "@mui/material";
import DataTableFilter from "../components/datatable/DataTableFilter";
import DataTableHeader from "../components/datatable/DataTableHeader";
import DataTableBody from "../components/datatable/DataTableBody";
import DataTableFooter from '../components/datatable/DataTableFooter';


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
            <DataTableFooter />
          </TableContainer>
        </ContextProvider>
    </>
  );
};

export default DataTable;
