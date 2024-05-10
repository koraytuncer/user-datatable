import { useUsers } from "../../contexts/UsersContext";
import { 
  TableHead, 
  TableRow, 
  TableCell, 
  Checkbox, 
  Typography,
  Box,
  TextField,
  InputAdornment
  } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CgSearch } from "react-icons/cg";
import "../../styles/datatable/DataTableHeader.css";

const DataTableHeader = () => {

  //Context'ten gelen verileri almak için useUsers hook'unu kullanıyoruz
  const { users, selectedUsers, setSelectedUsers } = useUsers();

  const toggleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]); // Tüm seçimleri kaldır
    } else {
      setSelectedUsers(users); // Tüm kullanıcıları seç
    }
  };
  

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
            sx={{ paddingRight: 3, border: "none" }}>
            <Box sx={{display:"flex",justifyContent:"end",alignItems:"center"}}>
            {selectedUsers.length > 0 && <Typography className="smallFont">{selectedUsers.length} selected</Typography>}
            <DeleteIcon className="deleteIcon" sx={{ color: selectedUsers.length > 0 ? "red" : "#82868c" }} />

            </Box>
          </TableCell>
        </TableRow>
        <TableRow sx={{ border: "none" }}>
          <TableCell padding="checkbox" className="datatableCell">
            <Checkbox 
            className="checkBox"  
            checked={selectedUsers.length === users.length}
            indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
            onChange={toggleSelectAll}
            />
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
