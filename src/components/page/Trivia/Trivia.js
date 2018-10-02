import React, { Component } from 'react';
// import { TRIVIA_ACTIONS } from '../../../redux/actions/triviaActions';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import data from '../../../data/trivia.json';
import Button from '@material-ui/core/Button';
import './trivia.css';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2'

const mapStateToProps = state => ({
    // object: state.triviaReducer.allQuestions
})

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        raised: true
      },
      question: {
          
      }
  });

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
        this.updateState();
    }
    
    questions = [];

    filterData = () => {
        let number = this.getRndInteger(this.state.ids, this.state.length+1);
        let id = number;
        // console.log('idasdf:',id, 'length:', number)
        this.questions = this.state.ques.filter(function (question) {
            return(
                question.id === parseInt(`${id}`, 10)
            );
        });
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    updateState = () => {
        this.setState({
            items: this.questions
        })
    }

    checkAnswer = (selection) => {
        let correct = this.questions[0].value;
        if(selection === correct){
            console.log('Correct');
            Swal(
            'Correct',
            'Good Job!!!',
            'success',
            ).then(()=>{
                window.location.reload();
            })
        } else {
            console.log('Wrong');
            Swal(
                'Incorrect',
                '',
                'error'
            )
        }
    }

    render() {
        const { classes } = this.props;

        return(
            <div>
                <br/>
                <div class="question">
                    {this.state.items.map((que, index)=>{
                        return (
                            <Typography 
                            key={index}
                            classes={{ root: classes.question }}
                            variant="headline"
                            value={que.id}>{que.question}</Typography>
                        )}
                    )} 
                    {this.questions.map((item, index)=>{
                        return (
                            <div key={index} class="grid-container">
                                <div class="option">
                                    <Button value={item.id} 
                                    variant="default"
                                    size="large"
                                    color="primary" 
                                    classes={{ root: classes.button }} 
                                    onClick={()=>this.checkAnswer(item.answers.a)}>{item.answers.a}</Button>
                                </div>
                                <div class="option2">
                                    {/* <br/> */}
                                    <Button 
                                    value={item.id} 
                                    variant="default" 
                                    size="large" 
                                    color="primary" 
                                    classes={{ root: classes.button }} 
                                    onClick={()=>this.checkAnswer(item.answers.b)}>{item.answers.b}</Button>
                                    {/* <br/> */}
                                </div>
                                <div class="option3">
                                    <Button 
                                    value={item.id} 
                                    variant="default" 
                                    size="large" 
                                    color="primary" 
                                    classes={{ root: classes.button }} 
                                    onClick={()=>this.checkAnswer(item.answers.c)}>{item.answers.c}</Button>
                                </div>
                                <div class="option4">
                                    {/* <br/> */}
                                    <Button value={item.id} 
                                    variant="default" 
                                    size="large" 
                                    color="primary" 
                                    classes={{ root: classes.button }} 
                                    onClick={()=>this.checkAnswer(item.answers.d)}>{item.answers.d}</Button>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        )
    }

}


// export default withStyle(style), connect(mapStateToProps)(Trivia);
export default compose(withStyles(styles),connect(mapStateToProps))(Trivia);