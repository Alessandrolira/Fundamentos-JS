function apresentar(nome) {
  return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("alessandro"));
console.log(soma(1, 5));

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10){
    return "somente numeros de 1 a 9"
  } else {
    return num1 + num2;
  }
}

console.log(somaNumerosPequenos(9,3));

// operador maior ou igual que
// >=