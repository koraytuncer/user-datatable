import React, { createContext, useState, useContext, useEffect } from 'react';
import {fetchData} from '../services/DataService';


const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchData();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        loadUsers();
    }, []);

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};