import React, {Component} from "react";
import "./Browse.css";
import Navigation from "../Navigation/Navigation";
import {isLoggedIn} from "../../utils";
import close from "../../assets/close.svg"
import radio from "../../assets/radio.svg"
import radio1 from "../../assets/radio1.svg"
import search from "../../assets/search.svg"
import {endpoints} from "../../endpoints";
import {BackEndCommunicatorHelper} from "../../backendCommunicator"
import noImage from "../../assets/noImage.png";
import {Link} from "react-router-dom";


class Browse extends Component {
    backend = new BackEndCommunicatorHelper(null)
    state = {
        posts: []
    }
    constructor(props) {
        super(props)
        this.filters = ["Summer", "UW Madison", "Madison, WI"]
    }

    clickHandler(){
        
    }

   async componentDidMount(){
        const request = this.backend.openRequest({
            useBase: false,
            url: endpoints.posts,
            method: BackEndCommunicatorHelper.GET
            
        })
        await request.send().then(
            response => {
                console.log(response.data)
                this.setState({
                    posts: response.data
                })
            }
        )
        
    }   

    render() {
        return (
            <div className = "Browse">
                <Navigation isLoggedIn = {isLoggedIn()} /> 
                <div className = "container-fluid wrapper" >
                    <div className = "filterHeader d-flex">
                        { 
                            this.filters.map(filter => {
                                return (
                                    <div className = "filterBox d-flex " key = {filter}> 
                                        <span>{filter}</span> 
                                        <img src = {close} className = "ml-auto" alt = "close" />

                                    </div>
                                )
                            })
                            
                        }   

                    </div>
                    <div className = "row">
                        <div className = "col-4 filterMenu">
                            <span className = "title">
                                Filters:
                            </span>
                            <div className = "filter">
                          
                               <form>
                                   <div className = "group">
                                      <span className= "groupHeader">
                                        Semester
                                      </span> 
                                      <div className = "selections">
                                         {
                                             ["Summer", "Spring", "Fall", "Winter"].map((sem, index) => {
                                                 return (
                                                     <div key = {sem} className =  "selection" 
                                                     >
                                                        <span >
                                                            <img className =  "radio" 
                                                               
                                                                 src = {
                                                                     (index === 0)? radio1: radio
                                                                } alt = {sem} />
                                                            <span className = "semester">{sem}</span>
                                                        </span> 
                                                     </div>
                                                 )
                                             })
                                         } 
                                      </div>
                                   </div>
                                   <div className = "group">
                                     <span className= "groupHeader">
                                        University
                                      </span> 
                                      <div className = "subsection">
                                          <div className = "filterDropdown d-flex">
                                              <span>UW Madison</span>
                                              <img src = {search} alt = "search" className = "ml-auto" />

                                          </div>
                                      </div>

                                   </div>
                                   <div className = "group">
                                     <span className= "groupHeader">
                                        City
                                      </span> 
                                      <div className = "subsection">
                                          <div className = "filterDropdown d-flex">
                                              <span>Madison, WI</span>
                                              <img src = {search} alt = "search" className = "ml-auto" />

                                          </div>
                                      </div>

                                   </div>
                               </form>

                            </div>
                        </div>  
                        <div className = "col-8 posts">
                            <div className = "container">
                                {
                                    this.state.posts.map((post, index) => {
                                        return ( 
                                            <Link to = {`/detail/${post._id}`} >
                                            <div className = "postContainer d-flex">
                                                <div>
                                                    <img className = "postImage" src  = {
                                                         post.images.length > 0 ? post.images[0]: noImage
                                                        } alt = {post.title} /> 
                                                </div>
                                                <div className = "postInfo">
                                                    <span> {post.title} </span>
                                                    <p> {post.description}</p>

                                                </div>

                                                <div className = "postExtension ml-auto">
                                                    <span className = "price">Target Price: ${post.price}/mo</span>
                                                    <span className = "address">{post.address}</span>
                                                    
                                                    <span className = "comments">{post.comments.length} comments</span>
                                                </div>
                                            
                                            </div>
                                            </Link>
                                        )
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
export default Browse;