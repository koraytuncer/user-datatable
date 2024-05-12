import { Box, Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { useUsersData } from "../../contexts/userdatatable/UsersDataContext";
import { usePagination } from '../../contexts/userdatatable/PaginationContext';
import "../../styles/datatable/DataTableFooter.css";

const DataTableFooter = () => {
  const { users } = useUsersData();
  const { rowsPerPage,setCurrentPage,currentPage } = usePagination();


  const count = Math.ceil(users.length / rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box>
      <Pagination
         count={count}
         page={currentPage}
         onChange={handleChangePage}
         color="primary"
         shape="rounded"
         sx={{
          '.MuiPaginationItem-root': {
            fontFamily: 'Montserrat !important',
            fontSize: '14px !important',
            fontWeight: '600',
            color: '#E3E6EB', 
            '&:hover': {
              backgroundColor: '#cfcfcf',
            }
          },
          '.MuiPaginationItem-page.Mui-selected': {
            backgroundColor: 'var(--primary-color)',
            color: '#FFF !important',
          },
          '.MuiPaginationItem-icon': {
            color: '#82868C',
            fontSize: '1.75rem !important',
            '&:hover': {
              backgroundColor: '#cfcfcf',
            },
          }
        }}
      />
    </Box>

    
  );
};

export default DataTableFooter;
