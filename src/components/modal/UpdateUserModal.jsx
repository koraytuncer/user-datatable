import { useState } from "react";
import { updateData } from "../../services/DataService";
import { useUsersData } from "../../contexts/userdatatable/UsersDataContext";
import {
  Box,
  Modal,
  FormControl,
  OutlinedInput,
  Select,
  MenuItem,
  Avatar,
  InputLabel,
  Typography,
  Button,
  IconButton,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useFormik } from "formik";
import * as yup from "yup";
import "../../styles/modal/UpdateUserModal.css";

import avatar1 from "../../assets/images/avatar/1.png";
import avatar2 from "../../assets/images/avatar/2.png";
import avatar3 from "../../assets/images/avatar/3.png";
import avatar4 from "../../assets/images/avatar/4.png";
import avatar5 from "../../assets/images/avatar/5.png";
import avatar6 from "../../assets/images/avatar/6.png";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("name is required"),
  username: yup.string("Enter your username").required("username is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup.string("Enter your role").required("role is required"),
});

export default function UpdateUserModal({ user, open, handleClose }) {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const { users, setUsers } = useUsersData();

  const userAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  const formik = useFormik({
    initialValues: {
      name: user ? user.name : "",
      username: user ? user.username : "",
      email: user ? user.email : "",
      role: user ? user.role : "",
      avatar: user ? user.avatar : "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);

      updateData(user.id, values)
        .then((updatedUser) => {
          setTimeout(() => {
            setLoading(false);
            toast.success("User update successfully!", { theme: "dark" });
            const updatedUsers = users.map((u) =>
              u.id === user.id ? updatedUser : u
            );
            setUsers(updatedUsers); // Yeni kullanıcı listesini ayarla
            handleClose();
          }, 2000);
        })
        .catch(() => {
          toast.error("User update error.", { theme: "dark" });
        });
    },
    onReset: () => {
      handleClose();
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
        <Box className="UpdateUserModal">
          <IconButton
            aria-label="close"
            onClick={formik.handleReset}
            sx={{ position: "absolute", right: 0, top: 0 }}
          >
            <IoCloseCircleOutline size={30} color={"var(--primary-color)"} />
          </IconButton>
          <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
            <FormControl
              sx={{ width: "100%" }}
              error={Boolean(formik.errors.name && formik.touched.name)}
            >
              <OutlinedInput
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                id="name"
                name="name"
                className="InputField"
              />

              {formik.touched.name && formik.errors.name && (
                <FormHelperText className="formHelperText">
                  {formik.errors.name}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              sx={{ width: "100%" }}
              error={Boolean(formik.errors.username && formik.touched.username)}
            >
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
              {formik.touched.username && formik.errors.username && (
                <FormHelperText className="formHelperText">
                  {formik.errors.username}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              sx={{ width: "100%" }}
              error={Boolean(formik.errors.email && formik.touched.email)}
            >
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

              {formik.touched.email && formik.errors.email && (
                <FormHelperText className="formHelperText">
                  {formik.errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              sx={{ width: "100%" }}
              error={Boolean(formik.errors.role && formik.touched.role)}
            >
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
              {formik.touched.role && formik.errors.role && (
                <FormHelperText>{formik.errors.role}</FormHelperText>
              )}
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
                        selectedAvatar === item
                          ? "0 0 10px rgba(0,0,255,0.8)"
                          : "",
                      cursor: "pointer",
                    }}
                    variant="rounded"
                    src={item}
                    alt={`Avatar ${index + 1}`}
                    onClick={() => {
                      formik.setFieldValue("avatar", item);
                      setSelectedAvatar(item);
                    }}
                  />
                ))}
              </FormControl>
            </Box>

            <Box sx={{ position: "absolute", bottom: 18, left: "28%" }}>
              <Button
                // className={
                //   loading || !formik.dirty || !formik.isValid
                //     ? "userEditDisabledButton"
                //     : "userEditButton"
                // }
                className={loading || !formik.dirty || !formik.isValid ? "userEditDisabledButton" : "userEditButton"}
                disabled={loading || !formik.dirty || !formik.isValid}
                type="submit"
                startIcon={loading ? <CircularProgress size={20} /> : null}>
                <Typography
                  className={
                    loading || !formik.dirty || !formik.isValid
                      ? "userEditDisabledButtonText"
                      : "userEditButtonText"
                  }>
                  {loading ? "Loading..." : "Update User"}
                </Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
