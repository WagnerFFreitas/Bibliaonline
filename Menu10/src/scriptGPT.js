document.addEventListener('DOMContentLoaded', () => {
    const bookItems = document.querySelectorAll('.sidebar ul li');
    const capitulosDiv = document.getElementById('capitulos');

    const capitulos = {
        genesis: [
            'Capítulo 01', 'Capítulo 02', 'Capítulo 03', 'Capítulo 04', 
            'Capítulo 05', 'Capítulo 06', 'Capítulo 07', 'Capítulo 08', 
            'Capítulo 09', 'Capítulo 10', 'Capítulo 11', 'Capítulo 12', 
            'Capítulo 13', 'Capítulo 14'
        ],
        // Adicione os capítulos dos outros livros aqui
    };

    bookItems.forEach(item => {
        item.addEventListener('click', () => {
            const livro = item.getAttribute('data-livro');
            displayChapters(capitulos[livro]);
        });
    });

    function displayChapters(chapters) {
        capitulosDiv.innerHTML = '';
        if (chapters) {
            chapters.forEach(chapter => {
                const button = document.createElement('button');
                button.textContent = chapter;
                capitulosDiv.appendChild(button);
            });
        }
    }
});
