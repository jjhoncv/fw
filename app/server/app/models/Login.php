<?php
require_once _utils_ . "token.php";
require_once _model_ . "Role.php";

class Login
{
    private $_id,
    $_role,
    $_token,
    $_logged = false;

    public function __construct($login, $password)
    {
        $sql = "SELECT id_user, id_role FROM users WHERE login_user = '" . $login . "' AND password_user = '" . $password . "'";
        $users = Db::getInstance()->query($sql);

        if ($users->count() > 0) {
            $row = $users->result();
            $this->_logged = true;
            $this->_id = $row['id_user'];
            $this->_role = new Role($row['id_role']);
            $this->_token = token($row['id_user']);
        }
    }

    public function logged()
    {
        return $this->_logged;
    }

    public function getToken()
    {
        return $this->_token;
    }

    public function id()
    {
        return $this->_id;
    }
}
