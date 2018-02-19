import React from 'react';
import {connect} from 'react-redux';

export default function SwerveKey(key, title, displayComponent) {
    function mapStateToProps(state, ownProps) {
        return {
            title: title,
            fl: state.sd.get('Front Left '+key),
            fr: state.sd.get('Front Right '+key),
            bl: state.sd.get('Back Left '+key),
            br: state.sd.get('Back Right '+key),
        }
    }

    function mapDispatchToProps(dispatch) {
        return {};
    }

    return connect(mapStateToProps, mapDispatchToProps)(displayComponent);
}
