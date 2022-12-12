import React, { Component } from 'react';

class LogoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="http://localhost:3000/logo2.png"></img>
                <b>Technacy-web</b>
                <hr></hr>
            </div>
        );
    }
}

export default LogoComponent;