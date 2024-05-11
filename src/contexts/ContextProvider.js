import React from 'react';
import { UsersDataProvider } from './users/UsersDataContext';
import { UserSelectionProvider } from './users/UserSelectionContext';
import { ModalProvider } from './modal/ModalContext';

const ContextProvider = ({ children }) => {
    return (

            <UsersDataProvider>
                <UserSelectionProvider>
                <ModalProvider>
                    {children}
                    </ModalProvider>
                </UserSelectionProvider>
            </UsersDataProvider>

    );
};

export default ContextProvider;
