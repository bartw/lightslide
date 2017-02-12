import React, { Component } from 'react';
import { extendObservable } from "mobx"
import { observer } from "mobx-react"
import SlideShowFromUrl from './SlideShowFromUrl';
import UrlForm from './UrlForm';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        extendObservable(this, {
            showSlideShow: false,
            url: ''
        });
        this.changeUrl = this.changeUrl.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    changeUrl(event) {
        this.url = event.target.value;
    }

    start(e) {
        e.preventDefault();
        this.showSlideShow = true;
    }

    stop(e) {
        this.showSlideShow = false;
    }

    render() {
        return (
            <div className="app">
                {
                    this.showSlideShow ?
                        <SlideShowFromUrl url={this.url} onStop={this.stop} />
                        : <UrlForm onChangeUrl={this.changeUrl} onStart={this.start} />
                }
            </div>
        );
    }
}

export default observer(App);