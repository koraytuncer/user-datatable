import React from "react";
import {TableBody,TableCell,Checkbox,Avatar} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import "../../styles/datatable/DataTableBody.css";


const DataTableBody = () => {
  return (
    <>
      <TableBody>
        <TableCell align="left">
          <Checkbox className="checkBox" />
        </TableCell>
        <TableCell align="left" sx={{fontWeight:600}}>
        <Avatar sx={{ height: 42, width:42 }} variant="rounded">
      </Avatar>
        </TableCell>
        <TableCell align="left">qweqw</TableCell>
        <TableCell align="left">qweqw</TableCell>
        <TableCell align="left">qweqw</TableCell>
        <TableCell align="left">qweqwe</TableCell>
        <TableCell align="left">
            <EditIcon className="actionIcon"  />
            <DeleteIcon className="actionIcon" />
        </TableCell>
      </TableBody>
    </>
  );
};

export default DataTableBody;
