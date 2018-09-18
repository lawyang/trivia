import React, { Component } from 'react';
// import { connect } from 'react-redux';
import axios from 'axios';

class Trivia extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    getQuestions() {
        return axios.get('/api/admin')
            .then(response => response.data)
            .catch((error => {
                console.log('error getting all users from Request', error);
                throw error.response || error;
            }))
    }

    render() {
        return(
            <div>
                <p>triva page</p>
            </div>
        )
    }

}

export default Trivia;