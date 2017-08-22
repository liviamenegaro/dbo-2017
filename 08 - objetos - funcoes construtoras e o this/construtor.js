console.log('construtor.js');
// FUNÇÃO CONSTRUTORA
function Dado(faces = 6) {
  // PROPRIEDADES
  this.faces = faces;
  this.valor = 1;
  // MÉTODOS
  this.rolar = function () {
    this.valor = parseInt(Math.random() * this.faces) + 1;
  }
}

let d = new Dado(12);
console.log(d);
d.rolar();
console.log(d.valor); // ?

// todas as variáveis usam o mesmo objeto Dado
let w1 = new Dado();
let w2 = w1;
let w3 = w2;

function Moeda(op1 = 'Cara', op2 = 'Coroa') {
  this.op1 = op1;
  this.op2 = op2;
  this.valor = op1;
  // this.lancar = function() {
  //  var n = parseInt(Math.random() * 2);
  //  this.valor = n == 0 ? this.op1 : this.op2;
  // }
}

Moeda.prototype.lancar = function() {
  var n = parseInt(Math.random() * 2);
  this.valor = n == 0 ? this.op1 : this.op2;
}

let m = new Moeda();
m.lancar();
console.log(m)
console.log(m.valor)



// versão JSON
// var Dado = function (faces = 6) {
//   return {
//     'valor': 1,
//     'faces': faces,
//     'rolar': function () {
//       this.valor = parseInt(Math.random() * this.faces) + 1;
//     }
//   };
// }
