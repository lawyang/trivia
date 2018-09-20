import {combineReducers} from 'redux';
import { TRIVIA_ACTIONS } from '../actions/triviaActions';
 
const allQuestions = (state = [], action) => {
    switch(action.type){
        case TRIVIA_ACTIONS.FETCH_QUESTIONS:
            console.log('trivia questions', action.payload)
            return "action.payload"
        default:
            return state;
    }
}

export default combineReducers({
    allQuestions
})