import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    doSomething() {
        console.log('hello Amanda');
        // alert('hello Amanda');
    }

    render() {
        return(
            <div>
                <p>NexTech Trivia</p>
            </div>
        )
    }

}

export default Landing;