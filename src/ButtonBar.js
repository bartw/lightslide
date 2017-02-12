import React, { Component } from 'react';
import './ButtonBar.css';

export default class ButtonBar extends Component {
    render() {
        return (
            <div className="buttonBar">
                <button onClick={this.props.onPrevious}>Previous</button>
                <button onClick={this.props.onNext}>Next</button>
                <button onClick={this.props.onStop}>Stop</button>
            </div>
        );
    }
}

ButtonBar.propTypes = {
    onPrevious: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onStop: React.PropTypes.func.isRequired
}