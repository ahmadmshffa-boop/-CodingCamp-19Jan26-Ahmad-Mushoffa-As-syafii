# -CodingCamp-19Jan26-Ahmad-Mushoffa-As-syafii

berikut mini project untuk to do list yang diharapkan oleh revou Logika dan Algoritma (index.js)

Ini adalah inti dari web di mana semua proses logika terjadi.

Inisialisasi:

Saat halaman dimuat, script akan mengambil semua elemen HTML yang diperlukan (kolom input, tombol, daftar tugas, dan penghitung) dan menyimpannya dalam variabel.
Dua variabel totalTasks dan completedTasks dibuat dan diinisialisasi dengan nilai 0.
Algoritma Penambahan Tugas (function):

Pemicu: Fungsi ini dijalankan ketika pengguna mengklik tombol "Tambah Tugas" atau menekan tombol "Enter" di kolom input.
Validasi: Pertama, script memeriksa apakah kolom input kosong. Jika ya, sebuah peringatan muncul dan proses berhenti.
Pembuatan Elemen: Jika input valid, script secara dinamis membuat elemen-elemen HTML baru untuk satu baris tugas, yang terdiri dari:
Checkbox ()
Teks tugas ()
Tombol "Hapus" () A. Penambahan Event Listener:
Untuk Checkbox: Sebuah event listener ditambahkan ke checkbox. Jika dicentang, completedTasks bertambah satu dan tugas diberi gaya visual (dicoret). Jika centang dihilangkan, completedTasks berkurang satu.
Untuk Tombol Hapus: Sebuah event listener ditambahkan ke tombol "Hapus". Jika diklik, elemen tugas tersebut akan dihapus dari daftar, totalTasks berkurang satu, dan jika tugas itu sebelumnya selesai, completedTasks juga ikut berkurang.
Pembaruan Tampilan: Elemen tugas yang baru dibuat ditambahkan ke dalam daftar tugas di HTML, totalTasks bertambah satu, kolom input dikosongkan, dan tampilan penghitung diperbarui.
Algoritma Penghapusan Semua Tugas (delete function):

Pemicu: Fungsi ini dijalankan saat pengguna mengklik tombol "Hapus Semua".
Konfirmasi: Sebuah kotak dialog konfirmasi muncul untuk memastikan pengguna benar-benar ingin menghapus semuanya.
Proses: Jika dikonfirmasi, script akan menghapus seluruh isi dari daftar tugas (
), mengatur ulang totalTasks dan completedTasks menjadi 0, dan memperbarui tampilan penghitung.
Fungsi Pembaruan Penghitung (update function):

Ini adalah fungsi utilitas kecil yang dipanggil setiap ada perubahan jumlah tugas (ditambah, dihapus, atau diselesaikan) untuk memastikan angka yang ditampilkan di layar selalu sesuai dengan data asli.
