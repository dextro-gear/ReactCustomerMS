import React, { Component } from 'react';
import DisplayCustomer from './DisplayCustomer';

class DisplayCustomers extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render() { 
        return (
            <div>
                <h1>Display All Customers</h1>
                {this.props.customers.map( (customer, index) => {
                    return <DisplayCustomer key={index} name={customer.name} age={customer.age} address={customer.address}/>
                })}
            </div>
        );
    }
}
 
export default DisplayCustomers;