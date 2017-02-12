import React, { Component } from 'react';
import { extendObservable } from "mobx"
import { observer } from "mobx-react"
import fetchMarkdown from '../services/fetchMarkdownService';
import SlideShowFromMarkdown from './SlideShowFromMarkdown';

class SlideShowFromUrl extends Component {
    constructor(props) {
        super(props);
        extendObservable(this, {
            markdown: ''
        });
    }

    componentDidMount() {
        if (!this.props.url || !this.props.url.length) {
            this.markdown = '';
        }

        fetchMarkdown(this.props.url).then(markdown => {
            this.markdown = markdown;
        });
    }

    render() {
        return (
            <SlideShowFromMarkdown markdown={this.markdown} onStop={this.props.onStop} />
        );
    }
}

SlideShowFromUrl.propTypes = {
    url: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}

export default observer(SlideShowFromUrl);