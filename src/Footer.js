import React,{ Component } from "react";
import './Footer.css'

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footer">
                    <div className="content1">
                        Copyright @ 2018 Tata Consultancy Services
                    </div>
                    <div className="content2">
                        <p>Terms of Use - Sitemap - Browser and Display Compatibility</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;