import React from 'react';
import RowValueDisplay from './RowValueDisplay.jsx';
import SwerveKey from './SwerveKey.jsx';

const displayed_keys = [
    'Position',
    'CL Position',
    'Steer Error',
    'Drive Error',
    'Drive Ticks',
    'Drive Velocity',
    'Drive Current',
]

export default function SwerveTableDisplay({}) {
    var rows = displayed_keys.map(
        k => {
            const KeyComponent = SwerveKey(k, k, RowValueDisplay);
            return (<KeyComponent key={k} />);
        }
    );

    return (
        <div className="table-responsive swerve-table">
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <td></td>
                        <td>Front Left</td>
                        <td>Front Right</td>
                        <td>Back Left</td>
                        <td>Back Right</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}
