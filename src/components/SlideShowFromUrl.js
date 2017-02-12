import React, { Component } from 'react';
import SlideShowFromText from './SlideShowFromText';

export default class SlideShowFromUrl extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    componentDidMount() {
        if (!this.props.url || !this.props.url.length) {
            return;
        }

        fetch(this.props.url, { mode: 'cors' })
            .then(response => {
                return response.text();
            })
            .then(text => {
                this.setState({ text: text });
            })
            .catch(() => {
                this.setState({ text: '' });
            });
    }

    render() {
        return (
            <SlideShowFromText text={this.state.text} onStop={this.props.onStop} />
        );
    }
}

SlideShowFromUrl.propTypes = {
    url: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}