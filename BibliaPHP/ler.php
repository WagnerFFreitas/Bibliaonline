<?php include_once"config.php";?>
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8"> 
  <title>Bíblia</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>
<body>
  <?php 
  $livro = $_GET['livro'];
  $cap = $_GET['cap'];
  $ver = '1';
  ?>
<div class="container-fluid">
<?php include_once"menu.php";?>
<br>

<table style="undefined;table-layout: fixed; width: 250px">
<colgroup>
<col style="width: 150px">
<col style="width: 50px">
<col style="width: 30px">
</colgroup>
<thead>
  <tr>
    <th>Livro</th>
    <th>Cap</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><form method="get"  class="form-group" name="dataForm2" action="ler.php">
<input type="text" hidden name="cap" value="1">
  <select  name="livro" class="form-control" onchange="document.forms['dataForm2'].submit();">
    <option value='<?php echo $livro;?>'><?php echo $livro;?></option>
  <?php
  $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
        mysqli_set_charset($conn,"utf8");
   $sql3 = "SELECT livro from tbbiblia_pt GROUP BY liv";
   $resultado3 = mysqli_query($conn,$sql3);
   while($dados3 = mysqli_fetch_array($resultado3)){
   $slivro = $dados3['livro'];
echo "<option value='$slivro'>$slivro</option>";
} 
?>
</select>
</form></td>
    <td><form method="get"  class="form-group" name="dataForm3" action="ler.php">
<input type="text" hidden name="livro" value="<?php echo $livro;?>">
 <select  name="cap" class="form-control" onchange="document.forms['dataForm3'].submit();">
  <option value='<?php echo $cap;?>'><?php echo $cap;?></option>
  <?php
  $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
        mysqli_set_charset($conn,"utf8");
  $paginar = "SELECT cap from tbbiblia_pt WHERE livro ='$livro' GROUP BY cap";
   $pagi = mysqli_query($conn,$paginar);
   $rowcount=mysqli_num_rows($pagi);
   //
   $sql3 = "SELECT cap from tbbiblia_pt WHERE livro ='$livro' GROUP BY cap";
   $resultado3 = mysqli_query($conn,$sql3);
   while($linha = mysqli_fetch_array($resultado3)){
   $caps = $linha['cap'];
echo "<option value='$caps'>$caps</option>";
} 
?>
</select>
</form></td>
  </tr>
</tbody>
</table>
<br>
 <div><?php
       echo '<h4>',$livro = $_GET['livro']; echo ",";  echo $cap = $_GET['cap'],'</h4>';
        $conn = mysqli_connect($servidor, $dbusuario, $dbsenha, $dbname);
        mysqli_set_charset($conn,"utf8");
        $sql = "SELECT * FROM tbbiblia_pt WHERE livro='$livro' and cap='$cap'";
        $resultado = mysqli_query($conn, $sql);
    while($linha = mysqli_fetch_array($resultado)){
        echo'<blockquote class="blockquote" style="font-size:23px;">
        <p class="mb-0">'.$linha['ver'].'  '.$linha['texto'].'</p>
        </blockquote>';
}
    ?></div>
<div style="text-align:center"><a  style="font-size:23px;"  href="ler.php?livro=<?php 
echo $livro;?>&cap=<?php 
$p1= $_GET['cap'];
$p2=$_GET['cap'];
 if($p2<=1){
 $volta=$p2=1;
 }else{
 $volta=$p1-1;
 };
 echo $volta;?>"><?php 
echo $livro;?> <?php 
echo $volta;?></a> | <?php //echo 'lendo:'.$livro.' '.$_GET['cap'];?>
<a style="font-size:23px;"  href="ler.php?livro=<?php 
echo $livro;?>&cap=<?php if($rowcount==$p2){
 $avanca=$p2;
 }else{
 $avanca=$p1+1;
 };
 echo $avanca;?>"> <?php 
echo $livro;?> <?php 
echo $avanca;?></a> 
</div>
<br>
<?php include_once"rodape.php";?>
</div>
</body>
</html>