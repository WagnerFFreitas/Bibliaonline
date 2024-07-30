<?php
    session_start();
    include "php/conexao.php";
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Biblia Sagrada - KJF</title>
    <meta name="description" content="Bíblia Sagrada. Fonte de vida! Alimento para alma, a revelação de DEUS para o homem, e explicações das mais diversas para questões de todas as áreas de nossas vidas.">
    <meta name="keywords" content="Bíblia, Livro, ANTIGO TESTAMENTO, João Ferreira de Almeida Gênesis, Êxodo, Levítico, Números, Deuteronômio, Josué, Juízes, Rute, I Samuel, II Samuel, I Reis, II Reis, I Crônicas, II Crônicas, Esdras, Neemias, Ester, Jó, Salmos, Provérbios, Eclesiastes, Cântico dos Cânticos, Isaías, Jeremias, Lamentações Ezequiel, Daniel, Oséias, Joel, Amós, Obadias, Jonas, Miquéias, Naum, Habacuque, Sofonias, Ageu, Zacarias, Malaquias, NOVO TESTAMENTO, Mateus, Marcos, Lucas, João, Atos, Romanos, I Coríntios, II Coríntios, Gálatas, Efésios, Filipenses, Colossenses, I Tessalonicenses, II Tessalonicenses, I Timóteo, II Timóteo, Tito, Filemom, Hebreus, Tiago,I Pedro, II Pedro, I João, II João, III João   Judas, Apocalipse. Trabalahadores da Seara.">
    <?php include "php/headHome.php"?>
</head>

<body id="degrade">
    <!-- CABEÇALHO -->
    <header class="cabecalho-home">
        <div class="intro">
            <?php
                $query_header_home = "SELECT id, logo_ts, icone_bs, titulo, sub_titulo, desc_header, link_desc FROM header_home";
                $result_header_home = $conn->prepare($query_header_home);
                $result_header_home->execute();                
                while($row_header_home = $result_header_home->fetch(PDO::FETCH_ASSOC)){
                    extract($row_header_home);
                    echo "<h1>" . $titulo . "</h1>";
                    echo "<p>" . $sub_titulo . "</p>";
                }
            ?>            
        </div>

        <div id="intro-home-ts">
            <?php 
                echo "<p>" . $desc_header . ": <a href='$link_desc' target='_blank'><span class='mls'>Trabalhadores da Seara</span></a></p>";
             ?>
        </div>        
    </header>

    <section>
        <div id="alt-pesquisa"><img src="imagens/pesquisar.png"> Pesquisa:</div>
        <div class="alt" >
            <input class="input-search" alt="lista-clientes" id="filtro-nome" placeholder="Use Acento se Necessário" />
        </div>

        <table id="lista" style="width: 80%; margin: auto;" class="degrade-tbl">
        <caption class="at">ANTIGO TESTAMENTO</caption>
        <tr>
            <td><a href="./at/gn/gn.php">Gênesis</a></td>
            <td><a href="./at/ex/ex.php">Êxodo</a></td>
            <td><a href="./at/lv/lv.php">Levítico</a></td>
            <td><a href="./at/nm/nm.php">Números</a></td>
        </tr>
        <tr>
            <td><a href="./at/dt/dt.php">Deuteronômio</a></td>
            <td><a href="./at/js/js.php">Josué</a></td>
            <td><a href="./at/jz/jz.php">Juízes</a></td>
            <td><a href="./at/rt/rt.php">Rute</a></td>
        </tr>
        <tr>
            <td><a href="./at/1sm/1sm.php">I Samuel</a></td>
            <td><a href="./at/2sm/2sm.php">II Samuel</a></td>
            <td><a href="./at/1rs/1rs.php">I Reis</a></td>
            <td><a href="./at/2rs/2rs.php">II Reis</a></td>
        </tr>
        <tr>
            <td><a href="./at/1cr/1cr.php">I Crônicas</a></td>
            <td><a href="./at/2cr/2cr.php">II Crônicas</a></td>
            <td><a href="./at/ed/ed.php">Esdras</a></td>
            <td><a href="./at/ne/ne.php">Neemias</a></td>
        </tr>
        <tr>
            <td><a href="./at/et/es.php">Ester</a></td>
            <td><a href="./at/jo/jo.php">Jó</a></td>
            <td><a href="./at/sl/sl.php">Salmos</a></td>
            <td><a href="./at/pv/pv.php">Provérbios</a></td>
        </tr>
        <tr>
            <td><a href="./at/ec/ec.php">Eclesiastes</a></td>
            <td><a href="./at/ct/ct.php">Cântico dos Cânticos</a></td>
            <td><a href="./at/is/is.php">Isaías</a></td>
            <td><a href="./at/jr/jr.php">Jeremias</a></td>
        </tr>
        <tr>
            <td><a href="./at/lm/lm.php">Lamentações</a></td>
            <td><a href="./at/ez/ez.php">Ezequiel</a></td>
            <td><a href="./at/dn/dn.php">Daniel</a></td>
            <td><a href="./at/os/os.php">Oséias</a></td>
        </tr>
        <tr>
            <td><a href="./at/jl/jl.php">Joel</a></td>
            <td><a href="./at/am/am.php">Amós</a></td>
            <td><a href="./at/ob/ob.php">Obadias</a></td>
            <td><a href="./at/jn/jn.php">Jonas</a></td>
        </tr>
        <tr>
            <td><a href="./at/mq/mq.php">Miquéias</a></td>
            <td><a href="./at/na/na.php">Naum</a></td>
            <td><a href="./at/hb/hb.php">Habacuque</a></td>
            <td><a href="./at/sf/sf.php">Sofonias</a></td>
        </tr>
        <tr>
            <td><a href="./at/ag/ag.php">Ageu</a></td>
            <td><a href="./at/zc/zc.php">Zacarias</a></td>
            <td><a href="./at/ml/ml.php">Malaquias</a></td>
            <td style="opacity: 0.0;">Antigo___Testamento</td>
        </tr>
    </table>
    <br>
    <table id="lista" style="width: 80%; margin: auto;" class="degrade-tbl">
    <caption class="nt">NOVO TESTAMENTO</caption>
        <tr>
            <td><a href="./nt/mt/mt.php">Mateus</a></td>
            <td><a href="./nt/mc/mc.php">Marcos</a></td>
            <td><a href="./nt/lc/lc.php">Lucas</a></td>
            <td><a href="./nt/jo/jo.php">João</a></td>
        </tr>
        <tr>
            <td><a href="./nt/at/at.php">Atos</a></td>
            <td><a href="./nt/rm/rm.php">Romanos</a></td>
            <td><a href="./nt/1co/1co.php">I Coríntios</a></td>
            <td><a href="./nt/2co/2co.php">II Coríntios</a></td>
        </tr>
        <tr>
            <td><a href="./nt/gl/gl.php">Gálatas</a></td>
            <td><a href="./nt/ef/ef.php">Efésios</a></td>
            <td><a href="./nt/fp/fp.php">Filipenses</a></td>
            <td><a href="./nt/cl/cl.php">Colossenses</a></td>
        </tr>
        <tr>
            <td><a href="./nt/1ts/1ts.php">I Tessalonicenses</a></td>
            <td><a href="./nt/2ts/2ts.php">II Tessalonicenses</a></td>
            <td><a href="./nt/1tm/1tm.php">I Timóteo</a></td>
            <td><a href="./nt/2tm/2tm.php">II Timóteo</a></td>
        </tr>
        <tr>
            <td><a href="./nt/tt/tt.php">Tito</a></td>
            <td><a href="./nt/fl/fl.php">Filemom</a></td>
            <td><a href="./nt/hb/hb.php">Hebreus</a></td>
            <td><a href="./nt/tg/tg.php">Tiago</a></td>
        </tr>
        <tr>
            <td><a href="./nt/1pe/1pe.php">I Pedro</a></td>
            <td><a href="./nt/2pe/2pe.php">II Pedro</a></td>
            <td><a href="./nt/1jo/1jo.php">I João</a></td>
            <td><a href="./nt/2jo/2jo.php">II João</a></td>
        </tr>
        <tr>
            <td><a href="./nt/3jo/3jo.php">III João</a></td>
            <td><a href="./nt/jd/jd.php">Judas</a></td>
            <td><a href="./nt/ap/ap.php">Apocalipse</a></td>
            <td style="opacity: 0.0;">Antigo___Testamento</td>
        </tr>
    </table>
    </section>
    <script src="assets/js/function.js"></script>

    <footer>
        <p>Copyright &copy;2022</p>
        <p><a href="https://github.com/bibliasagrada/kjf" target="_blank">Saiba mais sobre o Projeto</a></p>
        <p class="mls">by ¬Marcus L.S</p>
        <br>
        <a href="https://mlssystem.github.io/trabalhadoresdaseara/bibliologia" target="_blank">
        <h1 class="logo-index">Trabalhadores da Seara</h1></a>
        <a href="index.php"><h1 class="top">top</h1></a>
    </footer>
</body>
</html>
