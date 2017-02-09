import React, { Component } from 'react';
import SlideShow from './SlideShow';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSlideShow: false, url: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.stop = this.stop.bind(this);
  }

  handleChange(event) {
    this.setState({ url: event.target.value });
  }

  handleClick() {
    this.setState({ showSlideShow: true });
  }

  stop() {
    this.setState({ showSlideShow: false });
  }

  render() {
    return (
      <div>
        {
          !this.state.showSlideShow &&
          <div>
            <input id="markdownUrl" type="url" value={this.state.url} placeholder="markdown url" onChange={this.handleChange} />
            <button onClick={this.handleClick}>Start</button>
          </div>
        }
        {this.state.showSlideShow && <SlideShow url={this.state.url} onStop={this.stop} />}
      </div>
    );
  }
}