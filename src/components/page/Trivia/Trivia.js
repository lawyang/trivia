import React, { Component } from 'react';
import { TRIVIA_ACTIONS } from '../../../redux/actions/triviaActions';
// import { connect } from 'react-redux';
import { connect } from 'react-redux';
import data from '../../../data/trivia.json';
import Button from '@material-ui/core/Button';
import './trivia.css';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';


const mapStateToProps = state => ({
    object: state.triviaReducer.allQuestions
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
        console.log('items', this.state.items);
        console.log('questions', this.questions);
        console.log('qnumber', this.state.ques.length);
        console.log('qnumber2', this.getRndInteger(this.state.ids, this.state.length));
    }
    
    questions = [];

    filterData = () => {
        // let id = this.state.ids;
        let number = this.getRndInteger(this.state.ids, this.state.length+1);
        let id = number;
        console.log('id:',id)
        this.questions = this.state.ques.filter(function (question) {
            return(
                question.id === parseInt(`${id}`)
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
        const { classes } = this.props;
        return(
            <div>
                <br/>
                <div>
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
                            <div key={index}>
                                <Button value={item.id} 
                                    variant="outlined" 
                                    color="primary" 
                                    classes={{ root: classes.button }} 
                                    onClick={()=>this.checkAnswer(item.answers.a)}
                                >{item.answers.a}</Button>
                                <br/>
                                <Button value={item.id} variant="outlined" size="large" color="primary" classes={{ root: classes.button }} onClick={()=>this.checkAnswer(item.answers.b)}>{item.answers.b}</Button>
                                <br/>
                                <Button value={item.id} variant="outlined" size="large" color="primary" classes={{ root: classes.button }} onClick={()=>this.checkAnswer(item.answers.c)}>{item.answers.c}</Button>
                                <br/>
                                <Button value={item.id} variant="outlined" size="large" color="primary" classes={{ root: classes.button }} onClick={()=>this.checkAnswer(item.answers.d)}>{item.answers.d}</Button>
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