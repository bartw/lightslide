import React, { Component } from 'react';
import SlideShow from './SlideShow';

export default class SlideShowFromUrl extends Component {
    constructor(props) {
        super(props);
        this.state = { slides: [] };
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
                const rawSlides = text.split('\n\n----------\n\n');
                const slides = rawSlides.map((slide, index) => ({ id: index, content: slide }));
                this.setState({ slides: slides });
            })
            .catch(() => {
                this.setState({ slides: [] });
            });
    }

    render() {
        return (
            <SlideShow slides={this.state.slides} onStop={this.props.onStop} />
        );
    }
}

SlideShowFromUrl.propTypes = {
    url: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}