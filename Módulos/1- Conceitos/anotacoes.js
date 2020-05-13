/** Operações em Array */
const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function (item, index) {
    return item + index;
});
console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
});
console.log(sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(filter);

const find = arr.find(function (item) {
    return item === 4;
});
console.log(find);

/** Arrow Functions */
const arr2 = [1, 3, 4, 5, 6];

const newArr2 = arr2.map(item => item * 2);
console.log(newArr2);

const teste = () => ({ nome: 'Diego' });
console.log(teste());

/** Valores Padrão */
function soma(a = 3, b = 6) {
    return a + b;
}

console.log(soma(1));
console.log(soma());

/** Desestruturação */
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    },
};

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}
mostraNome(usuario);

/** Operadores rest/spread */


// REST
const usuario2 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const { nome2, ...resto } = usuario2;

console.log(nome2);
console.log(resto);

const arr3 = [1, 2, 3, 4];

const [a, b, ...c] = arr3;
console.log(a);
console.log(b);
console.log(c);

function soma2(a, b, ...params) {
    return params;
    //return params.reduce((total, next) => total + next);
}
console.log(soma2(1, 3, 4, 5, 6, 7));

//SPREAD
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

const arr6 = [...arr4, ...arr5];

console.log(arr6);

const usuario3 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario4 = { ...usuario3, nome: 'Gabriel' };
console.log(usuario4)

//Template Literals
const nome3 = 'Diego';
const idade3 = 23;

// console.log('Meu nome é ' + nome3 + ' e tenho ' + idade3 + ' anos');
console.log(`Meu nome é ${nome3} e tenho ${idade} anos`);

// Object Short Syntax
const nome4 = 'Diego';
const idade4 = 23;

const usuario5 = {
    nome,
    idade,
    empresa: 'Rocketseat'
}
console.log(usuario5);