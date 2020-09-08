import React, { Component } from 'react';

class FooterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <span className="text-muted">All Rights Reserved 2020 @ Mehul Garg</span>
                </div>
            </div>
        );
    }
}

export default FooterComponent;