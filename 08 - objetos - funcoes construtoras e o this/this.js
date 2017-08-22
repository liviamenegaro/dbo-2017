console.log('this.js');

var valor = 6;

function add(v) { // this é o objeto window por padrão
  return this.valor + v;
}

var resp = add(5);
console.log(resp);

var o = {
  'valor': 9
};

console.log(add(1)); // ?

// alterando o this: fun.call(obj, parâmetros)
var resp2 = add.call(o, 1);

console.log(resp2);

document.querySelector('button').addEventListener('click', function () {
  console.log(this); // quem é o this??
});












//
