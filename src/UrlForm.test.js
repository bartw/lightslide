import React from 'react';
import ReactDOM from 'react-dom';
import UrlForm from './UrlForm';

it('renders without crashing', () => {
    const onChangeUrl = () => { };
    const onStart = () => { };
    const div = document.createElement('div');
    ReactDOM.render(<UrlForm onChangeUrl={onChangeUrl} onStart={onStart} />, div);
});
