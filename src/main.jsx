import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { store } from './networktables/redux-store.js';
import SwerveTableDisplay from './components/swerve/SwerveTableDisplay.jsx';
import RobotConnection from './components/RobotConnection.jsx';
import IMUInfo from './components/imu/IMUInfo.jsx';
import PreferencesTable from './components/prefs/PreferencesTable.jsx';

function App({ store }) {
    return (
        <Provider store={store}>
            <div>
                <SwerveTableDisplay />
                <RobotConnection />
                <IMUInfo />
                <PreferencesTable />
            </div>
        </Provider>
    );
}

window.addEventListener('load', function() {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
});
