import React, { Component } from "react";
import Header from "./Header";
import Register from "./registerform";
import Footer from "./Footer";

class App extends Component{
    render(){
        return(
            <div>
               <Header />
               <Register />
               <Footer />
            </div>
        );
    }
}
export default App;