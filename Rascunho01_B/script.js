function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Carregar dados da Bíblia
fetch('bible_books.json')
    .then(response => response.json())
    .then(data => {
    const sidebarList = document.getElementById('sidebar-list');
    const bookContent = document.getElementById('book-content');
    data.forEach(book => {
        const sidebarItem = document.createElement('li');
        const sidebarLink = document.createElement('a');
        sidebarLink.href = "#";
        sidebarLink.textContent = book.name;
        sidebarLink.onclick = () => showBook(book);
        sidebarItem.appendChild(sidebarLink);
        sidebarList.appendChild(sidebarItem);
    });
    function showBook(book) {
        bookContent.innerHTML = '';
        const title = document.createElement('h2');
        title.textContent = book.name;
        bookContent.appendChild(title);

        book.chapters.forEach(chapter => {
        const chapterDiv = document.createElement('div');
        chapterDiv.classList.add('chapter');
        const chapterTitle = document.createElement('h3');
        chapterTitle.textContent = `Capítulo ${chapter.chapter}`;
        chapterDiv.appendChild(chapterTitle);

        chapter.verses.forEach((verse, index) => {
            const verseDiv = document.createElement('div');
            verseDiv.classList.add('verse');
            const verseNumber = document.createElement('span');
            verseNumber.textContent = `${index + 1}`;
            const verseText = document.createElement('span');
            verseText.textContent = verse;
            verseDiv.appendChild(verseNumber);
            verseDiv.appendChild(verseText);
            chapterDiv.appendChild(verseDiv);
        });

        bookContent.appendChild(chapterDiv);
        });
    }
    });

// Carregar dados dos hinos da harpa
fetch('harp_hymns.json')
    .then(response => response.json())
    .then(data => {
    const harpContent = document.getElementById('harp-content');

    data.forEach(hymn => {
        const hymnDiv = document.createElement('div');
        hymnDiv.classList.add('hymn');
        const hymnTitle = document.createElement('h3');
        hymnTitle.textContent = `${hymn.number} - ${hymn.title}`;
        hymnDiv.appendChild(hymnTitle);

        hymn.verses.forEach(verse => {
        const verseDiv = document.createElement('div');
        verseDiv.classList.add('verse');
        verseDiv.textContent = verse;
        hymnDiv.appendChild(verseDiv);
        });

        harpContent.appendChild(hymnDiv);
    });
    });

// Carregar dados do dicionário bíblico
fetch('bible_dictionary.json')
    .then(response => response.json())
    .then(data => {
    const dictionaryContent = document.getElementById('dictionary-content');

    data.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('dictionary-entry');
        const entryTerm = document.createElement('h3');
        entryTerm.textContent = entry.term;
        entryDiv.appendChild(entryTerm);

        const entryDefinition = document.createElement('p');
        entryDefinition.textContent = entry.definition;
        entryDiv.appendChild(entryDefinition);

        dictionaryContent.appendChild(entryDiv);
    });
    });