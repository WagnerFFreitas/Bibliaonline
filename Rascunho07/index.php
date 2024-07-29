<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "seu_usuario";
$password = "sua_senha";
$dbname = "biblia";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifique a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Buscar um versículo aleatório
$sql = "SELECT v.texto 
        FROM versiculos v
        JOIN capitulos c ON v.capitulo_id = c.id
        JOIN livros l ON c.livro_id = l.id
        ORDER BY RAND()
        LIMIT 1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo $row['texto'];
} else {
    echo "Nenhum versículo encontrado.";
}

$conn->close();
?>