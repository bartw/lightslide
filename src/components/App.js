import React, { Component } from 'react';
import SlideShowUrl from '../containers/SlideShowUrl';
import UrlForm from './UrlForm';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showSlideShow: false, url: '' };
    this.setUrl = this.setUrl.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  setUrl(e) {
    this.setState({ url: e.target.value });
  }

  start(e) {
    e.preventDefault();
    this.setState({ showSlideShow: true });
  }

  stop(e) {
    e.preventDefault();
    this.setState({ showSlideShow: false });
  }

  render() {
    return (
      <div className="app">
        {
          this.state.showSlideShow ?
            <SlideShowUrl url={this.state.url} onStop={this.stop} />
            : <UrlForm onChangeUrl={this.setUrl} onStart={this.start} />
        }
      </div>
    );
  }
}