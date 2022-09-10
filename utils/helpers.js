import { exercises } from '../beecrowd/index.js';

const getRandomExercise = () => {
    const id = exercises.beginner[Math.floor(Math.random() * exercises.beginner.length)];        
    return `https://www.beecrowd.com.br/judge/en/problems/view/${id}`;
}

export {
    getRandomExercise,
}