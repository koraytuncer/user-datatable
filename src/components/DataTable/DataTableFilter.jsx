import { useState } from "react";
import {Grid,Box,Typography,List,ListItem,Divider,Button} from "@mui/material";
import { FaUsers } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import "../../styles/datatable/DataTableFilter.css";

const DataTableFilters = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const filters = [
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
        sx={{ padding: "0px 18px 0px 18px" }}>
        <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
          <Box className="userIconBox">
            <FaUsers size={20} color={"var(--primary-color)"} />
          </Box>

          <Typography className="userTypography">Users</Typography>
        </Grid>
        <Grid item xs={6}>
          <List className="userList">
            {filters.map((filter, index) => (
              <ListItem
                key={index}
                onClick={() => handleClick(index)}
                className={`userListItem ${
                  index === activeIndex
                    ? "userListItemActive"
                    : "userListItemInactive"
                }`}>
                {filter}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
          <Button
            className="userAddButton"
            startIcon={<MdAddCircle size={15} color={"#FFFFFF"} />}>
            <Typography className="userAddButtonText">Add New User</Typography>
          </Button>
        </Grid>
      </Grid>
      <Divider className="userDivider" />
    </>
  );
};

export default DataTableFilters;
