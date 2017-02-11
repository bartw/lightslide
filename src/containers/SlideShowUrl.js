import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSlides } from '../actions'
import SlideShow from '../components/SlideShow';

class SlideShowUrl extends Component {
    componentDidMount() {
        const { dispatch, url } = this.props;

        if (!url || !url.length) {
            return;
        }

        dispatch(fetchSlides(url));
    }

    render() {
        const { slides, onStop } = this.props;
        return (
            <SlideShow slides={slides} onStop={onStop} />
        );
    }
}

SlideShowUrl.propTypes = {
    url: React.PropTypes.string.isRequired,
    onStop: React.PropTypes.func.isRequired,
    slides: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        url: ownProps.url,
        onStop: ownProps.onStop,
        slides: state.slides || []
    };
}

export default connect(mapStateToProps)(SlideShowUrl);