<?php
 // GET
// if (isset($_GET) && isset($_GET['session'])) {
//     $data = array('name' => 'xxx');
//     echo json_encode($data);
// }

// POST
// if (isset($_POST['user']) && isset($_POST['password'])) {
//     echo "ss";
//     die();
$_POST = json_decode(file_get_contents("php://input"), true);
print_r($_POST);
// print_r($_POST);
// echo "user : " . ($_POST['user']);
// $user = print_r($_REQUEST);
// $password = $_POST['password'];
// echo "aa : " . $user;
die();
if ($user === "root" && $password === "admin") {
    echo json_encode(array('logged' => true));
}
// }
