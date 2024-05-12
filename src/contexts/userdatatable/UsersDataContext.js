import React, { createContext, useState, useContext, useEffect } from "react";
import { fetchData } from "../../services/DataService";

const UsersDataContext = createContext();

export const useUsersData = () => useContext(UsersDataContext);

export const UsersDataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchData();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    loadUsers();
  }, []);

  const value = {
    users,
    setUsers,
    filteredUsers,
    setFilteredUsers,
    searchQuery,
    setSearchQuery
  };

  return (
    <UsersDataContext.Provider value={value}>
      {children}
    </UsersDataContext.Provider>
  );
};
