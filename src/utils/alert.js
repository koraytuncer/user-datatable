import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const confirmDelete = (userId, onDeleteConfirm) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2940D3',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!'
  }).then((result) => {
    if (result.isConfirmed) {
      onDeleteConfirm(userId); // Kullanıcı silme işlemini gerçekleştir
      toast.success("User deleted successfully!"); // Başarılı toast mesajı
    } else if (result.isDismissed) {
      // İptal durumu için isDismissed kullanıldı
      toast.warning("User delete cancelled."); // İptal toast mesajı
    }
  });
}
