<?php
class User
{
    private $_id,
    $_name,
    $_surname,
    $_login,
        $_password;

    public function __construct($id = 0)
    {
        $this->_id = $id;
        if ($this->_id > 0) {

            $sql = "SELECT * FROM users WHERE id_user = '" . $this->_id . "'";
            $users = Db::getInstance()->query($sql);

            if ($users->count() > 0) {
                $row = $users->result();

                $this->_name = $row['name_user'];
                $this->_surname = $row['surname_user'];
                $this->_login = $row['login_user'];
                $this->_password = $row['password_user'];

            }
        }
    }

    public function getName()
    {
        return $this->_name;
    }

    public function getSurname()
    {
        return $this->_surname;
    }

    public function getLogin()
    {
        return $this->_login;
    }

    public function getPassword()
    {
        return $this->_password;
    }

    public function __toString()
    {
        return $this->_name . ' ' . $this->_surname;
    }

}
