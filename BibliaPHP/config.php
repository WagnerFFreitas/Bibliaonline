<?php
 $servidor = "localhost";
 $dbusuario = "root";
 $dbsenha = "";
 $dbname = "biblia";
 $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
 mysqli_set_charset($conn,"utf8");
?>