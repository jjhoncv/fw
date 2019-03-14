<?php
include '../inc.control_top.php';
require_once _model_ . "User.php";

$request_method = $_SERVER["REQUEST_METHOD"];

switch ($request_method) {
    case 'GET':
        // Retrive Products
        if (!empty($_GET["id"])) {
            $id = intval($_GET["id"]);
            $user = new User($id);
            $user->get();
        } else {
            $users = new Users();
            $users->getAll();
        }
        break;
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
} 