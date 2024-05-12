import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/alert.css';

export const confirmDelete = (userId, onDeleteConfirm) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: null,
    showCancelButton: true,
    confirmButtonColor: '#2940D3',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    customClass: {
      popup: 'custom-swal-popup',
      title: 'custom-swal-title',
      content: 'custom-swal-content'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      onDeleteConfirm(userId); // Kullanıcı silme işlemini gerçekleştir
      toast.success("User deleted successfully!",{theme: "dark"});

    } else if (result.isDismissed) {
      toast.warning("User delete cancelled.",{theme: "dark"});
    }
  });
}

