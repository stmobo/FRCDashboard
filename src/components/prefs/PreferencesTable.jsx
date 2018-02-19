import React from 'react';
import {connect} from 'react-redux';

import PrefsEntryCreator from './PrefsEntryCreator.jsx';
import PrefsTableRow from './PrefsTableRow.jsx';

function mapStateToProps(state, ownProps) {
    return {
        entries: Array.from(state.prefs.entries())
    }
}

function PreferencesTable({entries}) {
    var elems = entries.map(
        e => (<PrefsTableRow key={e[0]} prefKey={e[0]} value={e[1]} />)
    );

    return (
        <div className="table-responsive prefs-table">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <td>Preference Key</td>
                        <td>Value</td>
                        <td>Type</td>
                    </tr>
                </thead>
                <tbody>
                    {elems}
                    <PrefsEntryCreator />
                </tbody>
            </table>
        </div>
    )
}

export default connect(mapStateToProps)(PreferencesTable);
