import React, { Component } from 'react';
import './UrlForm.css';

export default class UrlForm extends Component {
    render() {
        return (
            <div className="urlForm">
                <form>
                    <input type="url" value={this.props.url} placeholder="markdown url" onChange={this.props.onChangeUrl} />
                    <button onClick={this.props.onStart}>Start</button>
                </form>
            </div>
        );
    }
}