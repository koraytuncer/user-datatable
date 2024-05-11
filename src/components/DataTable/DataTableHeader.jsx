import { useUsersData } from "../../contexts/users/UsersDataContext";
import { useUserSelection } from "../../contexts/users/UserSelectionContext";
import {
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  Box,
  TextField,
  InputAdornment,
  Badge,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CgSearch } from "react-icons/cg";
import "../../styles/datatable/DataTableHeader.css";

const DataTableHeader = () => {
  //Context'ten gelen verileri almak için kullanılır
  const { users, filteredUsers, searchQuery,setSearchQuery,setFilteredUsers } = useUsersData();
  const { selectedUsers, setSelectedUsers,filterRole } = useUserSelection();


    const handleSearchChange = (event) => {
      const value = event.target.value.trim();
      setSearchQuery(value);
    
      if (value) {
        const lowercasedFilter = value.toLowerCase();
        const activeList = filteredUsers.length > 0 ? filteredUsers : users;  // Aktif liste hangisiyse onu kullan
        const searchFilteredData = activeList.filter(
          user => user.username.toLowerCase().includes(lowercasedFilter) ||
                  user.email.toLowerCase().includes(lowercasedFilter)
        );
        setFilteredUsers(searchFilteredData);  // Arama sonucuna göre filtrele
      } else {
        // Arama kutusu boşaltıldığında ve bir filtre uygulanmışsa (filtrelenmiş kullanıcılar varsa)
        if (filteredUsers.length > 0 && searchQuery) {
          setFilteredUsers(users.filter(user => user.roles === filterRole)); // Önceki filtre durumuna geri dön
        }
      }
    };
    
    

  const toggleSelectAll = () => {
    const currentList = filteredUsers.length > 0 ? filteredUsers : users; // Arama yapıldıysa filteredUsers, yoksa users kullanılacak
    if (selectedUsers.length === currentList.length) {
      setSelectedUsers([]); // Eğer şu anki liste tamamen seçiliyse, tüm seçimleri kaldır
    } else {
      setSelectedUsers(currentList); // Eğer tamamen seçili değilse, şu anki listeyi tamamen seç
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
            sx={{ paddingLeft: 3, border: "none" }}
          >
            <TextField
              variant="standard"
              placeholder="Search"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                className: "searchInput",
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <CgSearch size={30} color="#82868C" />
                  </InputAdornment>
                ),
              }}
            />
          </TableCell>
          <TableCell
            align="right"
            colSpan={3}
            sx={{ paddingRight: 3, border: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Badge color="error" badgeContent={selectedUsers.length}>
                <DeleteIcon
                  className="deleteIcon"
                  sx={{ color: selectedUsers.length > 0 ? "red" : "#82868c" }}
                />
              </Badge>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow sx={{ border: "none" }}>
          <TableCell padding="checkbox" className="datatableCell">
          <Checkbox
              className="checkBox"
              checked={selectedUsers.length === (searchQuery.length > 0 ? filteredUsers.length : users.length)}
              indeterminate={
                selectedUsers.length > 0 && selectedUsers.length < (searchQuery.length > 0 ? filteredUsers.length : users.length)
              }
              onChange={toggleSelectAll}
            />
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
