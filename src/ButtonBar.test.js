import React from 'react';
import ReactDOM from 'react-dom';
import ButtonBar from './ButtonBar';

it('renders without crashing', () => {
    const onPrevious = () => { };
    const onNext = () => { };
    const onStop = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<ButtonBar onPrevious={onPrevious} onNext={onNext} onStop={onStop} />, div);
});
