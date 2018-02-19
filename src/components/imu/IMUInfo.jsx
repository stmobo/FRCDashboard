import React from 'react';
import {connect} from 'react-redux';
import Dial from './Dial.jsx';

function IMUStatus({present}) {
    if(present) {
        return (
            <div className="alert alert-success" role="alert">
                IMU is <strong>present.</strong>
            </div>
        );
    } else {
        return (
            <div className="alert alert-danger" role="alert">
                IMU is <strong>not present.</strong>
            </div>
        );
    }
}

function IMUHeading({angle}) {
    return (
        <input className="form-control" type="text" placeholder={angle.toString() + 'º'} readOnly />
    );
}

function mapStateToProps(state, props) {
    var angle = state.sd.get('Heading');
    var imuPresent = state.sd.get('IMU Present');

    if(typeof angle === 'undefined') {
        angle = 0;
    }

    if(typeof imuPresent === 'undefined') {
        imuPresent = false;
    }

    return {
        'angle': angle,
        'present': imuPresent
    }
}

function IMUInfo({angle, present}) {
    return (
        <div>
            <IMUStatus present={present} />
            <Dial angle={angle} />
            <IMUHeading angle={angle} />
        </div>
    );
}

export default connect(mapStateToProps)(IMUInfo);
