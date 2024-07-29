document.addEventListener('DOMContentLoaded', function() {
    // Funções para busca, marcadores, etc.
});
Backend (Node.js e Express):

Configuração do Servidor (server.js):
javascript
Copiar código
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configurar o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblia'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados.');
});

app.use(express.static('frontend'));
app.use(express.json());

// Rotas
app.get('/api/versiculos', (req, res) => {
    // Implementar lógica para buscar versículos
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Adicionar Nota
app.post('/api/notas', (req, res) => {
    const { versiculo_id, texto } = req.body;
    const sql = 'INSERT INTO notas (versiculo_id, texto) VALUES (?, ?)';
    db.query(sql, [versiculo_id, texto], (err, result) => {
        if (err) throw err;
        res.status(201).send({ id: result.insertId, versiculo_id, texto });
    });
});

// Buscar Notas
app.get('/api/notas/:versiculo_id', (req, res) => {
    const sql = 'SELECT * FROM notas WHERE versiculo_id = ?';
    db.query(sql, [req.params.versiculo_id], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.get('/api/busca', (req, res) => {
    const { query } = req.query;
    const sql = 'SELECT * FROM versiculos WHERE texto LIKE ?';
    db.query(sql, [`%${query}%`], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Criar Plano de Leitura
app.post('/api/planos', (req, res) => {
    const { nome, descricao } = req.body;
    const sql = 'INSERT INTO planos (nome, descricao) VALUES (?, ?)';
    db.query(sql, [nome, descricao], (err, result) => {
        if (err) throw err;
        res.status(201).send({ id: result.insertId, nome, descricao });
    });
});

// Buscar Planos de Leitura
app.get('/api/planos', (req, res) => {
    const sql = 'SELECT * FROM planos';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Exemplo com Jest
const request = require('supertest');
const app = require('./server'); // Seu arquivo de servidor

test('GET /api/busca deve retornar versículos', async () => {
    const response = await request(app).get('/api/busca?query=amor');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
});
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((username, password, done) => {
    // Lógica de autenticação
}));
// Exemplo de sanitização de entrada
const sanitizeHtml = require('sanitize-html');

app.post('/api/versiculos', (req, res) => {
    const texto = sanitizeHtml(req.body.texto);
    // Salvar texto sanitizado no banco de dados
});
const redis = require('redis');
const client = redis.createClient();
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configurar o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblia'
});

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados.');
});

app.use(express.static('frontend'));
app.use(express.json());

// Rota para buscar versículos
app.get('/api/versiculos/:livro_id/:capitulo_numero', (req, res) => {
    const { livro_id, capitulo_numero } = req.params;
    const sql = `
        SELECT v.numero, v.texto
        FROM versiculos v
        INNER JOIN capitulos c ON v.capitulo_id = c.id
        WHERE c.livro_id = ? AND c.numero = ?
    `;
    db.query(sql, [livro_id, capitulo_numero], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// Rota para buscar livros
app.get('/api/livros', (req, res) => {
    const sql = 'SELECT * FROM livros';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

document.addEventListener('DOMContentLoaded', function() {
    const livroSelect = document.getElementById('livroSelect');
    const resultadosBusca = document.getElementById('resultadosBusca');
    const searchForm = document.getElementById('searchForm');

    // Carregar livros
    fetch('/api/livros')
        .then(response => response.json())
        .then(livros => {
            livros.forEach(livro => {
                const option = document.createElement('option');
                option.value = livro.id;
                option.textContent = livro.nome;
                livroSelect.appendChild(option);
            });
        });

    // Buscar versículos
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const livroId = livroSelect.value;
        const capituloNumero = document.getElementById('capituloNumero').value;

        fetch(`/api/versiculos/${livroId}/${capituloNumero}`)
            .then(response => response.json())
            .then(versiculos => {
                resultadosBusca.innerHTML = '';
                versiculos.forEach(versiculo => {
                    const div = document.createElement('div');
                    div.textContent = `Versículo ${versiculo.numero}: ${versiculo.texto}`;
                    resultadosBusca.appendChild(div);
                });
            });
    });
});

document.getElementById('toggleModoNoturno').addEventListener('click', () => {
    document.body.classList.toggle('modo-noturno');
});
document.getElementById('compartilharVersiculo').addEventListener('click', () => {
    const textoVersiculo = 'Versículo compartilhado'; // Substitua pelo texto real do versículo
    if (navigator.share) {
        navigator.share({
            title: 'Versículo Bíblico',
            text: textoVersiculo,
            url: window.location.href
        }).catch(console.error);
    } else {
        alert('Seu navegador não suporta a API de Compartilhamento');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Carregar planos de leitura
    fetch('/api/planos')
        .then(response => response.json())
        .then(planos => {
            const listaPlanos = document.getElementById('listaPlanos');
            planos.forEach(plano => {
                const div = document.createElement('div');
                div.innerHTML = `<h3>${plano.nome}</h3><p>${plano.descricao}</p>`;
                listaPlanos.appendChild(div);
            });
        });

    // Adicionar novo plano
    document.getElementById('novoPlano').addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nomePlano').value;
        const descricao = document.getElementById('descricaoPlano').value;

        fetch('/api/planos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, descricao })
        })
        .then(response => response.json())
        .then(plano => {
            const listaPlanos = document.getElementById('listaPlanos');
            const div = document.createElement('div');
            div.innerHTML = `<h3>${plano.nome}</h3><p>${plano.descricao}</p>`;
            listaPlanos.appendChild(div);
        });
    });
});
// Exemplo com consultas parametrizadas
app.get('/api/versiculos/:livro_id/:capitulo_numero', (req, res) => {
    const { livro_id, capitulo_numero } = req.params;
    const sql = `
        SELECT v.numero, v.texto
        FROM versiculos v
        INNER JOIN capitulos c ON v.capitulo_id = c.id
        WHERE c.livro_id = ? AND c.numero = ?
    `;
    db.query(sql, [livro_id, capitulo_numero], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
    // Exemplo de validação
app.post('/api/planos', (req, res) => {
    const { nome, descricao } = req.body;
    if (!nome || !descricao) {
        return res.status(400).send({ error: 'Nome e descrição são obrigatórios' });
    }
    const sql = 'INSERT INTO planos (nome, descricao) VALUES (?, ?)';
    db.query(sql, [nome, descricao], (err, result) => {
        if (err) throw err;
        res.status(201).send({ id: result.insertId, nome, descricao });
    });
});
});
// Exemplo de teste com Jest
const request = require('supertest');
const app = require('./server');

test('GET /api/versiculos deve retornar versículos', async () => {
    const response = await request(app).get('/api/versiculos/1/1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
});
const redis = require('redis');
const client = redis.createClient();

// Cache para resultados de busca
app.get('/api/versiculos/:livro_id/:capitulo_numero', (req, res) => {
    const { livro_id, capitulo_numero } = req.params;
    const cacheKey = `versiculos:${livro_id}:${capitulo_numero}`;
    
    client.get(cacheKey, (err, cachedData) => {
        if (cachedData) {
            return res.send(JSON.parse(cachedData));
        }
        const sql = `
            SELECT v.numero, v.texto
            FROM versiculos v
            INNER JOIN capitulos c ON v.capitulo_id = c.id
            WHERE c.livro_id = ? AND c.numero = ?
        `;
        db.query(sql, [livro_id, capitulo_numero], (err, results) => {
            if (err) throw err;
            client.setex(cacheKey, 3600, JSON.stringify(results)); // Cache por 1 hora
            res.send(results);
        });
    });
});
// Exemplo de endpoint para buscar versículos
app.get('/api/versiculos/:livro_id/:capitulo_numero', (req, res) => {
    const { livro_id, capitulo_numero } = req.params;
    const sql = `
        SELECT v.numero, v.texto
        FROM versiculos v
        INNER JOIN capitulos c ON v.capitulo_id = c.id
        WHERE c.livro_id = ? AND c.numero = ?
    `;
    db.query(sql, [livro_id, capitulo_numero], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
// Exemplo de endpoint para buscar hinos
app.get('/api/hinos/:numero', (req, res) => {
    const { numero } = req.params;
    const sql = 'SELECT titulo, texto FROM hinos WHERE numero = ?';
    db.query(sql, [numero], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
// Exemplo de endpoint para buscar definição
app.get('/api/dicionario/:palavra', (req, res) => {
    const { palavra } = req.params;
    const sql = 'SELECT definicao FROM dicionario_biblico WHERE palavra = ?';
    db.query(sql, [palavra], (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});
function buscarVersiculos(livroId, capituloNumero) {
    fetch(`/api/versiculos/${livroId}/${capituloNumero}`)
        .then(response => response.json())
        .then(versiculos => {
            const container = document.getElementById('versiculos');
            container.innerHTML = '';
            versiculos.forEach(versiculo => {
                const div = document.createElement('div');
                div.innerHTML = `<strong>${versiculo.numero}</strong>: ${versiculo.texto}`;
                container.appendChild(div);
            });
        });
}

// app.js
function buscarHinos(numero) {
    fetch(`/api/hinos/${numero}`)
        .then(response => response.json())
        .then(hino => {
            const container = document.getElementById('hinos');
            container.innerHTML = `<h2>${hino.titulo}</h2><p>${hino.texto}</p>`;
        });
}

function buscarDefinicao(palavra) {
    fetch(`/api/dicionario/${palavra}`)
        .then(response => response.json())
        .then(definicao => {
            const container = document.getElementById('dicionario');
            container.innerHTML = `<p>${definicao.definicao}</p>`;
        });
}