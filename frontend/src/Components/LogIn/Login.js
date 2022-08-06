import React, {Component} from "react";
import "./Login.css";
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom"
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"

class Login extends Component {
    constructor(props) {
        super(props)
        this.email = React.createRef()
        this.password = React.createRef()
    }
    backend = new BackEndCommunicatorHelper(null)
    login = async () => {
        const request = this.backend.openRequest({
            useBase: false,
            url: endpoints.login,
            method: BackEndCommunicatorHelper.POST,
            body: {
                email: this.email.current.value,
                password: this.password.current.value
            }
        })
        await request.send()
        .then(response => {
            this.email.current.value = ""
            this.password.current.value = ""
            localStorage.setItem("user", JSON.stringify(response.data))
            this.props.history.push('/browse')
        }).catch(reason => alert(reason.response.data.message))
        
       
       
    }
  
    render() {
        return (
            <div className = "Login">
                <Navigation  />
                <Background>
                    <div className = "row justify-content-between">
                        <AuthInfo authType = "login"/>
                        
                        <div className = "col sep">
                           <div className = "login-form">
                                <span className = "header">
                                    Login
                                </span>
                                <form>
                                    <div className = "form-group">
                                        <label htmlFor = "email">
                                            Email
                                        </label>  
                                            
                                         <input ref = {this.email} type = "email" className = "form-field" id = "email" name = "email" />
                                        
                                    </div>
                                    <div className = "form-group last" >
                                        <label htmlFor = "password">
                                            Password
                                        </label> 
                                            
                                         <input ref = {this.password} className = "form-field"  type = "password" id = "password" name = "password" />
                                        
                                    </div>
                                    <Link to = {"/signup"}>
                                    <span className = "signuplink">Need an account? Sign up here</span>
                                    </Link>
                                    
                                    <div className = "action d-flex justify-content-end">
                                        <button onClick = {this.login} type = "button" className = "login-button">Log In</button>
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
export default Login;