import React, { Component } from 'react';
import InLineError from "../../message/inLineError"
import validator from "validator"
import PropTypes from "prop-types"
//   import {Form, Button, } from "semantic-ui-react"


class LoginForm extends Component {
    state = { 
        data:{
            email:"", 
            password: " "
        },
        isLoading: false,
        errors: {}
     }

// onchange 
    onChange=(e)=>this.setState({
        data:{...this.state.data,[e.target.name]:e.target.value}})

// validation

 validate = (data) => {
    const errors = {}
    if (!validator.isEmail(data.email)) errors.email = "invalid email"
    if (!data.password) errors.password = "C'mon MF,fill in the blanks" 
    return errors
 }



        onSubmit =e =>{
            e.preventDefault()
            const errors = this.validate(this.state.data)
            this.setState({errors})
            if (Object.keys(errors).length === 0) {
                this.props.submit(this.state.data)
            }

        }




    render() { 
        const {data, errors} = this.state 
        return (  
      <div>
         
         <form onSubmit ={this.onSubmit}>

                        <div className="form-group col-md-4">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            value={data.email}
                            name = "email"
                            placeholder="Enter email"
                            onChange={this.onChange}
                            />
                            {/* form validation */}
                         {errors.email && <InLineError text={errors.email}/>}
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" 
                            placeholder="Password"
                            name = "password"
                            value={data.password}
                            onChange={this.onChange}
                            />
                            {/* form validation */}
                             {errors.password && <InLineError text={errors.password}/>}
                        </div>
                        <button style={{}}className="btn btn-primary">Login</button>
                        </form>
                    </div>
            
            
 
        );
    }
}




LoginForm.propTypes ={
    submit: PropTypes.func.isRequired
}
 
export default LoginForm;
