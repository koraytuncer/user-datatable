import React, { createContext, useState, useContext, useEffect } from 'react';
import { fetchData } from '../services/DataService';


const UsersContext = createContext();

export const useUsers = () => useContext(UsersContext);

export const UsersProvider = ({ children }) => {

    //Tüm kullanıcıları tutacak state
    const [users, setUsers] = useState([]);

    //Seçilen kullanıcıları tutacak state
    const [selectedUsers, setSelectedUsers] = useState([]);

    //Filtrelenmiş kullanıcıları tutacak state
    const [filteredUsers, setFilteredUsers] = useState([]);

    //Arama sorgusunu tutacak state
    const [searchQuery, setSearchQuery] = useState("");

    // Seçilen Role işlemi için kullanılacak state
    const [filterRole, setFilterRole] = useState("All Users");

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
        <UsersContext.Provider value={
            { users, setUsers, filteredUsers, setFilteredUsers, selectedUsers, setSelectedUsers, searchQuery, setSearchQuery, filterRole, setFilterRole }
        }>
            {children}
        </UsersContext.Provider>
    );
};