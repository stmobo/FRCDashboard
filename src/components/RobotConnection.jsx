import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        connected: state.connected
    }
}

class RobotConnection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: 'localhost'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(ev) {
        ev.preventDefault();

        if(this.state.address == 'localhost') {
            this.setState({
                address: 'roborio-5002-frc.local'
            });
            ipc.send('connect', 'roborio-5002-frc.local')
        } else {
            this.setState({
                address: 'localhost'
            });
            ipc.send('connect', 'localhost')
        }
    }

    render() {
        var conn_state = this.props.connected ? 'Connected' : 'Not connected';
        var other_address = '???';

        if(this.state.address == 'localhost') {
            other_address = 'roborio-5002-frc.local';
        } else {
            other_address = 'localhost';
        }

        return (
            <div>
                <div>{conn_state} to {this.state.address}</div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleClick}>
                        Connect to {other_address}
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(RobotConnection);
