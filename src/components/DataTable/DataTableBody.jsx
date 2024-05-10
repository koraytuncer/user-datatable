import { useUsers } from "../../contexts/UsersContext";
import {
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/datatable/DataTableBody.css";

const DataTableBody = () => {
  const { users,selectedUsers,setSelectedUsers } = useUsers();

  const handleCheckboxClick = (user) => {
    setSelectedUsers((prevUsers) =>
      selectedUsers.some((u) => u.id === user.id)
        ? prevUsers.filter((u) => u.id !== user.id)  // Eğer kullanıcı zaten seçiliyse, seçimini kaldır
        : [...prevUsers, user]  // Eğer kullanıcı henüz seçilmemişse, diziye ekle
    );
  };
  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell align="left" component="th" scope="user">
            <Checkbox
              className="checkBox"
              checked={selectedUsers.some((u) => u.id === user.id)}
              onClick={() => handleCheckboxClick(user)}
            />
          </TableCell>
          <TableCell align="left">
            <Avatar
              sx={{ height: 42, width: 42 }}
              variant="rounded"
              src={user.avatar}
            />
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
      ))}
    </TableBody>
  );
};

export default DataTableBody;
