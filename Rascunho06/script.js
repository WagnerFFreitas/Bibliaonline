// Conecta ao banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'usuário',
    password: 'senha',
    database: 'nome_do_banco'
   });
   
   // Função para buscar por palavras-chave
   function buscaPalavrasChave() {
    const input = document.getElementById('busca-input');
    const button = document.getElementById('busca-button');
    const resultado = document.getElementById('resultado');
   
    button.addEventListener('click', () => {
    const palavraChave = input.value;
    const query = `SELECT * FROM livros WHERE titulo LIKE '%${palavraChave}%'`;
   
    db.query(query, (err, results) => {
    if (err) {
    console.error(err);
    } else {
    resultado.innerHTML = '';
    results.forEach((livro) => {
    const livroHTML = `
    <h2>${livro.titulo}</h2>
    <p>${livro.descricao}</p>
    `;
    resultado.insertAdjacentHTML('beforeend', livroHTML);
    });
    }
    });
    });
   }



   // Conecta ao banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'usuário',
    password: 'senha',
    database: 'nome_do_banco'
   });
   
   // Função para buscar por palavras-chave
   function buscaPalavrasChave() {
    const input = document.getElementById('busca-input');
    const button = document.getElementById('busca-button');
    const resultado = document.getElementById('resultado');
   
    button.addEventListener('click', () => {
    const palavraChave = input.value;
    const query = `SELECT * FROM livros WHERE titulo LIKE '%${palavraChave}%'`;
   
    db.query(query, (err, results) => {
    if (err) {
    console.error(err);
    } else {
    resultado.innerHTML = '';
    results.forEach((livro) => {
    const livroHTML = `
    <h2>${livro.titulo}</h2>
    <p>${livro.descricao}</p>
    `;
    resultado.insertAdjacentHTML('beforeend', livroHTML);
    });
    }
    });
    });
   }
   
   // Função para listar livros
   function listaLivros() {
    const livrosLista = document.getElementById('livros-lista');
   
    db.query('SELECT * FROM livros', (err, results) => {
    if (err) {
    console.error(err);
    } else {
    livrosLista.innerHTML = '';
    results.forEach((livro) => {
    const livroHTML = `
    <li>${livro.titulo}</li>
    `;
    livrosLista.insertAdjacentHTML('beforeend', livroHTML);
    });
    }
    });
   }
   
   // Função para listar capítulos
   function listaCapitulos() {
    const capitulosLista = document.getElementById('capitulos-lista');
   
    db.query('SELECT * FROM capitulos', (err, results) => {
    if (err) {
    console.error(err);
    } else {
    capitulosLista.innerHTML = '';
    results.forEach((capitulo) => {
    const capituloHTML = `
    <li>${capitulo.titulo}</li>
    `;
    capitulosLista.insertAdjacentHTML('beforeend', capituloHTML);
    });
    }
    });
   }
   
   // Função para listar versículos
   function listaVersiculos() {
    const versiculosLista = document.getElementById('versiculos-lista');
   
    db.query('SELECT * FROM versiculos', (err, results) => {
    if (err) {
    console.error(err);
    } else {
    versiculosLista.innerHTML = '';
    results.forEach((versiculo) => {
    const versiculoHTML = `
    <li>${versiculo.texto}</li>
    `;
    versiculosLista.insertAdjacentHTML('beforeend', versiculoHTML);
    });
    }
    });
   }
   
   // Inicializa as funções
   buscaPalavrasChave();
   listaLivros();
   listaCapitulos();
   listaVersiculos();


   const livrosLista = document.getElementById('livros-lista');
const hinosLista = document.getElementById('hinos-lista');

// Função para carregar os livros da Bíblia
function carregarLivros() {
 fetch('db.json')
 .then(response => response.json())
 .then(data => {
 const livros = data.livros;
 livros.forEach(livro => {
 const livroHTML = `
 <li>${livro.nome}</li>
 `;
 livrosLista.insertAdjacentHTML('beforeend', livroHTML);
 });
 });
}

// Função para carregar os hinos da Harpa Cristã
function carregarHinos() {
 fetch('db.json')
 .then(response => response.json())
 .then(data => {
 const hinos = data.hinos;
 hinos.forEach(hino => {
 const hinoHTML = `
 <li>${hino.nome}</li>
 `;
 hinosLista.insertAdjacentHTML('beforeend', hinoHTML);
 });
 });
}

// Chamar as funções para carregar os livros e hinos
carregarLivros();
carregarHinos();// Função para carregar os versículos da Bíblia
function carregarVersiculos() {
 fetch('db.json')
.then(response => response.json())
.then(data => {
 const versiculos = data.versiculos;
 versiculos.forEach(versiculo => {
 const versiculoHTML = `
 <li>${versiculo.nome}</li>
 `;
 document.getElementById('versiculos-lista').insertAdjacentHTML('beforeend', versiculoHTML);
 });
 });
}

// Função para carregar a definição de uma palavra do dicionário
function carregarDefinicao(palavra) {
 fetch('db.json')
.then(response => response.json())
.then(data => {
 const dicionario = data.dicionario;
 const palavraDefinicao = dicionario[palavra];
 document.getElementById('palavra-definicao').innerHTML = palavraDefinicao;
 });
}

// Função para carregar o texto de um versículo
function carregarVersiculo(versiculo) {
 fetch('db.json')
.then(response => response.json())
.then(data => {
 const versiculos = data.versiculos;
 const versiculoTexto = versiculos[versiculo].texto;
 document.getElementById('versiculo-texto').innerHTML = versiculoTexto;
 });
}

// Chamar as funções para carregar os versículos e o dicionário
carregarVersiculos();
carregarDicionario();

// Evento de clique para carregar a definição de uma palavra do dicionário
document.getElementById('dicionario-lista').addEventListener('click', function(e) {
 if (e.target.tagName === 'LI') {
 const palavra = e.target.textContent;
 carregarDefinicao(palavra);
 }
});

// Evento de clique para carregar o texto de um versículo
document.getElementById('versiculos-lista').addEventListener('click', function(e) {
 if (e.target.tagName === 'LI') {
 const versiculo = e.target.textContent;
 carregarVersiculo(versiculo);
 }
});

// script.js
const conteudo = document.getElementById('conteudo');
const sidebar = document.getElementById('sidebar');

// função para carregar o conteúdo principal
function carregarConteudo() {
 fetch('conteudo.html')
.then(response => response.text())
.then(data => {
 conteudo.innerHTML = data;
 });
}

// função para carregar a barra lateral
function carregarSidebar() {
 fetch('sidebar.html')
.then(response => response.text())
.then(data => {
 sidebar.innerHTML = data;
 });
}

// chamar as funções para carregar o conteúdo principal e a barra lateral
carregarConteudo();
carregarSidebar();

// função para pesquisar por palavras-chave
function pesquisar() {
 const input = document.getElementById('pesquisa-input');
 const palavraChave = input.value;
 const resultados = document.getElementById('resultados');
 resultados.innerHTML = '';

 fetch(`pesquisa.html?q=${palavraChave}`)
.then(response => response.text())
.then(data => {
 resultados.innerHTML = data;
 });
}

// adicionar evento de clique para a busca
document.getElementById('pesquisa-button').addEventListener('click', pesquisar);