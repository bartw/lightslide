import React, { Component } from 'react';
import Slide from './Slide';
import ButtonBar from './ButtonBar';
import './SlideShow.css';

export default class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 0 };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        if (this.state.current > 0) {
            this.setState(previousState => ({ current: previousState.current - 1 }));
        }
    }

    next() {
        if (this.state.current < this.props.slides.length - 1) {
            this.setState(previousState => ({ current: previousState.current + 1 }));
        }
    }

    render() {
        return (
            <div className="slideShow">
                {this.props.slides.length && <Slide content={this.props.slides[this.state.current].content} />}
                <ButtonBar onPrevious={this.previous} onNext={this.next} onStop={this.props.onStop} />
            </div>
        );
    }
}

SlideShow.propTypes = {
    slides: React.PropTypes.array.isRequired,
    onStop: React.PropTypes.func.isRequired
}