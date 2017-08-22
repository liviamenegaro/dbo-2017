// função Fábrica de ArCondicionado
// propriedades perenes (duráveis, fixas, etc)
// o nome da função inicia com letra maiúscula porque cria um Objeto
function ArCondicionado(marca, potencia, inversor = false) {
  //marca, potencia e inversor são constantes
  let objeto = {
    'marca': marca,
    'potencia': potencia,
    'inversor': inversor,
    //ligado e temperatura são variáveis (estado)
    'ligado': true, // true, false
    'temperatura': 21, // 17 a 30
    // ação/comando: são chamados de MÉTODOS!
    'ligarDesligar': function () {
      this.ligado = ! this.ligado;
    },
    'aumentarTemp': function () {
      if (this.ligado && this.temperatura < 30) this.temperatura++;
    },
    'baixarTemp': function () {
      if (this.ligado && this.temperatura > 17) this.temperatura--;
    }
  };
  return objeto;
}
