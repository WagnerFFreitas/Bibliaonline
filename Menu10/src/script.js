document.addEventListener('DOMContentLoaded', function() {
    const bookItems = document.querySelectorAll('.book-item');
    const chapterContent = document.getElementById('chapter-content');

    bookItems.forEach(bookItem => {
        bookItem.addEventListener('click', function() {
            const book = this.dataset.book;

            fetch(`${book}.html`) 
                .then(response => response.text())
                .then(html => {
                    chapterContent.innerHTML = html; // Insere o conteúdo na seção de capítulos
                })
                .catch(error => {
                    console.error('Erro ao carregar o livro:', error);
                });
        });
    });
});