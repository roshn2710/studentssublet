import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import Background from "../Background/Background";
import AuthInfo from "../AutoInfo/AuthoInfo";
import {Link} from "react-router-dom";
import {fillInputOnChange} from "../../utils"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
import "./details.css"
import noImage from "../../assets/noImage.png";
import radio from "../../assets/radio.svg"
import radio1 from "../../assets/radio1.svg"
import right from "../../assets/right.svg"
class Detail extends Component {
  
    backend = new BackEndCommunicatorHelper(null)
    state = {
        data: {}
    }

    constructor(props){

        super(props);
        
    }

    async componentDidMount(){
        const request = this.backend.openRequest({
            useBase: false,
            url: `http://localhost:9000/post/${this.props.match.params.id}`,
            method: BackEndCommunicatorHelper.GET,
            
            
        })
        console.log(request)
        await request.send().then(
            response => {
               console.log(response.data)
                this.setState({
                   data: response.data
              })
            }
        )
    }


    render() {
        return (
        <div  className = "Detail">
            <Navigation />
            <div className = "container wrapper">
                <Link to = "/browse">
                <div className = "return">Return To Search <img style = {{marginTop: "-3px"}}src = {right} alt = "return"/></div>
                </Link>
                <div className = "row">
                    <div className = "col-7 detailInfo d-flex">
                        <div className = "postInfo">
                            <span> {this.state.data.title} </span>
                            <p> {this.state.data.description}</p>
                            <button type = "button" >Share Link</button>
                        </div>
                        <div className = "postExtension ml-auto">
                             <span className = "extensionheader">Target Price: ${this.state.data.price}/mo</span>
                             <span className = "comments">{(this.state.data.comments || []).length} comments</span>
                            <span className = "extensionHeader">Address</span>
                            <span className = "address">{this.state.data.address}</span>  
                            <span className = "extensionHeader">Contact</span>
                            <span className = "userInfo">{(this.state.data.userID || {}).username}</span>  
                            <span className = "userInfo">{(this.state.data.userID || {}).email}</span>  

                                               
                        </div>
                       

                    </div>
                    <div className = "col-4 photos ml-auto">
                        <span>View Photos</span>
                        <img className = "detailImage img-fluid" src = {
                            ((this.state.data.images || []).length > 0) ? this.state.data.images[0]: noImage
                        }  alt = "entity" />
                        <div className = "d-flex justify-content-center" style = {{marginTop: '10px'}}>
                            {
                                (this.state.data.images || []).map((image, index) => {
                                    return <img key = {index} style  = {{marginRight: '5px'}}src = {
                                        (index === 0)? radio1: radio
                                    } 
                                    alt = "select"
                                    />
                                })
                            }
                        </div>

                    </div>

                </div>
                <div className = "row commentsSec">
                    <div className = "col">
                        <div className = "d-flex">
                            <div className = "comment-title">Comments</div>
                            <button className = "ml-auto comment-button">
                                Add Comment
                            </button>

                        </div>
                        <div style = {{marginTop: '12px'}}>
                            {
                                (this.state.data.comments || []).map(comment => {
                                    return <p key = {comment}>{comment}</p>
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

        </div>
        )
    }
}
export default Detail;