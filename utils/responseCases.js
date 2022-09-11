import { getRandomExercise } from "./helpers.js";
import { GET_RANDOM_EXERCISE } from './actions.js';

const getResponse = (command) => {
    switch(command){
        case GET_RANDOM_EXERCISE:
            return getRandomExercise();            
        default:
            return 'Nada encontrado';
    }
}

export {
    getResponse,
}