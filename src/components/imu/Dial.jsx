import React from 'react';
import {connect} from 'react-redux';

export default function Dial({angle}) {
    var a = angle;
    if(typeof a === 'undefined') {
        a = 0;
    }

    return (
        <div>
            <svg className="dial">
                <circle cx="85" cy="85" r="10" />
                <rect className="dial-arm" x="85" y="5" width="5" height="80" transform={"rotate("+a.toString()+")"}/>
            </svg>
        </div>

    )
}
