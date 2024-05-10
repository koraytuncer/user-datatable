import { TableHead, TableRow, TableCell, Checkbox, Typography,Box,TextField,InputAdornment,Button  } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CgSearch } from "react-icons/cg";
import "../../styles/datatable/DataTableHeader.css";

const DataTableHeader = () => {
  const headerItems = [
    { label: "Avatar", width: "50px" },
    { label: "Name", width: "250px" },
    { label: "Username", width: "250px" },
    { label: "Email", width: "250px" },
    { label: "Role", width: "150px" },
    { label: "Action", width: "auto" },
  ];
  return (
    <>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#FFFFFF", height: 94 }}>
          <TableCell
            align="left"
            colSpan={5}
            sx={{ paddingLeft: 3, border: "none" }}>
          <TextField
            variant="standard"
            placeholder="Search"
            fullWidth
            InputProps={{
              className: 'searchInput',
              disableUnderline: true, 
              startAdornment: (
                <InputAdornment position="start">
                  <CgSearch size={30} color="#82868C" />
                </InputAdornment>
              )
            }}
          />
          </TableCell>
          <TableCell
            align="right"
            colSpan={3}
            sx={{ paddingRight: 5, border: "none" }}>
            <Box sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>
            <DeleteIcon className="deleteIcon" />
           <Typography  className="smallFont">Delete</Typography>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow sx={{ border: "none" }}>
          <TableCell padding="checkbox" className="datatableCell">
            <Checkbox className="checkBox" />
          </TableCell>
          {headerItems.map(({ label, width }) => (
            <TableCell
              key={label}
              align="left"
              sx={{ width: width }}
              className="datatableCell">
              {label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default DataTableHeader;
