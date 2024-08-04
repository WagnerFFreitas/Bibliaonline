<?php include_once"../config.php";?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>Bíblia</title>   
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>

<div class="container-fluid">
<?php include_once"menu.php";?>
<br>
<?php

        $q = htmlspecialchars($busca = $_GET['busca']);

         if (isset($_GET['pagina'])) {
            $pagina = $_GET['pagina'];
        } else {
            $pagina = 1;
        }
        $numerodepagina = 10;
        $offset = ($pagina-1) * $numerodepagina;

        $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
        mysqli_set_charset($conn,"utf8");
        // Check connection
        if (mysqli_connect_errno()){
            echo "Conexao falhou: " . mysqli_connect_error();
            die();
        }
        $total_paginas_sql = "SELECT COUNT(*) FROM tbbiblia_en WHERE texto LIKE '% " . mysqli_real_escape_string($conn, $busca) . " %'";
$result = mysqli_query($conn, $total_paginas_sql);
$total_linhas = mysqli_fetch_array($result)[0];
$total_paginas = ceil($total_linhas / $numerodepagina);

$conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
mysqli_set_charset($conn, "utf8");
$sql2 = "SELECT * FROM tbbiblia_en WHERE texto LIKE '% " . mysqli_real_escape_string($conn, $busca) . " %' LIMIT $offset, $numerodepagina";
$resultado2 = mysqli_query($conn, $sql2);

while ($linha2 = mysqli_fetch_array($resultado2)) {
    $texto = $linha2['texto'];
    $destacado = preg_replace('/(' . preg_quote($busca, '/') . ')/i', '<span style="background-color: yellow;">$1</span>', $texto);

    echo '<blockquote class="blockquote" style="font-size:23px;">
            <p class="mb-0"><a href="verciculo.php?livro=' . $linha2['livro'] . '&cap=' . $linha2['cap'] . '&ver=' . $linha2['ver'] . '">' . $linha2['livro'] . ',' . $linha2['cap'] . ' ' . $linha2['ver'] . ': </a> <div  class="resultado">' . $destacado . '</div></p>
          </blockquote>';
}
 echo '<br>';
        mysqli_close($conn);
    ?>
<br>
<div>
    <nav aria-label="...">
        <ul class="pagination justify-content-center">

            <?php if ($pagina > 1) { ?>
                <li class="page-item">
                    <a class="page-link" href="?pagina=<?php echo ($pagina - 1); ?>&busca=<?php echo $busca ?>">
                        <span aria-hidden="true">&lt;</span>
                        <span class="sr-only">Anterior</span>
                    </a>
                </li>
            <?php } else { ?>
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                        <span aria-hidden="true">&lt;</span>
                        <span class="sr-only">Anterior</span>
                    </a>
                </li>
            <?php } ?>

            <?php
            $inicio = $pagina - 2;
            $fim = $pagina + 2;

            if ($inicio < 1) {
                $fim += (1 - $inicio);
                $inicio = 1;
            }

            if ($fim > $total_paginas) {
                $inicio -= ($fim - $total_paginas);
                $fim = $total_paginas;
                if ($inicio < 1) {
                    $inicio = 1;
                }
            }

            for ($i = $inicio; $i <= $fim; $i++) {
                if ($i == $pagina) {
                    echo '<li class="page-item active"><a class="page-link" href="#">' . $i . '</a></li>';
                } else {
                    echo '<li class="page-item"><a class="page-link" href="?pagina=' . $i . '&busca=' . $busca . '">' . $i . '</a></li>';
                }
            }
            ?>

            <?php if ($pagina < $total_paginas) { ?>
                <li class="page-item">
                    <a class="page-link" href="?pagina=<?php echo ($pagina + 1); ?>&busca=<?php echo $busca ?>">
                        <span aria-hidden="true">&gt;</span>
                        <span class="sr-only">Próxima</span>
                    </a>
                </li>
            <?php } else { ?>
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                        <span aria-hidden="true">&gt;</span>
                        <span class="sr-only">Próxima</span>
                    </a>
                </li>
            <?php } ?>

        </ul>
    </nav>
</div>
<?php include_once"rodape.php";?>
</div>
</body>
</html>
