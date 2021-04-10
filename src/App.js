import logo from './logo.svg';
import './App.css';
import AddCustomer from './components/AddCustomer';
import React, { Component } from 'react';
import DisplayCustomers from './components/DisplayCustomers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {customers: []};
    this.addCustomer = this.addCustomer.bind(this);
  }

  addCustomer(customer) {
    this.setState( prevState => (
      {customers : [...prevState.customers, customer]}
    )
    );
  }

  render() {
    return (
      <div>
        <AddCustomer addCustomer={this.addCustomer}/>
        <DisplayCustomers customers = {this.state.customers}/>
      </div>
    );
  }

}

export default App;
