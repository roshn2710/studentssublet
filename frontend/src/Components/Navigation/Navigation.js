import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"
import addIcon from "../../assets/addIcon.svg"
class Navigation extends Component {
    constructor(props) {
        super(props)
        this.showSideButtons = this.props.isLoggedIn || false
    }
    render() {

        return (
            <nav className="navbar navbar-expand-md navbar-light Navigation">
                <a href="/browse"><span className="navbar-brand" ><img style={{ width: "30px", verticalAlign: "top", marginTop: "3px", marginRight: "4px" }} src="/logo.png" /> Student Sublets </span></a>
                {this.getSideButtons()}

            </nav>
        )
    }
    getSideButtons() {
        if (this.showSideButtons) {
            return (
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">

                        <Link to = "/addPost">
                            <span className="nav-link link">

                                <img src={addIcon} alt="add" className="addImage img-fluid" />

                                New Listing
                                </span>
                        </Link>

                    </li>

                </ul>
            )
        } else {
            return null
        }
    }



}
export default Navigation;