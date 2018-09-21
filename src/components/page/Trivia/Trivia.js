import React, { Component } from 'react';
import { TRIVIA_ACTIONS } from '../../../redux/actions/triviaActions';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import data from '../../../data/trivia.json';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({
    object: state.triviaReducer.allQuestions
})

class Trivia extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            ques: data,
            length: data.length,
            ids: 1
        }
    }

    componentDidMount(){
        this.filterData();
        // this.idGenerator();
        this.updateState();
        console.log('items', this.state.items);
        console.log('questions', this.questions);
        console.log('qnumber', this.state.ques.length);
        console.log('qnumber2', this.getRndInteger(this.state.ids, this.state.length));
        // this.checkAnswer();
    }
    
    questions = [];

    filterData = () => {
        let id = this.state.ids;
        console.log(id)
        this.questions = this.state.ques.filter(function (question) {
            return(
                question.id === parseInt(`${id}`)
            );
        });
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // idGenerator = () => {
    //     let arrayLength = this.state.ques.length;
    //     for (let i = 1; i <= arrayLength; i++){
    //         if( i <= arrayLength ){
    //             return (i++,
    //                 this.setState({
    //                     ids: 2
    //                 }),
    //                 console.log('idGen', i, `ids:`, this.state.ids)
    //             );
    //         } else {
    //             console.log('idGen', i);
    //             return i;
    //         }
    //     }
    // }

    updateState = () => {
        this.setState({
            items: this.questions
        })
    }

    checkAnswer = (selection) => {
        let correct = this.questions[0].value;
        console.log('correct:', correct)
        console.log('select:', selection)
        if(selection === correct){
            console.log('Correct');
            alert('Correct');
        } else {
            console.log('Wrong');
            alert('Wrong');
        }
    }

    render() {
        return(
            <div>
                <pre>{JSON.stringify(this.state.ques)}</pre>
                <div>
                    {this.state.items.map((que, index)=>{
                        return (
                            <h3 key={index} value={que.id}>{que.question}</h3>
                        )}
                    )}
                    {this.questions.map((item, index)=>{
                        return (
                            <div key={index}>
                                <Button value={item.id} onClick={()=>this.checkAnswer(item.answers.a)}>{item.answers.a}</Button>
                                <br/>
                                <Button value={item.id} onClick={()=>this.checkAnswer(item.answers.b)}>{item.answers.b}</Button>
                                <br/>
                                <Button value={item.id} onClick={()=>this.checkAnswer(item.answers.c)}>{item.answers.c}</Button>
                                <br/>
                                <Button value={item.id} onClick={()=>this.checkAnswer(item.answers.d)}>{item.answers.d}</Button>
                            </div>
                        )}
                    )}
                </div>
            </div>
        )
    }

}


export default connect(mapStateToProps)(Trivia);