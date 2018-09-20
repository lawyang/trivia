import {put, takeLatest} from 'redux-saga/effects';
import { TRIVIA_ACTIONS } from '../actions/triviaActions';
import { getAllQuestions } from '../requests/triviaRequest';

//fetch all registered users
function* allQuestion(action) {
    try {
        let questions = yield getAllQuestions();
        yield put({
            type: TRIVIA_ACTIONS.FETCH_QUESTIONS,
            payload: questions
        });
    } catch (error) {
        console.log('error in admin saga on GET', error);   
    }
}

function* adminSaga() {
    yield takeLatest(TRIVIA_ACTIONS.FETCH_QUESTIONS, allQuestion);
}
  
  export default adminSaga;