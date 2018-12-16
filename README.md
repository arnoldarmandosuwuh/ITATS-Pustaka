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
1. c
1. Upload Database from /DB/itats_pustaka.sql to you hosting
2. Open /PHP/itats_pustaka.php & itats_pustaka_view.json
3. Change the sql connection from both files
4. Upload the both PHP files to your hosting
5. Change /Home/Add.js line 55 "axios.post('http://yourdomain/itats_pustaka.php', (myJson)"
6. Change /Home/ListBook.js line 17 "return fetch('http://yourdomain/itats_pustaka.json')"
7. Change /Home/ViewBook.js line 20 "return fetch('http://yourdomain/itats_pustaka.json')"
8. Change /Home/Book.js line 19 "return fetch('http://yourdomain/itats_pustaka.json')"
