import React, { Component } from 'react';

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
                <p>Contact Information</p>
            </div>
        )
    }

}

export default Landing;