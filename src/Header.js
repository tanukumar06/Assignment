import React,{ Component } from "react";
import logo from "./logo.png";
import "./Header.css";
import Dropdown from "react-bootstrap/Dropdown"

class Header extends Component{
    render(){
        return(
            <div>
                <div className="header">
                <nav className="navbar navbar-expand-lg">
                    <img src = { logo } alt = "logo" />
                </nav>
                </div>
                <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle  id="dropdown-screen">
                        Standard Screen
                     </Dropdown.Toggle>  
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="1">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>

                   <Dropdown>
                    <Dropdown.Toggle  id="dropdown-lang">
                        Language
                     </Dropdown.Toggle>  
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="1">English</Dropdown.Item>
                    </Dropdown.Menu>
                 </Dropdown>
                </div>
            </div>
        );
    }
}
export default Header;
