import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../../styles/modal/UserModal.css";

import avatar1 from "../../assets/images/avatar/1.png";
import avatar2 from "../../assets/images/avatar/2.png";
import avatar3 from "../../assets/images/avatar/3.png";
import avatar4 from "../../assets/images/avatar/4.png";
import avatar5 from "../../assets/images/avatar/5.png";
import avatar6 from "../../assets/images/avatar/6.png";

export default function UserModal({ open, handleClose }) {
  const [roles, setRoles] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan submit işlemini engeller
    // Form verilerini işleme veya API'ye gönderme
    console.log("Form submitted");
  };

  const handleRoleChange = (event) => {
    setRoles(event.target.value);
  };

  const handleAvatarSelect = (index) => {
    setSelectedAvatar(index);
  };

  const userAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="userModal">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput placeholder="Full Name" className="InputField" />
            </FormControl>

            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput placeholder="User Name" className="InputField" />
            </FormControl>

            <FormControl sx={{ width: "100%" }}>
              <OutlinedInput
                placeholder="Email Address"
                className="InputField"
              />
            </FormControl>

            <FormControl sx={{ width: "100%" }}>
              <Select
                className="InputSelect"
                value={roles}
                onChange={handleRoleChange}
                autoWidth
                displayEmpty
                renderValue={(selected) => {
                  if (selected === "") {
                    return <p className="selectPlaceHolder">Role</p>;
                  }
                  return selected;
                }}
              >
                <MenuItem value="Contributor" className="menuItem">
                  Contributor
                </MenuItem>
                <MenuItem value="Author" className="menuItem">
                  Author
                </MenuItem>
                <MenuItem value="Administrator" className="menuItem">
                  Administrator
                </MenuItem>
                <MenuItem value="Subscriber" className="menuItem">
                  Subscriber
                </MenuItem>
              </Select>
            </FormControl>

            <Box
              className="avatarContainer"
              sx={{ position: "absolute", bottom: 30 }}>
              <InputLabel className="avatarLabel">Select Avatar</InputLabel>
              <FormControl sx={{ width: "100%", flexDirection: "row" }}>

                {userAvatars.map((item, index) => (
                  <Avatar
                  key={index}
                  sx={{ 
                    height: 40, 
                    width: 40, 
                    marginRight: "10px",
                    boxShadow: selectedAvatar === index ? '0 0 10px rgba(0,0,255,0.5)' : '',
                    cursor: 'pointer',
                  }}
                  variant="rounded"
                  src={item}
                  alt={`Avatar ${index + 1}`}
                  onClick={() => handleAvatarSelect(index)}
                />
                ))}
              </FormControl>
            </Box>

            <Box sx={{ position: "absolute", bottom: 18, left: "28%" }}>
              <Button className="userAddButton">
                <Typography className="userAddButtonText">
                  Create User
                </Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
