import React from 'react';
import ReactDOM from 'react-dom';
import SlideShowUrl from './SlideShowUrl';

xit('renders without crashing', () => {
    const onStop = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<SlideShowUrl url="" onStop={onStop} />, div);
});