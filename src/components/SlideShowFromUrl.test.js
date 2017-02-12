import React from 'react';
import ReactDOM from 'react-dom';
import SlideShowFromUrl from './SlideShowFromUrl';

it('renders without crashing', () => {
    const onStop = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<SlideShowFromUrl url="" onStop={onStop} />, div);
});
