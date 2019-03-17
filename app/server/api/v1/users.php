<?php
include '../inc.control_top.php';
require_once _model_ . "User.php";
require_once _model_ . "Users.php";

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case 'GET':
        $get = (object) $_GET;
        if (isset($get->_id)) {
            $id = intval($_GET["id"]);
            $user = new User($id);
            // $user->get();
        } else {
            $ousers = new Users();
            $users = $ousers->getUsers();

            $code = 401;
            $data = array(
                "error" => array(
                    "status" => $code,
                    "description" => "Unauthorized",
                ),
            );

            if (count($users) > 0) {
                $code = 200;
                foreach ($users as $user) {
                    $list[] = array(
                        "id" => $user->getId(),
                        "role" => $user->getRole()->getName(),
                        "name" => $user->getName(),
                        "surname" => $user->getSurname(),
                        "mail" => $user->getMail(),
                        "photo" => $user->getPhoto(),
                        "login" => $user->getLogin(),
                        "reading" => $user->getReading(),
                        "writing" => $user->getWriting(),
                    );
                }
            }

            $data = array(
                "data" => $list,
            );

            http_response_code($code);
            echo json_encode($data);
        }
        break;
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
