const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBTZXAgMDEgMjAyMiAxMjo1MjoxMyBHTVQrMDAwMC5WaXR0b3JlbWFub2VsMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE2NjIwMzY3MzN9.-zgbRVM3gEWC2O4CcX0BXjjVU7rT8-BhaekHBsjaF_8";

const texto = document.querySelector(".versiculo");
const livros = document.querySelector(".livro-nome");
const capitulo = document.querySelector(".capitulo-number");
const versiculo = document.querySelector(".versiculo-number");

async function getDados() {
  const header = {
    Authorization: `Bearer ${Token}`,
  };
  return await fetch(
    `https://www.abibliadigital.com.br/api/verses/acf/:abbrev/random`,
    {
      method: "GET",
      headers: header,
    }
  )
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      const textoBiblico = data.text;
      const livroName = data.book.name;
      const capituloNum = data.chapter;
      const versiculoNum = data.number;

      texto.textContent += textoBiblico;
      livros.textContent += livroName;
      capitulo.textContent += capituloNum;
      versiculo.textContent += versiculoNum;
    })
    .catch((error) => {
      error.log(error);
    });
}
getDados();
