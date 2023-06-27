import React, { Component } from 'react';

export class WoodMine extends Component {

    render() {
        return (
            <div>
                <a href='/' className="btn btn-outline-primary">Back to the Village!</a>
                <h1>Hi I'm Wood view!!
                </h1>

                <div>You have x wood!
                </div>

                <div>You make wood at the rate of y!
                </div>

                <a href='/' className="btn btn-outline-primary">Click me to add 100 wood!</a>
                <a href='/' className="btn btn-outline-primary">Click me to take away 100 wood!</a>
            </div>
        );
    }
}