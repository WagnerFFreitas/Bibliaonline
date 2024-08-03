document.addEventListener('DOMContentLoaded', function() {
    const bookItems = document.querySelectorAll('.book-item');
    const chapterContent = document.getElementById('chapter-content');
    let currentBook = null; // Armazena o livro atualmente exibido

    bookItems.forEach(bookItem => {
        bookItem.addEventListener('click', function() {
            const book = this.dataset.book;

            if (book === currentBook) { // Se o livro atual é o mesmo, oculta os capítulos
                chapterContent.innerHTML = ''; // Limpa o conteúdo
                currentBook = null;
            } else {
                fetch(`${book}.html`)
                    .then(response => response.text())
                    .then(html => {
                        chapterContent.innerHTML = html;
                        currentBook = book; // Define o livro atual
                    })
                    .catch(error => {
                        console.error('Erro ao carregar o livro:', error);
                    });
            }
        });
    });
});