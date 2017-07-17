<?php

$recepient = "imicra@mail.ru";
$sitename = "Консалтинг и аудит лимитед";

$name = trim($_POST["name"]);
$mail = trim($_POST["email"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nТелефон: $mail \nТекст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");