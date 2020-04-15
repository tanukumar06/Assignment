import React, { Component } from "react";
import { FormControl , Form , FormLabel,Button, FormCheck,FormFile} from "react-bootstrap";
import  "./registerform.css";

class Register extends Component{
    render(){
      return(
        <div className="container">
         <h1 className="heading">Registration Form</h1>
            <div className="row">
                 <div className="col-lg-12">
                    <Form className="registerform">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12 col-md-4">
                                <FormLabel >First Name</FormLabel>
                                <FormControl  type="text" placeholder= "Please Enter Your FirstName"></FormControl>
                            </div>
                            <div className="col-lg-3 col-sm-12 col-md-4">
                                <FormLabel >Last Name</FormLabel>
                                <FormControl  type="text" placeholder= "Please Enter Your LastName"></FormControl>
                            </div>
                            <div className="col-lg-3 col-sm-12 col-md-4">
                                <FormLabel> Range Button </FormLabel>
                                <FormControl type="range" custom/>
                                {/* custom is used to get the styling of the select element*/}
                            </div>
                            <div className="col-lg-3 col-sm-12 col-md-4">
                                <FormLabel>Toggle Button</FormLabel>
                                <FormCheck type="switch" id="toggleid" label="Off/On"></FormCheck>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 col-md-6">
                                <FormLabel>File Upload</FormLabel>
                                <FormFile id="file"></FormFile>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-4">
                                     Gender
                                    {['radio'].map((type) => (
                                    <div>
                                        <Form.Check inline type ={type} id={`maleid`} label={`Male`} />
                                        <Form.Check inline type= {type} label={`Female`} id={`femaleid`} />
                                    </div>
                                    ))}
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-4">
                            Hobbies {['checkbox'].map((type) =>(
                            <div>
                                <Form.Check inline type = {type} id={`football`} label ={`FootBall`} />
                                <Form.Check inline type = {type} id={`cricket`} label ={`Cricket`} />
                                <Form.Check inline type = {type} id={`hockey`} label ={`Hockey`} />
                                <Form.Check inline type = {type} id={`badminton`} label ={`Badminton`} />
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 col-md-4">
                        <Button variant="primary">Submit</Button>
                        </div>
                    </div>
                    </Form>
                 </div>
            </div>
        </div>
      );
    }
}
export default Register;