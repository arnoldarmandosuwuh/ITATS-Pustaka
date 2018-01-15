<?php

header("Content-type:application/json");

//koneksi ke database
$connection = mysqli_connect("localhost", "u8579536_itatspustaka", "12345", "u8579536_itatspustaka") or die("Error " . mysqli_error($connection));

$getfile = file_get_contents('php://input');

$content = json_decode($getfile, true);

$isbn = $content['isbn'];

//menampilkan data dari database, table tb_pustaka
$sql = "select * from tbl_pustaka where isbn = '$isbn'";
$result = mysqli_query($connection, $sql) or die("Error " . mysqli_error($connection));

//membuat array
while ($row = mysqli_fetch_assoc($result)) {
    $ArrAnggota[] = $row;
}

echo json_encode($ArrAnggota, JSON_PRETTY_PRINT);
//hasil array saya tampung di variabel dengan nama $json
$json = json_encode($ArrAnggota, JSON_PRETTY_PRINT);

//tutup koneksi ke database
mysqli_close($connection);

if (file_put_contents("itats_pustaka_view.json", $json))
    echo "File JSON itats_pustaka_view.json sukses dibuat...";
else 
    echo "Oops! Terjadi error saat membuat file JSON...";

?>