import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { store } from './networktables/redux-store.js';
import SwerveTableDisplay from './components/swerve/SwerveTableDisplay.jsx';
import RobotConnection from './components/RobotConnection.jsx';

function App({ store }) {
    return (
        <Provider store={store}>
            <div>
                <SwerveTableDisplay />
                <RobotConnection />
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
