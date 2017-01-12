<?php
$title = $_POST['name'];
$name = $_FILES['photo']['name'];
$tmp = $_FILES['photo']['tmp_name'];
$ext = pathinfo($name, PATHINFO_EXTENSION);
$new_name = substr(md5($name.time()),0,5);
if (move_uploaded_file($tmp, $new_name.".".$ext)) {
	echo json_encode('success');
}else{
	echo json_encode('failed');
}

?>