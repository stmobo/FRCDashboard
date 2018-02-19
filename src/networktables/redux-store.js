var redux = require('redux');
var thunkMiddleware = require('redux-thunk').default;

const initialState = {
    sd: new Map(),
    prefs: new Map(),
    connected: false,
}

/* action is an object with keys:
 {
    "key": <SD key that was updated>
    "value": <new value for key>
 }
 */
function smartdashboard_update_reducer(sdMap, action) {
    var mapClone = new Map(sdMap);
    var v = action.value;

    if(v === 'true') {
        v = true;
    } else if (v === 'false') {
        v = false;
    }

    mapClone.set(action.key, v);
    return mapClone;
}

function prefs_update_reducer(prefsMap, action) {
    var mapClone = new Map(prefsMap);
    var v = action.value;

    if(v === 'true') {
        v = true;
    } else if (v === 'false') {
        v = false;
    }

    mapClone.set(action.key, v);
    return mapClone;
}

function main_reducer(state, action) {
    if(typeof state === 'undefined') {
        return initialState;
    }

    switch(action.type) {
        case 'sd-update': /* SmartDashboard updated */
            return Object.assign({}, state, {
                sd: smartdashboard_update_reducer(state.sd, action)
            });
        case 'prefs-update':
            return Object.assign({}, state, {
                prefs: prefs_update_reducer(state.prefs, action)
            });
        case 'connection':
            return Object.assign({}, state, {
                connected: action.value
            })
        default:
            return state;
    }
}

var store = redux.createStore(
    main_reducer,
    redux.applyMiddleware(thunkMiddleware)
);

/* Automatically reflect NetworkTables changes in the Redux store */
function onNTValueChanged(key, value, isNew) {
    if(key.startsWith('/SmartDashboard/')) {
        store.dispatch({
            'type': 'sd-update',
            'key': key.substr(16),
            'value': value
        });
    } else if(key.startsWith('/Preferences/')) {
        store.dispatch({
            'type': 'prefs-update',
            'key': key.substr(13),
            'value': value
        });
    }
}

function onRobotConnection(connected) {
    store.dispatch({
        'type': 'connection',
        'value': connected
    })
}

NetworkTables.addGlobalListener(onNTValueChanged, true);
NetworkTables.addRobotConnectionListener(onRobotConnection, false);


module.exports = { store };
