<?php
require_once _model_ . "Role.php";

class User
{
    private $_id,
    $_role,
    $_name,
    $_surname,
    $_mail,
    $_photo,
    $_login,
    $_password,
    $_reading,
        $_writing;

    public function __construct($id = 0)
    {
        $this->_id = $id;
        if ($this->_id > 0) {

            $sql = "SELECT * FROM users WHERE id_user = '" . $this->_id . "'";
            $users = Db::getInstance()->query($sql);

            if ($users->count() > 0) {
                $row = $users->result();
                $this->_role = new Role($row['id_role']);
                $this->_name = $row['name_user'];
                $this->_surname = $row['surname_user'];
                $this->_mail = $row['mail_user'];
                $this->_photo = $row['photo_user'];
                $this->_login = $row['login_user'];
                $this->_password = $row['password_user'];
                $this->_reading = $row['reading_user'];
                $this->_writing = $row['writing_user'];
            }
        }
    }

    public function getId()
    {
        return $this->_id;
    }

    public function getRole()
    {
        return $this->_role;
    }

    public function getName()
    {
        return $this->_name;
    }

    public function getSurname()
    {
        return $this->_surname;
    }

    public function getMail()
    {
        return $this->_mail;
    }

    public function getPhoto()
    {
        return $this->_photo;
    }

    public function getLogin()
    {
        return $this->_login;
    }

    public function getPassword()
    {
        return $this->_password;
    }

    public function getReading(){
        return $this->_reading;
    }

    public function getWriting(){
        return $this->_writing;
    }

    public function __toString()
    {
        return $this->_name . ' ' . $this->_surname;
    }
}
