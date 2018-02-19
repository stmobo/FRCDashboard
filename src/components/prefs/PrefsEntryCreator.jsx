import React from 'react';

export default class PrefsEntryCreator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: '',
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(ev) {
        var newValue = this.state.value;

        if(this.state.type === 'boolean') {
            newValue = newValue.toLowerCase();
            if(newValue === 'true') {
                newValue = true;
            } else if(newValue === 'false') {
                newValue = false;
            } else {
                console.log("Invalid value passed to preferences!");
                return;
            }
        } else if(this.state.type === 'number') {
            newValue = parseFloat(newValue);
            if(isNaN(newValue) || !isFinite(newValue)) {
                console.log("Invalid value passed to preferences!");
                return;
            }
        }

        this.setState({
            key: '',
            value: '',
            type: 'string'
        })

        NetworkTables.putValue('/Preferences/'+this.state.key, newValue)
    }

    handleChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    handleReset(ev) {
        this.setState({
            key: '',
            value: '',
            type: 'string'
        })
    }

    render() {
        return (
            <tr>
                <th>
                    <input type="text" name="key" className="form-control" value={this.state.key} onChange={this.handleChange}/>
                </th>
                <td>
                    <input type="text" name="value" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-sm btn-success">Add</button>
                    <button onClick={this.handleReset} type="button" className="btn btn-sm btn-danger">Reset</button>
                </td>
                <td>
                    <select value={this.state.type} name="type" className="custom-select" onChange={this.handleChange}>
                        <option value="string">String</option>
                        <option value="number">Number</option>
                        <option value="boolean">Boolean</option>
                    </select>
                </td>
            </tr>
        );
    }
}
