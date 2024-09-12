let operador =  (prompt('Escolha uma operação:\n 1: soma \n 2: subtração \n 3: multiplicação \n 4: divisão'));
let n1 = parseFloat(prompt('Insira um número: '));
let n2 = parseFloat(prompt('Insira outro número: '));
let resultado;

if (operador == '1') {
    resultado = n1 + n2;                 
}
else if (operador == '2') {
    resultado = n1 - n2;
 }
else if (operador == '3') {
    resultado = n1 * n2;
 }
else if (operador == '4') {
    resultado = n1 / n2;
 }
else {
    resultado  == 'Erro';
}
 alert('Este é o resultado ' + resultado); 
     



 