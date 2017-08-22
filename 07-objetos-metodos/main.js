
let ac1 = ArCondicionado('LG', 9000);
let ac2 = ArCondicionado('Hyundai', 12000, true);
let ac3 = ac1;
console.log(ac1.ligado); //false
ac1.ligarDesligar(); //chama o método/comando
console.log(ac1.ligado); //true
// não se deve fazer alteração direta de estado
//ac1.ligado = true;
//ac1.temperatura = 128;
console.log(ac1);
ac1.aumentarTemp();
ac1.aumentarTemp();
console.log(ac1);

let f1 = Fracao(2,3);
let f2 = Fracao(3,5);
//f1 é o "this", f2 é a "outra"
let f3 = f1.multiplica(f2);
console.log(f1);
console.log(f2);
console.log(f3);
