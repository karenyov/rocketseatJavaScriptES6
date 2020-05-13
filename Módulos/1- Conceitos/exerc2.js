const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(item => item.idade);
console.log(idades);

const usuariosMaiores = usuarios.filter(item => item.idade > 18);
console.log(usuariosMaiores);

const usuariosGoogle = usuarios.find(item => item.empresa == 'Google');
console.log(usuariosGoogle);

const usuariosIdadeMult = usuarios.filter(function (item) {
    return (item.idade * 2) <= 50;
});
console.log(usuariosIdadeMult);
