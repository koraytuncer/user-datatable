import React, { createContext, useContext, useState } from 'react';

const UserSelectionContext = createContext();

export const useUserSelection = () => useContext(UserSelectionContext);

export const UserSelectionProvider = ({ children }) => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [filterRole, setFilterRole] = useState("All Users");

    return (
        <UserSelectionContext.Provider value={{
            selectedUsers, setSelectedUsers, filterRole, setFilterRole
        }}>
            {children}
        </UserSelectionContext.Provider>
    );
};
