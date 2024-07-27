from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.spinner import Spinner
from kivy.uix.button import Button
from kivy.uix.scrollview import ScrollView
from kivy.uix.textinput import TextInput
from kivy.properties import StringProperty
from kivy.utils import get_color_from_hex
import json

class BibleApp(App):

    def build(self):
        self.bible_data = None

        layout = BoxLayout(orientation='vertical', spacing=10, padding=10)

        # Título da aplicação
        title_label = Label(text='INSPIRE O REINO', size_hint=(1, 0.1), font_size='24sp',
                            color=get_color_from_hex('#007bff'))

        # Componentes de seleção
        selection_layout = BoxLayout(orientation='horizontal', size_hint=(1, 0.1))
        self.book_spinner = Spinner(text='Escolha um livro', values=['Carregando...'], size_hint=(0.5, 1))
        self.chapter_spinner = Spinner(text='Capítulo', values=['Carregando...'], size_hint=(0.5, 1))
        selection_layout.add_widget(self.book_spinner)
        selection_layout.add_widget(self.chapter_spinner)

        # Botão para visualizar o capítulo
        self.view_button = Button(text='Visualizar Capítulo', size_hint=(1, 0.1),
                                  background_color=get_color_from_hex('#007bff'))
        self.view_button.bind(on_press=self.view_chapter)

        # Área de exibição do capítulo
        self.chapter_text = StringProperty('')

        self.verse_scroll = ScrollView(size_hint=(1, 0.7))
        self.verse_input = TextInput(text='', size_hint=(1, None),
                                     background_color=get_color_from_hex('#ffffff'),
                                     foreground_color=get_color_from_hex('#000000'),
                                     font_size='18sp',
                                     padding=(20, 20))  # Adiciona margens laterais

        self.verse_scroll.add_widget(self.verse_input)

        layout.add_widget(title_label)
        layout.add_widget(selection_layout)
        layout.add_widget(self.view_button)
        layout.add_widget(self.verse_scroll)

        self.load_bible_data()

        return layout

    def load_bible_data(self):
        try:
            with open('acf.json', 'r', encoding='utf-8-sig') as f:
                self.bible_data = json.load(f)
                self.populate_books()
        except FileNotFoundError:
            print("Arquivo 'acf.json' não encontrado.")
        except json.JSONDecodeError:
            print("Erro ao decodificar o arquivo JSON.")

    def populate_books(self):
        if self.bible_data:
            books = [book['name'] for book in self.bible_data]
            self.book_spinner.values = books
            self.book_spinner.text = 'Escolha um livro'
            self.book_spinner.bind(text=self.update_chapters)

    def update_chapters(self, spinner, text):
        if text != 'Escolha um livro':
            selected_book = next(book for book in self.bible_data if book['name'] == text)
            chapters = [str(i + 1) for i in range(len(selected_book['chapters']))]
            self.chapter_spinner.values = chapters
            self.chapter_spinner.text = 'Capítulo'

    def view_chapter(self, instance):
        book_name = self.book_spinner.text
        chapter_number = int(self.chapter_spinner.text)
        selected_book = next(book for book in self.bible_data if book['name'] == book_name)
        chapter_text = '\n'.join(selected_book['chapters'][chapter_number - 1])  # Chapters start from index 0
        self.verse_input.text = chapter_text

if __name__ == '__main__':
    BibleApp().run()
