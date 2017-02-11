import { REQUEST_SLIDES, RECEIVE_SLIDES } from '../actions';

const initialState = {
    slides: [],
    url: '',
    currentIndex: 0,
    showSlideShow: false
};

const lightSlideApp = function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_SLIDES:
            return Object.assign({}, state, { slides: [] })
        case RECEIVE_SLIDES:
            return Object.assign({}, state, { slides: action.slides })
        default:
            return state;
    }
}

export default lightSlideApp;