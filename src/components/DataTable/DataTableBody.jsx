import React from 'react';
import { useUsers } from "../../contexts/UsersContext";
import {
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Avatar,
  Typography
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/datatable/DataTableBody.css";

const DataTableBody = () => {
  const { 
    users,
    selectedUsers,
    setSelectedUsers,
    filteredUsers,
    searchQuery
  } = useUsers();

  const handleCheckboxClick = (user) => {
    setSelectedUsers((prevUsers) =>
      selectedUsers.some((u) => u.id === user.id) // Kullanıcı zaten seçili mi?
        ? prevUsers.filter((u) => u.id !== user.id)  // Eğer kullanıcı zaten seçiliyse, seçimini kaldır
        : [...prevUsers, user]  // Eğer kullanıcı henüz seçilmemişse, diziye ekle
    );
  };

  // Arama sorgusu girilmişse filtrelenmiş veriyi, girilmemişse tüm veriyi göster
  const dataToShow = searchQuery.length > 0 ? filteredUsers : users;

  return (
    <TableBody>
      {dataToShow.length > 0 ? (
        dataToShow.map((user) => (
          <TableRow key={user.id}>
            <TableCell align="left" component="th" scope="user">
              <Checkbox
                className="checkBox"
                checked={selectedUsers.some((u) => u.id === user.id)}
                onClick={() => handleCheckboxClick(user)}
              />
            </TableCell>
            <TableCell align="left">
              <Avatar sx={{ height: 42, width: 42 }} variant="rounded" src={user.avatar} />
            </TableCell>
            <TableCell align="left">{user.name}</TableCell>
            <TableCell align="left">{user.username}</TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <TableCell align="left">{user.roles}</TableCell>
            <TableCell align="left">
              <EditIcon className="actionIcon" />
              <DeleteIcon className="actionIcon" />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={7} align="center">
            <Typography variant="subtitle1" style={{ marginTop: 16, marginBottom: 16 }}>
              Kullanıcı bulunamamıştır.
            </Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DataTableBody;
