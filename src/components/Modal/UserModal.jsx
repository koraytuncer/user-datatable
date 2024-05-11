import { useState } from "react";
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
import FormHelperText from "@mui/material/FormHelperText";
import { useFormik } from "formik";
import * as yup from "yup";
import "../../styles/modal/UserModal.css";

import avatar1 from "../../assets/images/avatar/1.png";
import avatar2 from "../../assets/images/avatar/2.png";
import avatar3 from "../../assets/images/avatar/3.png";
import avatar4 from "../../assets/images/avatar/4.png";
import avatar5 from "../../assets/images/avatar/5.png";
import avatar6 from "../../assets/images/avatar/6.png";

const validationSchema = yup.object({
  fullname: yup
    .string("Enter your email")
    .required("fullname is required"),
    username: yup
    .string("Enter your email")
    .required("username is required"),
    email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup
    .string("Enter your password")
    .required("role is required"),
});

export default function UserModal({ open, handleClose }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);


  const userAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      role: "",
      avatar:"",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <FormControl sx={{ width: "100%" }} error={Boolean(formik.errors.fullname && formik.touched.fullname)}>
              <OutlinedInput
                placeholder="Full Name"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                id="fullname"
                name="fullname"
                className="InputField"
              />
              {formik.touched.fullname && formik.errors.fullname && <FormHelperText>{formik.errors.fullname}</FormHelperText>}
            
            </FormControl>

            <FormControl sx={{ width: "100%" }} error={Boolean(formik.errors.username && formik.touched.username)}>
              <OutlinedInput
                placeholder="User Name"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                id="username"
                name="username"
                className="InputField"
              />
               {formik.touched.username && formik.errors.username && <FormHelperText>{formik.errors.username}</FormHelperText>}

            </FormControl>

            <FormControl sx={{ width: "100%" }}  error={Boolean(formik.errors.email && formik.touched.email)}>
              <OutlinedInput
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                id="email"
                name="email"
                className="InputField"
              />

            {formik.touched.email && formik.errors.email && <FormHelperText>{formik.errors.email}</FormHelperText>}

            </FormControl>

            <FormControl sx={{ width: "100%" }} error={Boolean(formik.errors.role && formik.touched.role)}>
              <Select
                className="InputSelect"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                id="role"
                name="role"
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
              {formik.touched.role && formik.errors.role && <FormHelperText>{formik.errors.role}</FormHelperText>}

            </FormControl>

            <Box
              className="avatarContainer"
              sx={{ position: "absolute", bottom: 30 }}
            >
              <InputLabel className="avatarLabel">Select Avatar</InputLabel>
              <FormControl sx={{ width: "100%", flexDirection: "row" }}>
                {userAvatars.map((item, index) => (
                  <Avatar
                    key={index}
                    sx={{
                      height: 40,
                      width: 40,
                      marginRight: "10px",
                      boxShadow:
                        selectedAvatar === index
                          ? "0 0 10px rgba(0,0,255,0.5)"
                          : "",
                      cursor: "pointer",
                    }}
                    variant="rounded"
                    src={item}
                    alt={`Avatar ${index + 1}`}
                    onClick={() => {
                      formik.setFieldValue('avatar', item);
                      setSelectedAvatar(item);
                    }}
                  />
                ))}
              </FormControl>
            </Box>

            <Box sx={{ position: "absolute", bottom: 18, left: "28%" }}>
              <Button className="userAddButton" type="submit">
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
