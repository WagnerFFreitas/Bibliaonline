document.addEventListener("DOMContentLoaded", function() {
    fetch('fetch_books.php')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            data.forEach(book => {
                const li = document.createElement('li');
                li.textContent = book.nome;
                li.dataset.id = book.id;
                li.addEventListener('mouseenter', () => {
                    document.getElementById('hover-sound').play();
                });
                li.addEventListener('click', () => {
                    document.getElementById('click-sound').play();
                    loadChapters(book.id);
                });
                bookList.appendChild(li);
            });
        });
});

function loadChapters(bookId) {
    fetch(`fetch_books.php?livro=${bookId}`)
        .then(response => response.json())
        .then(data => {
            const chaptersDiv = document.getElementById('chapters');
            chaptersDiv.innerHTML = '';
            data.forEach(chapter => {
                const div = document.createElement('div');
                div.textContent = `Capítulo ${chapter.numero}`;
                div.dataset.id = chapter.id;
                div.addEventListener('click', () => {
                    loadVerses(chapter.id);
                });
                chaptersDiv.appendChild(div);
            });
        });
}

function loadVerses(chapterId) {
    fetch(`fetch_books.php?capitulo=${chapterId}`)
        .then(response => response.json())
        .then(data => {
            const versesDiv = document.getElementById('verses');
            versesDiv.innerHTML = '';
            data.forEach(verse => {
                const p = document.createElement('p');
                p.textContent = `${verse.numero}: ${verse.texto}`;
                versesDiv.appendChild(p);
            });
        });
}


function loadChapters(bookId) {
    fetch(`fetch_books.php?livro=${bookId}`)
        .then(response => response.json())
        .then(data => {
            const chaptersDiv = document.getElementById('chapters');
            chaptersDiv.innerHTML = '';
            data.forEach(chapter => {
                const div = document.createElement('div');
                div.textContent = `Capítulo ${chapter.numero}`;
                div.dataset.id = chapter.id;
                div.addEventListener('click', () => {
                    loadVerses(chapter.id);
                });
                chaptersDiv.appendChild(div);
            });
        });
}

function loadVerses(chapterId) {
    fetch(`fetch_books.php?capitulo=${chapterId}`)
        .then(response => response.json())
        .then(data => {
            const versesDiv = document.getElementById('verses');
            versesDiv.innerHTML = '';
            data.forEach(verse => {
                const p = document.createElement('p');
                p.textContent = `${verse.numero}: ${verse.texto}`;
                versesDiv.appendChild(p);
            });
        });
}

document.addEventListener("DOMContentLoaded",