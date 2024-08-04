<?php include_once"config.php";?>
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
<center><table class="table table-sm" style="width: 50%">
  <thead>
    <tr class="table-primary">
      <th scope="col">Antigo Testamento</th>
      <th scope="col">Novo Testamento</th>
    </tr>
  </thead>
  <tbody>
    <tr>
  <td><?php
        $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
        mysqli_set_charset($conn,"utf8");
        $sql = "SELECT * FROM tbbiblia_pt GROUP BY liv limit 39";
        $resultado = mysqli_query($conn, $sql);
    while($linha = mysqli_fetch_array($resultado)){
        echo '<a style="font-size:23px;" href="ler.php?livro='.$linha['livro'].'&cap=1">  '.$linha['livro'].'  </a> </p> ','';
}
        mysqli_close($conn);
    ?></td>
  <td><?php
        $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
        mysqli_set_charset($conn,"utf8");
        $sql = "SELECT * FROM tbbiblia_pt GROUP BY liv limit 39,100";
        $resultado = mysqli_query($conn, $sql);
    while($linha = mysqli_fetch_array($resultado)){
        echo '<a style="font-size:23px;" href="ler.php?livro='.$linha['livro'].'&cap=1">  '.$linha['livro'].'  </a> </p> ','';
}
        mysqli_close($conn);
    ?></td>
    </tr>
  </tbody>
</table>
</center>
<br>
<?php include_once"rodape.php";?>
<br>
</div>
</body>
</html>
