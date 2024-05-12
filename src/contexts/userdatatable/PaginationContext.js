// PaginationContext.js
import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export const usePagination = () => useContext(PaginationContext);

export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedData, setSlicedData] = useState([]);

  const rowsPerPage = 5;

  const value = { currentPage, setCurrentPage, slicedData, setSlicedData,rowsPerPage };

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};
