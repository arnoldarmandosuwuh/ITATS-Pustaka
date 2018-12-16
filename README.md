# Aplikasi Perpustakaan Menggunakan React Native
Tugas matakuliah Topik Khusus - Sistem Informasi - ITATS - 2017
Copyright - Arnold Armando Suwuh
# Tools yang diperlukan
1. npm install native-base --save 
2. npm install --save react-navigation
3. npm install axios 
4. npm install 
5. react-native link
# How to use
1. clone dengan git clone https://github.com/arnoldarmandosuwuh/ITATS-Pustaka.git atau download zip
2. Install semua tools yang diperlukan
3. Buat hosting untuk menyimpan database dan file api
4. Import database dari /DB/itats_pustaka.sql ke database yang ada di hosting kalian
5. Buka /PHP/itats_pustaka.php & itats_pustaka_view.json
6. Ganti koneksi SQL sesuai dengan database yang sudah kalian buat di hosting
7. Upload semua file PHP yang telah kalian edit tadi
8. Change /Home/Add.js line 55 "axios.post('http://yourdomain/itats_pustaka.php', (myJson)"
9. Change /Home/ListBook.js line 17 "return fetch('http://yourdomain/itats_pustaka.json')"
10. Change /Home/ViewBook.js line 20 "return fetch('http://yourdomain/itats_pustaka.json')"
11. Change /Home/Book.js line 19 "return fetch('http://yourdomain/itats_pustaka.json')"
