import React from "react";
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
  const { users } = useUsers();

  return (
    <TableBody>
      {users.map((user) => (
        <TableRow key={user.id}>
          <TableCell align="left" component="th" scope="user">
            <Checkbox className="checkBox" />
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
