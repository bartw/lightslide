import React from 'react';
import ReactDOM from 'react-dom';
import Slide from './Slide';

it('renders without crashing', () => {
    const content = '';
    const div = document.createElement('div');
    ReactDOM.render(<Slide content={content} />, div);
});
