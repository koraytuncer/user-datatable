import { useState } from "react";
import { useUsersData } from "../../contexts/users/UsersDataContext";
import { useUserSelection } from "../../contexts/users/UserSelectionContext";
import { useModal } from "../../contexts/modal/ModalContext";
import { toast } from "react-toastify";
import {
  Grid,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
  Button,
} from "@mui/material";
import { FaUsers } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import "../../styles/datatable/DataTableFilter.css";

const DataTableFilters = () => {
  const { users, setFilteredUsers } = useUsersData();
  const { setFilterRole } = useUserSelection();
  const [activeIndex, setActiveIndex] = useState(0);

  const { handleOpen } = useModal();

  const handleClick = (index, item) => {
    setActiveIndex(index);
    let filteredData = [];
    if (item === "All Users") {
      filteredData = [...users];
    } else {
      filteredData = users.filter((user) => user.role === item);
      setFilterRole(item);
    }
    setFilteredUsers(filteredData);

    // Filtrelenmiş veri boş ise uyarı mesajı göster
    if (filteredData.length === 0) {
      setActiveIndex(0)
      toast.info("No users found for the selected role.", { theme: "colored" });
    }
  };

  const filterName = [
    "All Users",
    "Contributor",
    "Author",
    "Administrator",
    "Subscriber",
  ];

  return (
    <>
      <Grid
        container
        spacing={5}
        gap={12}
        sx={{ padding: "0px 18px 0px 18px" }}
      >
        <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
          <Box className="userIconBox">
            <FaUsers size={20} color={"var(--primary-color)"} />
          </Box>
          <Typography className="userTypography">Users</Typography>
        </Grid>
        <Grid item xs={6}>
          <List className="userList">
            {filterName.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => handleClick(index, item)}
                className={`userListItem ${
                  index === activeIndex
                    ? "userListItemActive"
                    : "userListItemInactive"
                }`}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
          <Button
            className="userAddButton"
            onClick={handleOpen}
            startIcon={<MdAddCircle size={15} color={"#FFFFFF"} />}
          >
            <Typography className="userAddButtonText">Add New User</Typography>
          </Button>
        </Grid>
      </Grid>
      <Divider className="userDivider" />
    </>
  );
};

export default DataTableFilters;
