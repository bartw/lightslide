import React, { Component } from 'react';
import SlideShow from './SlideShow';
import UrlForm from './UrlForm';
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
      <div className="app">
        {
          this.state.showSlideShow ?
            <SlideShow url={this.state.url} onStop={this.stop} />
            : <UrlForm onChangeUrl={this.handleChange} onStart={this.handleClick} />
        }
      </div>
    );
  }
}