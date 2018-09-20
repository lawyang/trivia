import axios from 'axios';

export function getAllQuestions() {
    return axios.get('/')
        .then(response => 'hello')
            console.log('data:',response)
        .catch((error => {
            console.log('error getting all users from Request', error);
            throw error.response || error;
        }))
}