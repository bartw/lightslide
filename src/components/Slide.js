import React, { Component } from 'react';
import showdown from 'showdown';
import './Slide.css';

export default class Slide extends Component {
    constructor(props) {
        super(props);
        this.converter = new showdown.Converter();
        this.createMarkup = this.createMarkup.bind(this);
    }

    createMarkup() {
        return { __html: this.converter.makeHtml(this.props.content) };
    }

    render() {
        return (
            <div className="content" dangerouslySetInnerHTML={this.createMarkup()} />
        );
    }
}

Slide.propTypes = {
    content: React.PropTypes.string.isRequired
}