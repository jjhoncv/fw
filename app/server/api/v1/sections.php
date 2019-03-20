<?php
include '../inc.control_top.php';
require_once _model_ . "User.php";
require_once _model_ . "Users.php";
require_once _utils_ . "headers.php";

$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case 'GET':
        $get = (object) $_GET;
        if (isset($get->_id)) {
            $id = intval($_GET["id"]);
            $section = new Section($id);
            // $user->get();
        } else {
            $sections = $session->getUser()->getSections();
            foreach ($sections as $section) {
                $data[] = array(
                    'id' => $section->getId(),
                    'module' => array(
                        'id' => $section->getModule()->getId(),
                        'name' => $section->getModule()->getName(),
                    ),
                    'name' => $section->getName(),
                    'url' => $section->getUrl(),
                    'status' => $section->getStatus(),
                );
            }
            $modules = array();
            foreach ($data as $row) {
                // $modules['id'] = $row['module']['id'];
                $modules['id'][] = $row['id'];
                $modules['id']['sections'][] = $row;
            }

            echo "<pre>";
            print_r($modules);

            // http_response_code(200);
            // echo json_encode(array(
            //     'data' => $data,
            // ));
        }
        // print_r($session->getUser()->getSections());
        // $osections = new Sections();
        // $sections = $osections->getSections();

        // $code = 401;
        // $data = array(
        //     "error" => array(
        //         "status" => $code,
        //         "description" => "Unauthorized",
        //     ),
        // );

        // if (count($users) > 0) {
        //     $code = 200;
        //     foreach ($users as $user) {
        //         $list[] = array(
        //             "id" => $user->getId(),
        //             "role" => $user->getRole()->getName(),
        //             "name" => $user->getName(),
        //             "surname" => $user->getSurname(),
        //             "mail" => $user->getMail(),
        //             "photo" => $user->getPhoto(),
        //             "login" => $user->getLogin(),
        //             "reading" => $user->getReading(),
        //             "writing" => $user->getWriting(),
        //         );
        //     }
        // }

        // $data = array(
        //     "data" => $list,
        // );

        // http_response_code($code);
        // echo json_encode($data);
        // }
        break;
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}
