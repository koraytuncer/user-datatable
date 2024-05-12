import { useState,useEffect } from "react";
import { useUsersData } from "../../contexts/userdatatable/UsersDataContext";
import { useUserSelection } from "../../contexts/userdatatable/UserSelectionContext";
import { usePagination } from '../../contexts/userdatatable/PaginationContext';
import {
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Avatar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { confirmDelete } from "../../utils/alert";
import { deleteData } from "../../services/DataService";
import { useModal } from "../../contexts/modal/ModalContext";
import AddUserModal from "../modal/AddUserModal";
import UpdateUserModal from "../modal/UpdateUserModal";
import "../../styles/datatable/DataTableBody.css";

const DataTableBody = () => {
  const {
    users,
    setUsers,
    filteredUsers,
    searchQuery
  } = useUsersData();

  const { selectedUsers, setSelectedUsers } = useUserSelection();
  const { slicedData,setSlicedData, currentPage,rowsPerPage } = usePagination();

  //Kullanıcı düzenleme işlemi için oluşturuldu
  const [editingUser, setEditingUser] = useState(null);

  const { open, handleClose } = useModal();

  const handleCheckboxClick = (userId) => {
    // Mevcut seçili kullanıcıları kontrol et
    const newSelectedUsers = selectedUsers.includes(userId)
      ? selectedUsers.filter(id => id !== userId) // Eğer zaten seçili ise çıkar
      : [...selectedUsers, userId]; // Eğer seçili değilse ekle
    setSelectedUsers(newSelectedUsers);
  };

  // Kullanıcıyı silme işlemi
  const handleDelete = (userId) => {
    confirmDelete(userId, async () => {
      try {
        await deleteData(userId); // API üzerinden kullanıcı silme işlemi
        const updatedUsers = users.filter((user) => user.id !== userId); // Silinen kullanıcıyı listeden kaldır
        setUsers(updatedUsers); // State'i güncelle
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    });
  };

  // Arama sorgusu girilmişse filtrelenmiş veriyi, girilmemişse tüm veriyi göster
  const dataToShow =
    searchQuery.length || filteredUsers.length > 0 ? filteredUsers : users;

    useEffect(() => {
      const newSlicedData = dataToShow.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
      setSlicedData(newSlicedData);
    }, [currentPage, dataToShow, setSlicedData]);

  const openEditModal = (user) => {
    setEditingUser(user); // Düzenlenecek kullanıcıyı set et
  };

  const closeEditModal = () => {
    setEditingUser(null); // Modal kapandığında kullanıcıyı sıfırla
  };

    // Sayfa değiştiğinde seçili kullanıcıları temizle
    useEffect(() => {
      setSelectedUsers([]); // Sayfa değişikliğinde seçimleri sıfırla
    }, [currentPage, setSelectedUsers]);

  return (
    <>
      <TableBody>
        {slicedData.length > 0 ? (
          slicedData.map((user) => (
            <TableRow key={user.id}>
              <TableCell align="left" component="th" scope="user">
              <Checkbox
              checked={selectedUsers.includes(user.id)} // Bu kullanıcı zaten seçili mi kontrol et
              onChange={() => handleCheckboxClick(user.id)} // Checkbox tıklama işlemi
            />
              </TableCell>
              <TableCell align="left">
                <Avatar
                  sx={{ height: 42, width: 42 }}
                  variant="rounded"
                  src={user.avatar}
                />
              </TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.username}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
              <TableCell align="left">{user.role}</TableCell>
              <TableCell align="left">
                <EditIcon
                  className="actionIcon"
                  onClick={() => openEditModal(user)}
                />
                <DeleteIcon
                  className="actionIcon"
                  onClick={() => handleDelete(user.id)}
                />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={7} align="center">
              <Typography
                variant="subtitle1"
                style={{ marginTop: 16, marginBottom: 16 }}
              >
                Kullanıcı bulunamamıştır.
              </Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <AddUserModal open={open} handleClose={handleClose} user={editingUser} />
      {editingUser && (
        <UpdateUserModal
          user={editingUser}
          open={Boolean(editingUser)}
          handleClose={closeEditModal}
        />
      )}
    </>
  );
};

export default DataTableBody;
