import React, { Component } from 'react';

class DisplayCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return ( 
            <div className="submitted-details">
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <p>Address: {this.props.address}</p>
            </div>
         );
    }
}
 
export default DisplayCustomer;