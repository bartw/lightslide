export const REQUEST_SLIDES = 'REQUEST_SLIDES';
function requestSlides(url) {
    return {
        type: REQUEST_SLIDES,
        url
    };
}

export const RECEIVE_SLIDES = 'RECEIVE_SLIDES';
function receiveSlides(text) {
    return {
        type: RECEIVE_SLIDES,
        slides: text.split('\n\n----------\n\n').map((slide, index) => ({ id: index, content: slide }))
    };
}

export function fetchSlides(url) {
    return dispatch => {
        dispatch(requestSlides(url))
        return fetch(url, { mode: 'cors' })
            .then(response => response.text())
            .then(text => dispatch(receiveSlides(text)))
            .catch(() => dispatch(receiveSlides('')));
    };
}