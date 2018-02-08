<?php

if (isset($_POST['fio']) 
    && $_POST['fio']!='' 
    && isset($_POST['email']) 
    && $_POST['email']!='' ) {

    $fio = $_POST['fio'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $to  = 'nataliabalabonkina@gmail.com';
    $subject = 'Вам отправили запрос';
    $message = "Пользователь $fio с email $email и телефоном $phone отправил вам запрос";

    $res = mail ($to, $subject, $message);
    if ($res) {
        echo 'Письмо отправлено';
    }
    else {
        echo 'Ошибка отправки. Проверьте правильность написания email';
    }
}
else {
    echo 'Ошибка! Введите верные данные';
}
?>