<?php
require_once _utils_ . "token.php";
require_once _model_ . "Role.php";
require_once _model_ . "User.php";

class Session
{
    private $_user, $_token;

    public function __construct()
    {
        session_start();
        if (!$_SESSION['user'] || empty($_SESSION['user'])) {
            $_SESSION['user'] = new User();
        }

        $this->_user = $_SESSION['user'];

        // $sql = "SELECT id_user, id_role FROM users WHERE login_user = '" . $login . "' AND password_user = '" . $password . "'";
        // $users = Db::getInstance()->query($sql);

        // if ($users->count() > 0) {
        //     $row = $users->result();
        //     $this->_logged = true;
        //     $this->_id = $row['id_user'];
        //     $this->_role = new Role($row['id_role']);
        //     $this->_token = token($row['id_user']);
        // }
    }

    public function validAccess($user, $password)
    {
        $sql = "SELECT id_user FROM users WHERE login_user='" . $user . "' AND password_user='" . $password . "'";
        $users = Db::getInstance()->query($sql);

        if ($users->count() > 0) {
            $row = $users->result();
            $this->_user = new User($row['id_user']);
            $_SESSION['user'] = $this->_user;
            $this->_user->setLoggedIn(true);

            $code = 200;
            $data = array(
                "data" => array(
                    "token" => token($row['id_user']),
                ),
            );
        } else {
            $code = 400;
            $data = array(
                "error" => array(
                    "status" => $code,
                    "description" => "Unauthorized",
                ),
            );
        }
        http_response_code($code);
        echo json_encode($data);
    }

    public function getUser()
    {
        return $this->_user;
    }

    // public function isLoged()
    // {
    //     if (is_object($this->_user)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    public function logout()
    {
        unset($_SESSION['user']);
        session_destroy();

        $this->_user = new User();
        $this->_user->setLogin("Visitante");
        $this->_user->setLoggedIn(false);
        $_SESSION['user'] = $this->_user;
        // header("Location: login.php");
    }
}
