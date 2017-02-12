import React from 'react';
import ReactDOM from 'react-dom';
import SlideShowFromMarkdown from './SlideShowFromMarkdown';

it('renders without crashing', () => {
    const onStop = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<SlideShowFromMarkdown markdown="" onStop={onStop} />, div);
});
