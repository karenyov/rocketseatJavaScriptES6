//import soma, { sub } from './funcoes';
//import { soma, sub } from './funcoes';
import * as funcoes from './funcoes';

/** Desse modo pode alterar o "name" do import */
//import soma from './soma';

//console.log(funcoes.soma(1, 2));
//console.log(funcoes.sub(2, 1));

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

/*
minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {
    });
*/

async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    minhaPromise().then(response => {
        console.log(response);
    });
}

