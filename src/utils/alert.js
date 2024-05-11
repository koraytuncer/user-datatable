import Swal from 'sweetalert2';

export const confirmDelete = (userId, onDeleteConfirm) => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#2940D3',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      onDeleteConfirm(userId);
      Swal.fire({
        title: 'Deleted!',
        text: 'The user has been deleted.',
        icon: 'success',
        timer: 1500, // 1500 milisaniye sonra otomatik kapanır
        showConfirmButton: false // Onay butonunu gizle
      });
    }
  });
}
