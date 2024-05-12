import React from 'react';
import { UsersDataProvider } from './userdatatable/UsersDataContext';
import { UserSelectionProvider } from './userdatatable/UserSelectionContext';
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
