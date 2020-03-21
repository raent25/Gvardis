<?php
$to = "gvardis.kiev.ua@ukr.net";
$email = $_POST['email'];
$err = "";
if (trim($_POST['name']) == "" && trim($_POST['email']) == "" && trim($_POST['tel']) == "") {
    $err = "Вкажіть інформацію";
} else if (trim($_POST['name']) == "" && trim($_POST['email']) == "") {
    $err = "Ім'я та електронну адресу не вказано";
} else if (trim($_POST['email']) == "" && trim($_POST['tel']) == "") {
    $err = "Не вказано електронну адресу та телефон";
} else if (trim($_POST['tel']) == "" && trim($_POST['name']) == "") {
    $err = "Телефон та ім'я не вказано";
} else if (trim($_POST['name']) == "") {
    $err = "Ім'я не вказано";
} else if (trim($_POST['email']) == "") {
    $err = "Не вказано електронну адресу";
} else if ((!((strpos($email, ".") > 0) && (strpos($email, "@") > 0)))) {
    $err = "Не правильно вказано електронну адресу";
} else if (trim($_POST['tel']) == "") {
    $err = "Телефон не вказано";
}
if ($err != "") {
    echo $err;
    exit;
}
$massage = "Повідомлення від:" . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\nТелефон:" . $_POST['tel'] . "\nТекст:\n" . $_POST['text'];
$subject = "=?utf-8?B?" . base64_encode("Повідомлення з сайту GVARDIS від " . $_POST['name']) . "?=";
//$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";
$success = mail($to, $subject, $massage, $headers);
echo $success;
