document.addEventListener('DOMContentLoaded', function() {
    const bookItems = document.querySelectorAll('.book-item');
    const chapterLists = document.querySelectorAll('.chapter-list');

    bookItems.forEach(bookItem => {
        bookItem.addEventListener('click', function() {
            const book = this.dataset.book;

            chapterLists.forEach(chapterList => {
                chapterList.style.display = 'none';
            });

            const chapterListToShow = document.querySelector(`.chapter-list[data-book="${book}"]`);
            if (chapterListToShow) {
                chapterListToShow.style.display = 'block';
            }
        });
    });
});