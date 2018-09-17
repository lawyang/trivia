import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div>
                <p>NexTech Trivia</p>
                <Button variant="contained">
                    Start Trivia
                </Button>
            </div>
        )
    }

}

export default Landing;