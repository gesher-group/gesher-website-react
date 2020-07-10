import React, { Component } from 'react';

class ClientFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterVal: ""
        }
    }
  
    handleChange = (e) => {
        this.setState({
            filterVal: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" id="filter" value={this.state.filterVal} onChange={this.handleChange}/>
                {this.state.filterVal}
            </div>
        );
    }
}

export default ClientFilter;
