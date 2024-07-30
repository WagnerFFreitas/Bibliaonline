<?php
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "seu_banco_de_dados";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['livro'])) {
    $livro_id = intval($_GET['livro']);
    $sql = "SELECT id, numero FROM capitulos_biblia WHERE livro_id = $livro_id";
    $result = $conn->query($sql);
    $capitulos = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $capitulos[] = $row;
        }
    }
    echo json_encode($capitulos);
} elseif (isset($_GET['capitulo'])) {
    $capitulo_id = intval($_GET['capitulo']);
    $sql = "SELECT numero, texto FROM versiculos_biblia WHERE capitulo_id = $capitulo_id";
    $result = $conn->query($sql);
    $versiculos = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $versiculos[] = $row;
        }
    }
    echo json_encode($versiculos);
} else {
    $sql = "SELECT id, nome FROM livros_biblia";
    $result = $conn->query($sql);
    $livros = array();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $livros[] = $row;
        }
    }
    echo json_encode($livros);
}
$conn->close();
?>
