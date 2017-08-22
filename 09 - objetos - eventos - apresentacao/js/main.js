console.log('main');
const divNotas = document.querySelector('div.notas');
const divMedia = document.querySelector('div.media');

const Notas = {
  notas: [],
  get media() { // média aritmética
    let soma = 0;
    for (let nota of this.notas) soma += nota;
    return soma / this.notas.length;
  },
  atualizaView: function () { // apresentar os dados
    let html = "";
    for (let nota of this.notas) { // for each
        html += `<p>${nota}</p>`; // string interpolada (crase)
    }
    divNotas.innerHTML = html;
    divMedia.textContent = this.media;
  },
  adiciona: function (nota) {
    let n = parseFloat(nota);
    if (!isNaN(n) && n >= 0 && n <= 10) this.notas.push(n);
    this.atualizaView();
  }
};

// eventos
const form = document.querySelector('form');
form.addEventListener('submit', function (evento) {
  Notas.adiciona(this.nota.value);
  evento.preventDefault();
});






/* */
