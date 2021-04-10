import React, { Component } from 'react';
import DisplayCustomer from './DisplayCustomer';

class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            address: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        this.nameRef = React.createRef();
        this.ageRef = React.createRef();
        this.addressRef = React.createRef();
    }



    handleSubmit(event) {
        event.preventDefault();

        this.setState(prevState => (
            {
             ...prevState, name: this.nameRef.current.value, age: this.ageRef.current.value, address: this.addressRef.current.value
            }
        ));

        alert("Form Submitted Successfully!");
        if(this.state.name !== "" && this.state.age!== "" && this.state.address !== "")
            this.props.addCustomer(this.state);
    }


    render() { 
        return (
        <div>
            <div className="form-container">
                <h1>Add Customer Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.nameRef} className="input" type="text" placeholder="Name"/>
                    <input ref={this.ageRef} className="input" type="number" placeholder="Age"/>
                    <textarea ref={this.addressRef} className="textarea" placeholder="Address"/>
                    <button className="submit-button" type="submit">Submit Details</button>
                </form>
            </div>

            <h1>Recently Submitted Details (DisplayCustomer)</h1>
            <DisplayCustomer name={this.state.name} age={this.state.age} address={this.state.address}/>
        </div> );
    }
}
 
export default CustomerForm;