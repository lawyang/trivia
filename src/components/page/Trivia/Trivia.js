import React, { Component } from 'react';
import { TRIVIA_ACTIONS } from '../../../redux/actions/triviaActions';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import data from '../../../data/trivia.json';

const mapStateToProps = state => ({
    object: state.triviaReducer.allQuestions
})

class Trivia extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        this.filterData();
        this.setState({
            items: this.questions
        })
        console.log('items', this.state.items);
    }
    
    fetchQuestions = () => {
    FETCH_QUESTIONS: 'FETCH_QUESTIONS'
    this.props.dispatch({type: TRIVIA_ACTIONS.FETCH_QUESTIONS});
    }

    
    id = 0;
    questions = [];

    filterData =() => {
        this.questions = data.filter(function (question) {
            return(question.id === 1);
        });
    }

    updateState = () => {
        this.setState({
            items: this.questions
        })
    }

    checkAnswer = () => {

    }

    render() {
        return(
            <div>
                <p>trivia page</p>
                <pre>{JSON.stringify(this.questions)}</pre>
                <pre>{JSON.stringify(this.questions.answers)}</pre>
                <div>
                    {this.questions.map((que, index)=>{
                        return (
                            <h3 key={index} value={que.id}>{que.question}</h3>
                        )}
                    )}
                    {this.questions.map((item, index)=>{
                        return (
                            <div key={index}>
                                <p value={item.id}>{item.answers.a}</p>
                                <p value={item.id}>{item.answers.b}</p>
                                <p value={item.id}>{item.answers.c}</p>
                                <p value={item.id}>{item.answers.d}</p>
                            </div>
                        )}
                    )}
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps)(Trivia);