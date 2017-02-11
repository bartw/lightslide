import React, { Component } from 'react';
import showdown from 'showdown';
import './SlideShow.css';

export default class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.converter = new showdown.Converter();
        this.state = { current: 0, slides: [] };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
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
                this.setState({ current: 0, slides: slides });
            })
            .catch(() => {
                this.setState({ current: 0, slides: [] });
            });
    }

    previous() {
        if (this.state.current > 0) {
            this.setState(previousState => ({ current: previousState.current - 1 }));
        }
    }

    next() {
        if (this.state.current < this.state.slides.length - 1) {
            this.setState(previousState => ({ current: previousState.current + 1 }));
        }
    }

    createMarkup() {
        return { __html: this.converter.makeHtml(this.state.slides[this.state.current].content) };
    }


    render() {
        return (
            <div className="slideShow">
                {this.state.slides.length && <div className="content" dangerouslySetInnerHTML={this.createMarkup()} />}
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
    url: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired
}