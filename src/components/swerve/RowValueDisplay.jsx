import React from 'react';

export default function RowValueDisplay({title, fl, fr, bl, br}) {
    return (
        <tr className="swerve-row">
            <td>
                {title}
            </td>
            <td>{fl}</td>
            <td>{fr}</td>
            <td>{bl}</td>
            <td>{br}</td>
        </tr>
    );
}
