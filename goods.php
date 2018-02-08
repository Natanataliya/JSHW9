<?php
$g1 = array(
    "name" => "Strawberry",
    "weight" => "1000",
    "cost" => "50",
    "img" => "https://cdn0.iconfinder.com/data/icons/fruits/128/Strawberry.png"
);
$g2 = array(
    "name" => "Apple",
    "weight" => "1000",
    "cost" => "25",
    "img" => "https://cdn0.iconfinder.com/data/icons/fruits/128/Apple.png"
);

$art = $_GET['art'];

if ($art ==1) {
    echo json_encode($g1);
}

if ($art ==2) {
    echo json_encode($g2);
}