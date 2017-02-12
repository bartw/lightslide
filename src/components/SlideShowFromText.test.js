import React from 'react';
import ReactDOM from 'react-dom';
import SlideShowFromText from './SlideShowFromText';

it('renders without crashing', () => {
    const onStop = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<SlideShowFromText text="" onStop={onStop} />, div);
});
