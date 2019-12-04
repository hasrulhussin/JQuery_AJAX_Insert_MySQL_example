<?php

if(isset($_POST['name'])){
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
}

//connect to db and write query to insert in db

$db = new mysqli("localhost", "root", "", "test_jquery_ajax");

//form validation
if( empty($name) || empty($email) || empty($msg) ){
    echo "Please fill out all form data.";
    
}else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    echo "Invalid email. Please re-correct";
}


else{

    if($db->query("INSERT INTO `contact`(`name`, `email`, `msg`) VALUES  ('$name', '$email', '$msg')")){
     echo "Maklumat Berjaya Dihantar!";
    }
}
?>