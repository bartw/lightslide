import React, { Component } from 'react';
import convertMarkdownToHtml from '../services/convertMarkdownService';
import './Slide.css';

export default class Slide extends Component {
    render() {
        const slideHtml = { __html: convertMarkdownToHtml(this.props.content) };
        return (
            <div className="content" dangerouslySetInnerHTML={slideHtml} />
        );
    }
}

Slide.propTypes = {
    content: React.PropTypes.string.isRequired
};