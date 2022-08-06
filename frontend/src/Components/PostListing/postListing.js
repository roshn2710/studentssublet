import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import "./PostListing.css"
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom";
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
import {Form} from 'react-bootstrap'

class PostListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: {
                summer:false,
                spring: false,
                fall: false,
                winter: false
            }
        };
      }
    backend = new BackEndCommunicatorHelper(null)
    form =  {
        title: "",
        description: "",
        address: "",
        university: "",
        city: "",
        price: null,
        photos:""
    }

    post = async () => {
        const terms = []
        const temp = {...this.state.terms}
        for (const term in temp){
            if(temp[term]) terms.push(term)
        };
        
        const form = {...this.form, terms}
        console.log(form);
        // // const request = this.backend.openRequest({
        // //     useBase: false,
        // //     url: endpoints.post,
        // //     method: BackEndCommunicatorHelper.POST,
        // //     body: form
        // // })
        // console.log(request, request.body)
        //const response = await request.send()
    }

    render() {
        return (
        <div  className = "PostListing">
            <Navigation />
            <Background >
                <div className = "row">
                    <div className = "col">
                        <span className = "header">
                            Create a new Listing
                        </span>
                    </div>
                    <div className= "col xicon">
                        <div type="button" className="close button btn-lg" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </div>
                    </div>
                </div>
                <div className = "postListing-form row">
                    <div className = "col sep">
                        <form>
                            <div className = "form-group">
                                <label htmlFor = "title">
                                    Title
                                </label>  
                                <input onChange = {(event) => fillInputOnChange(this.form, "title", event)} 
                                type = "text" className = "form-field" id = "title" name = "title" />
                                
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "description">
                                    Description
                                </label>  
                                <input onChange = {(event) => fillInputOnChange(this.form, "description", event)} 
                                type = "text" className = "form-field" id = "description" name = "description" />
                                
                            </div>
                            <div className = "form-group">
                                <label htmlFor = "address">
                                    Address
                                </label>  
                                <input onChange = {(event) => fillInputOnChange(this.form, "address", event)} 
                                type = "text" className = "form-field" id = "address" name = "address" />
                                
                            </div>
                
                        </form>
                    </div>
                    <div className = "col sep">
                        <label htmlFor = "semester">
                                Semester
                            </label>  
                        <Form>
                                {['radio'].map((type) => (
                                    <div className="mb-3">
                                        <Form.Check 
                                            type={type}
                                            id="radio-summer"
                                            label='Summer'
                                            className="radio-button"
                                            checked={this.state.terms.summer}
                                            onClick={() => {
                                                let terms = { ...this.state.terms}
                                                terms.summer = !terms.summer
                                                this.setState({terms})
                                            }}
                                        />
                                        <Form.Check 
                                            type={type}
                                            id="radio-spring"
                                            label='Spring'
                                            checked={this.state.terms.spring}
                                            onClick={() => {
                                                let terms = { ...this.state.terms}
                                                terms.spring = !terms.spring
                                                this.setState({terms})
                                            }}
                                        />

                                        <Form.Check
                                            type={type}
                                            label="Fall"
                                            id="radio-fall"
                                            checked={this.state.terms.fall}
                                            onClick={() => {
                                                let terms = { ...this.state.terms}
                                                terms.fall = !terms.fall
                                                this.setState({terms})
                                            }}
                                        />

                                        <Form.Check
                                            type={type}
                                            label="Winter"
                                            id="radio-winter"
                                            checked={this.state.terms.winter}
                                            onClick={() => {
                                                let terms = { ...this.state.terms}
                                                terms.winter = !terms.winter
                                                this.setState({terms})
                                            }}
                                        />
                                    </div>
                                ))}
                        </Form> 
                        <div className = "form-group">
                            <label htmlFor = "University">
                                University
                            </label>  
                            <input onChange = {(event) => fillInputOnChange(this.form, "university", event)} 
                            type = "text" className = "form-field" id = "university" name = "university" />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "description">
                                City
                            </label>  
                            <input onChange = {(event) => fillInputOnChange(this.form, "city", event)} 
                            type = "text" className = "form-field" id = "city" name = "city" />
                        </div>
                    </div>
                    <div className = "col">       
                        <div className = "form-group">
                            <label htmlFor = "price">
                                Target price
                            </label>  
                            <input onChange = {(event) => fillInputOnChange(this.form, "price", event)} 
                            type = "text" className = "form-field" id = "price" name = "price" />
                        </div>
                        <div className = "form-group">
                            <label htmlFor = "photos">
                                Upload Photos (optional)
                            </label>

                            <input onChange = {(event) => fillInputOnChange(this.form, "photos", event)} 
                            type = "text" className = "form-field" id = "photos" name = "photos" />
                        </div>

                        <div className = "action d-flex ">
                            <button onClick = {this.post} type = "button" className = "postPosting-button">Post Posting</button>
                        </div>
                    </div>

                </div>

            </Background>

        </div>
        )
    }
}
export default PostListing;