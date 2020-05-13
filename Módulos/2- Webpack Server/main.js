const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}
executaPromise();

//1.1
import ClasseUsuario from './functions';
ClasseUsuario.info();

//1.2
import { idade } from './functions';
console.log(idade);

//1.3
import defaultUsuario, { idade as IdadeUsurio} from './functions';
console.log(IdadeUsurio);
defaultUsuario.info();

