import React, {Component} from "react";
import "./Signup.css"
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom";
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
class Signup extends Component {
    constructor(props) {
        super(props)
        this.email = React.createRef()
        this.password = React.createRef()
        this.username = React.createRef()
        this.phone = React.createRef()
        
    }
    backend = new BackEndCommunicatorHelper(null)
    signup = async () => {
        const request = this.backend.openRequest({
            useBase: false,
            url: endpoints.signup,
            method: BackEndCommunicatorHelper.POST,
            body: {
                username: this.username.current.value,
                password: this.password.current.value,
                email: this.email.current.value,
                phoneNumber: this.phone.current.value
            }
        })
        await request.send()
                    .then(response => {
                            this.email.current.value = ""
                            this.password.current.value = ""
                            this.username.current.value = ""
                            this.phone.current.value = ""
                            this.props.history.push('/')
                    })
                    .catch(reason => alert(reason.response.data.message))
                    
        
    }
  
    

    render() {
        return (
        <div  className = "Signup">
            <Navigation />
            <Background>
                <div className = "row">
                <AuthInfo authType = "signup"></AuthInfo>
                <div className = "col sep">
                           <div className = "signup-form">
                                <span className = "header">
                                    Sign Up
                                </span>
                                <form>
                                <div className = "form-group">
                                        <label htmlFor = "fullname">
                                            Full Name
                                        </label> 
                                            
                                         <input  ref = {this.username} type = "text" className = "form-field" id = "fullname" name = "username" />
                                        
                                    </div>
                                    <div className = "form-group" >
                                        <label htmlFor = "phone">
                                            Phone Number
                                        </label> 
                                            
                                         <input ref = {this.phone} className = "form-field"  type = "text" id = "phone" name = "phone" />
                                        
                                    </div>
                                    <div className = "form-group">
                                        <label htmlFor = "email">
                                            Email
                                        </label> 
                                            
                                         <input ref = {this.email}  type = "email" className = "form-field" id = "email" name = "email" />
                                        
                                    </div>
                                    <div className = "form-group last" >
                                        <label htmlFor = "password">
                                            Password
                                        </label> 
                                            
                                         <input ref = {this.password} className = "form-field"  type = "password" id = "password" name = "password" />
                                        
                                    </div>
                                    <Link to = {"/"}>
                                    <span className = "loginlink">Have an account? Log In here</span>
                                    </Link>
                                    <div className = "action d-flex justify-content-end">
                                        <button onClick = {this.signup} type = "button" className = "signup-button">Sign Up</button>
                                    </div>
                                         
                                </form>
                           </div>
                           </div>
                </div>

            </Background>
            
            

        </div>
        )
    }
}
export default Signup;