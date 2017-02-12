import React, { Component } from 'react';
import fetchMarkdown from '../services/fetchMarkdownService';
import SlideShowFromMarkdown from './SlideShowFromMarkdown';

export default class SlideShowFromUrl extends Component {
    constructor(props) {
        super(props);
        this.state = { markdown: '' };
    }

    componentDidMount() {
        if (!this.props.url || !this.props.url.length) {
            this.setState({ markdown: '' });
        }

        fetchMarkdown(this.props.url).then(markdown => {
            this.setState({ markdown: markdown })
        });
    }

    render() {
        return (
            <SlideShowFromMarkdown markdown={this.state.markdown} onStop={this.props.onStop} />
        );
    }
}

SlideShowFromUrl.propTypes = {
    url: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}