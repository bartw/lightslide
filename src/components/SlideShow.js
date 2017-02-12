import React, { Component } from 'react';
import { extendObservable } from "mobx"
import { observer } from "mobx-react"
import Slide from './Slide';
import ButtonBar from './ButtonBar';
import './SlideShow.css';

class SlideShow extends Component {
    constructor(props) {
        super(props);
        extendObservable(this, {
            current: 0
        });
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous() {
        this.current = this.current > 0 ? this.current - 1 : 0;
    }

    next() {
        this.current = this.current < this.props.slides.length - 1 ? this.current + 1 : this.current;
    }

    render() {
        const content = this.props.slides.length ? this.props.slides[this.current].content : '';
        return (
            <div className="slideShow">
                {this.props.slides.length && <Slide content={content} />}
                <ButtonBar onPrevious={this.previous} onNext={this.next} onStop={this.props.onStop} />
            </div>
        );
    }
}

SlideShow.propTypes = {
    slides: React.PropTypes.array.isRequired,
    onStop: React.PropTypes.func.isRequired
};

export default observer(SlideShow);