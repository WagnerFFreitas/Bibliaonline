from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Carregar o arquivo JSON da Bíblia
with open('acf.json', encoding='utf-8-sig') as f:
    bible_data = json.load(f)

# Extrair os livros disponíveis
available_books = [book['name'] for book in bible_data]

# Criar um dicionário para mapear os capítulos de cada livro
chapters_per_book = {book['name']: len(book['chapters']) for book in bible_data}

# Criar um dicionário para mapear os versículos de cada capítulo de cada livro
verses_per_chapter = {}
for book in bible_data:
    verses_per_chapter[book['name']] = {}
    for i, chapter in enumerate(book['chapters']):
        verses_per_chapter[book['name']][i + 1] = len(chapter)

@app.route('/')
def index():
    return render_template('index.html', books=available_books)

@app.route('/get_chapters_and_verses', methods=['POST'])
def get_chapters_and_verses():
    book = request.form['book']
    chapters = list(range(1, chapters_per_book[book] + 1))
    verses = {chapter: list(range(1, verses_per_chapter[book][chapter] + 1)) for chapter in chapters}
    return jsonify({'chapters': chapters, 'verses': verses})

@app.route('/get_verse', methods=['POST'])
def get_verse():
    book = request.form['book']
    chapter = int(request.form['chapter'])
    verse = int(request.form['verse'])
    
    # Encontrar o texto do versículo
    book_data = next((b for b in bible_data if b["name"] == book), None)
    if book_data and chapter <= len(book_data["chapters"]) and verse <= len(book_data["chapters"][chapter - 1]):
        verse_text = book_data["chapters"][chapter - 1][verse - 1]
        return jsonify({'verse': verse_text})
    else:
        return jsonify({'verse': 'Versículo não encontrado'})

if __name__ == '__main__':
    app.run(debug=True)
