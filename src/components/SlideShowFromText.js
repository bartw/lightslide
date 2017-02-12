import React, { Component } from 'react';
import SlideShow from './SlideShow';

export default class SlideShowFromText extends Component {
    constructor(props) {
        super(props);
        this.slidesFromText = this.slidesFromText.bind(this);
    }

    slidesFromText() {
        const rawSlides = this.props.text.split('\n\n----------\n\n');
        const slides = rawSlides.map((slide, index) => ({ id: index, content: slide }));
        return slides;
    }

    render() {
        return (
            <SlideShow slides={this.slidesFromText()} onStop={this.props.onStop} />
        );
    }
}

SlideShowFromText.propTypes = {
    text: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}