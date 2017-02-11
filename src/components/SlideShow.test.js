import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './SlideShow';

it('renders without crashing', () => {
    const onStop = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<SlideShow url="" onStop={onStop} />, div);
});
