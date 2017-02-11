import React, { Component } from 'react';
import showdown from 'showdown';
import './SlideShow.css';

export default class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.converter = new showdown.Converter();
        this.state = { current: 0 };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
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

    createMarkup() {
        return { __html: this.converter.makeHtml(this.props.slides[this.state.current].content) };
    }


    render() {
        return (
            <div className="slideShow">
                {this.props.slides.length && <div className="content" dangerouslySetInnerHTML={this.createMarkup()} />}
                <div className="buttonBar">
                    <button onClick={this.previous}>Previous</button>
                    <button onClick={this.next}>Next</button>
                    <button onClick={this.props.onStop}>Stop</button>
                </div>
            </div>
        );
    }
}

SlideShow.propTypes = {
    slides: React.PropTypes.array.isRequired,
    onStop: React.PropTypes.func.isRequired
}