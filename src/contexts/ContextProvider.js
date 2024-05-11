import React from 'react';
import { UsersDataProvider } from './users/UsersDataContext';
import { UserSelectionProvider } from './users/UserSelectionContext';

const ContextProvider = ({ children }) => {
    return (
        <UsersDataProvider>
            <UserSelectionProvider>
                {children}
            </UserSelectionProvider>
        </UsersDataProvider>
    );
};

export default ContextProvider;
