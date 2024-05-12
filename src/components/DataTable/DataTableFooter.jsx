import  { useState } from "react";
import { Box, Pagination } from "@mui/material";
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
      />
    </Box>
  );
};

export default DataTableFooter;
