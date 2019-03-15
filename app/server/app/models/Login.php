<?php
class Login
{
    private
        $_id,
        $_logged = false;

    public function __construct($login, $password)
    {
        $sql = "SELECT id_user FROM users WHERE login_user = '" . $login . "' AND password_user = '" . $password . "'";
        $users = Db::getInstance()->query($sql);

        if ($users->count() > 0) {
            $row = $users->result();
            $this->_logged = true;
            $this->_id = $row['id_user'];
        }
    }

    public function logged()
    {
        return $this->_logged;
    }

    public function id()
    {
        return $this->_id;
    }
}
