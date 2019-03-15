<?php
include '../inc.control_top.php';
require_once _model_ . "User.php";
require_once _model_ . "Users.php";


$method = $_SERVER["REQUEST_METHOD"];

if (isset($_SERVER['Authorization'])) {
    $headers = trim($_SERVER["Authorization"]);
}

switch ($method) {
    case 'GET':
        $get = (object) $_GET;
        if (!$get->_id) {   
            $id = intval($_GET["id"]);
            $user = new User($id);
            $user->get();
        } else {
            $users = new Users();
            $data = $users->getUsers();
            
            $code = 200;
            foreach($data as $user) {
                $data[] = array(
                    "id" => $user->getId(),
                    "name" => $user->getName(),
                    "surname" => $user->getSurname(),
                    "login" => $user->getLogin(),
                    "password" => $user->getPassword()
                );
            } 
            
            http_response_code($code);
            echo json_encode($data);
        }
        break;
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
} 