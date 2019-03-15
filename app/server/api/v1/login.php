<?php
include '../inc.control_top.php';
require_once _model_ . "Login.php";

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        if (
            !empty($data->username) &&
            !empty($data->password)
        ) {
            $login = new Login($data->username, $data->password);

            $code = 401;
            $data = array(
                "error" => array(
                    "status" => $code,
                    "description" => "Unauthorized"
                )
            );

            if ($login->logged()) {
                $code = 200;
                $data = array(
                    "data" => array(
                        "id" => $login->id()
                    )
                );
            }

            http_response_code($code);
            echo json_encode($data);
        }
        break;
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        header('Allow: POST');
        break;
}
