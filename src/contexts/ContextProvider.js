import React from "react";
import { UsersDataProvider } from "./userdatatable/UsersDataContext";
import { UserSelectionProvider } from "./userdatatable/UserSelectionContext";
import { PaginationProvider } from "./userdatatable/PaginationContext";
import { ModalProvider } from "./modal/ModalContext";

const ContextProvider = ({ children }) => {
  return (
    <UsersDataProvider>
      <UserSelectionProvider>
        <PaginationProvider>
            <ModalProvider>
                {children}
            </ModalProvider>
        </PaginationProvider>
      </UserSelectionProvider>
    </UsersDataProvider>
  );
};

export default ContextProvider;
