console.log('main');
const divNotas = document.querySelector('div.notas');
const divMedia = document.querySelector('div.media');
const divMenor = document.querySelector('div.menor');
const divMaior = document.querySelector('div.maior');
const divAmplitude = document.querySelector('div.amplitude');
const divMediana = document.querySelector('div.mediana');
const divBarras = document.querySelector('div.barras');

// getter cria uma propriedade calculada!
const Notas = {
  notas: [],
  classes: [],
  // fim classes
  get mediana() {
    return mediana(this.notas);
  },
  get amplitude() {
    return this.maior - this.menor;
  },
  get maior() {
    return this.notas[this.notas.length - 1];
  },
  get menor() {
    return min(this.notas);
  },
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
    divMenor.textContent = this.menor;
    divMaior.textContent = this.maior;
    divAmplitude.textContent = this.amplitude;
    divMediana.textContent = this.mediana;

    let escala = 0;
    for (let c of this.classes) {
      c.zerar();
      for (let n of this.notas) c.conta(n);
      if (c.contagem > escala) escala = c.contagem;
    }
    for (let c of this.classes) c.desenha(escala);

  },
  adiciona: function (nota) {
    let n = parseFloat(nota);
    if (!isNaN(n) && n >= 0 && n <= 10) {
      this.notas.push(n);
      this.notas.sort(function (a, b) {
        return a - b
      });
      this.atualizaView();
    }
  }
}; // fim Notas

var de0a2 = new Classe("de 0 a 2", 0, 2);
var de2a4 = new Classe("de 2 a 4", de0a2, 4);
var de4a6 = new Classe("de 4 a 6", de2a4, 6);
var de6a8 = new Classe("de 6 a 8", de4a6, 8);
var de8a10 = new Classe("de 8 a 10", de6a8, 10);
Notas.classes = [de0a2, de2a4, de4a6, de6a8, de8a10];

// eventos // callback
const form = document.querySelector('form');
form.addEventListener('submit', function (evento) {
  Notas.adiciona(this.nota.value);
  evento.preventDefault();
});

function min(vetor) {
  var m = vetor[0];
  for (let i = 1; i < vetor.length; i++) {
    if (vetor[i] < m) m = vetor[i];
  }
  return m;
}

var vet = [3, 4, 2, 1, 6, 8, 9, 4, 4, 10];

console.log(min(vet)); // 1
console.log(min([5, 7, 2, 9])); // 2
console.log(min([-8, 7, 2])); // -8
console.log(min([5])); // 5
console.log(min([]));

var vet2 = [2, 4, 5, 6, 9];
console.log(mediana(vet2)); // 5
console.log(mediana([2, 4, 8, 9])); // 6

function mediana(vetor) {
  if (vetor.length % 2 === 1) { // impar
    return vetor[parseInt(vetor.length / 2)];
  } else { // par
    let a = vetor[parseInt(vetor.length / 2)];
    let b = vetor[parseInt(vetor.length / 2) - 1];
    return (a + b) / 2;
  }
}

// funções, revisitando!

// função declarada
function soma(a, b) { return a + b; }
// função como expressão atribuída
let subtrai = function(a, b) { return a - b; };

// função como expressão lambda
let multiplica = (a, b) => a * b;
console.log(multiplica(2, 8));

function Classe(nome, de, ate) { //

  this.nome = nome;
  this.de = de;
  this.ate = ate;
  this.contagem = 0;

  var label = document.createElement('label');
  label.textContent = this.nome;
  divBarras.appendChild(label);

  this.div = document.createElement('div');
  // this.div.className = 'barra';
  this.div.classList.add('barra');
  this.div.textContent = '0';
  divBarras.appendChild(this.div);

  this.desenha = function (escala) {
    let tamanho = this.contagem / escala * 100;
    this.div.style.width = `${tamanho}%`;
    this.div.textContent = this.contagem;
  }

  this.zerar = function () {
    this.contagem = 0;
  }

  this.conta = function(n) {
    if (this.verifica(n)) this.contagem++;
  }

  this.verifica = function(n) {
    if (this.de instanceof Classe) {
      // início aberto
      return n > this.de.ate && n <= this.ate;
    }
    // intervalo fechado
    return n >= this.de && n <= this.ate;
  }
}





/* */
