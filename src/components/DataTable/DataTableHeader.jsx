import { TableHead, TableRow, TableCell, Checkbox, Typography,Box } from "@mui/material";
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
            sx={{ paddingLeft: 3, border: "none" }}
          >
            <CgSearch size={32} color="#82868C" />
          </TableCell>
          <TableCell
            align="right"
            colSpan={3}
            sx={{ paddingRight: 4, border: "none" }}
          >
            <Box sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>
            <DeleteIcon className="actionIcon" />
           <Typography className="actionText" sx={{fontSize:12,fontWeight:600, fontFamily:"Montserrat"}}>Delete</Typography>
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
              className="datatableCell"
            >
              {label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default DataTableHeader;
