import React, { Component } from 'react';
import SlideShowFromUrl from './SlideShowFromUrl';
import UrlForm from './UrlForm';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSlideShow: false, url: '' };
    this.changeUrl = this.changeUrl.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  changeUrl(event) {
    this.setState({ url: event.target.value });
  }

  start() {
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
            <SlideShowFromUrl url={this.state.url} onStop={this.stop} />
            : <UrlForm onChangeUrl={this.changeUrl} onStart={this.start} />
        }
      </div>
    );
  }
}