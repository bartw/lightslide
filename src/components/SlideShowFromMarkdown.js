import React, { Component } from 'react';
import splitMarkdown from '../services/splitMarkdownService';
import SlideShow from './SlideShow';

export default class SlideShowFromMarkdown extends Component {
    render() {
        const slides = splitMarkdown(this.props.markdown);
        return (
            <SlideShow slides={slides} onStop={this.props.onStop} />
        );
    }
}

SlideShowFromMarkdown.propTypes = {
    markdown: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}