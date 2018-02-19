import React from 'react';

export default function QuadValueDisplay({title, fl, fr, bl, br}) {
    return (
        <table className="quad-value table table-bordered">
            <thead>
                <tr>
                    <th colspan="2">{title}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{fl}</td>
                    <td>{fr}</td>
                </tr>
                <tr>
                    <td>{bl}</td>
                    <td>{br}</td>
                </tr>
            </tbody>
        </table>
    );
}
