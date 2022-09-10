import { getRandomExercise } from "./helpers.js";

const getResponse = (command) => {
    switch(command){
        case 'exercicio':
            return getRandomExercise();
            break;
        default:
            return 'Nada encontrado';
    }
}

export {
    getResponse,
}