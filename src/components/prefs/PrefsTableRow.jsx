import React from 'react';
import {connect} from 'react-redux';


function mapStateToProps(state, ownProps) {
    return {
        value: state.prefs.get(ownProps.prefKey)
    };
}

class PrefsTableRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(ev) {
        var newValue = this.state.value;

        if(typeof this.props.value === 'boolean') {
            newValue = newValue.toLowerCase();
            if(newValue === 'true') {
                newValue = true;
            } else if(newValue === 'false') {
                newValue = false;
            } else {
                console.log("Invalid value passed to preferences!");
                this.setState({
                    value: this.props.value
                });
                return;
            }
        } else if(typeof this.props.value === 'number') {
            newValue = parseFloat(newValue);
            if(isNaN(newValue) || !isFinite(newValue)) {
                console.log("Invalid value passed to preferences!");
                this.setState({
                    value: this.props.value
                });
                return;
            }
        }

        this.setState({
            value: newValue
        })

        NetworkTables.putValue('/Preferences/'+this.props.prefKey, newValue)
    }

    handleChange(ev) {
        this.setState({
            value: ev.target.value
        });
    }

    handleReset(ev) {
        this.setState({
            value: this.props.value
        })
    }

    render() {
        var prefType = 'String';
        if(typeof this.props.value === 'boolean') {
            prefType = 'Boolean';
        } else if(typeof this.props.value === 'number') {
            prefType = 'Number';
        }

        return (
            <tr>
                <th>{this.props.prefKey}</th>
                <td>
                    <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-sm btn-success">Update</button>
                    <button onClick={this.handleReset} type="button" className="btn btn-sm btn-danger">Reset</button>
                </td>
                <td>{prefType}</td>
            </tr>
        );
    }
}

export default connect(mapStateToProps)(PrefsTableRow);
