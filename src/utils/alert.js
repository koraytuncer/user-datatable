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
      popup: 'custom-swal-popup', // CSS sınıfı tanımı
      title: 'custom-swal-title',
      content: 'custom-swal-content'
    }
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
