//em vez de function Fracao() {...}
//const => constante // não pode ser redefinido
const Fracao = function (numerador, denominador=1) {
  if (denominador === 0) {
    // lançamento de exceção!
    throw "Denominador inválido: não pode ser zero";
  }
  return {
    'numerador': numerador,
    'denominador': denominador,
    'multiplica': function (outra) {
      return Fracao(
        this.numerador * outra.numerador,
        this.denominador * outra.denominador
      );
  },
  'inverte': function() {
    //torna a Fracao mutável
    //let d = this.denominador;
    //this.denominador = this.numerador;
    //this.numerador = d;
    //para este exemplo a Fracao será mutável
    return Fracao (this.denominador, this.numerador);
  },
  'divide': function(outra) {
    return this.multiplica(outra.inverte());
  };
};
