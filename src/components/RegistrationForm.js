import { useState } from 'react';
import NavBar from './NavBar.js';

const RegistrationForm = () => {

    // RegistrationForm can go through 5 states
    // states: (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsucessful
    const [state, setState] = useState("initial");

    // errorsState is for tracking the validation errors
    const [errorsState, setErrorsState] = useState([]);
    
    // Declare undefined variables for the ref props
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneNumberField;
    let avatarInput;
    let termsAndConditionsCheckbox;

    // formData is a constructor for creating an object 
    // that works like an HTML ffrom element
    const formData = new FormData ();

    const register = () => {


        const errors = [];
        
        // 1. Validate all of the required fields
        if( firstNameField.value.length === 0 ) {
            errors.push("Please enter your first name");
        }
        if( lastNameField.value.length === 0 ) {
            errors.push("Please enter your last name");
        }
        if( emailField.value.length === 0 ) {
            errors.push("Please enter valid email");
        }
        if( passwordField.value.length === 0 ) {
            errors.push("Please enter valid password");
        }
        if( termsAndConditionsCheckbox.checked === false ) {
            errors.push("Please accept the terms & conditions");
        }

        // 1.1 If there are errors, set the state to "validationFailed"
        if(errors.length > 0) {
            setState("validationFailed");
            setErrorsState(errors);
        }

        // 1.2 If there are no errors, set the state to "loading"
        else {
            setState("loading");
            setErrorsState([]);
            // 2.1 If the submission is successful, set state to "successful"

            formData.append('firstName', firstNameField.value);
            formData.append('lastName', lastNameField.value);
            formData.append('email', emailField.value);
            formData.append('password', passwordField.value);
            formData.append('phoneNumber', phoneNumberField.value);

            fetch(
                `${process.env.REACT_APP_BACKEND}/users/create`,
                    {
                        method: 'POST',
                        body: formData
                    }
            )
            // the .json() will convert a 'stringified' object to a JavaScript object
            .then (
                
                    (backendResponseJson) => backendResponseJson.json()
            
            )
            .then(
                (backendResponse) => {
                    console.log(backendResponse);
                    if (backendResponse.status === "successful") {
                        setState("successful");
                    } else {
                        setState("unsuccessful");
                    }                    
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    setState("unsuccessful");
                }
            )
            // 2.2 If the submission is successful, set state to "unsucessful"
        }

    }

    return (
        <div className="container" style={{"marginTop": "5em", "maxWidth": "40em"}}>
            
            <h1 className="pt-5">Register your Interest</h1>
            <br/>

            <label>Enter your firstname *</label>
            <input ref={(element)=>{ firstNameField =  element}} className="field form-control" name="firstName" type="text" />

            <label>Enter your lastname *</label>
            <input ref={(element)=>{ lastNameField =  element}} className="field form-control" name="lastName" type="text" />

            <label>Enter your email *</label>
            <input ref={(element)=>{ emailField =  element}} className="field form-control" name="email" type="text" />

            <label>Enter a password *</label>
            <input ref={(element)=>{ passwordField =  element}} className="field form-control" name="password" autocomplete="off" type="password" />

            <label>Enter your phone (optional)</label>
            <input ref={(element)=>{ phoneNumberField =  element}} className="field form-control" name="phoneNumber" type="text" />

            <br/><br/>

            <label>Upload your profile picture</label>
            <input ref={(element)=>{ avatarInput = element}} className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/>

            <label>Do you agree to terms &amp; conditions? *</label>
            <input ref={(element)=>termsAndConditionsCheckbox = element} className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            {
                state !== "loading" &&
                <div>
                    <button 
                    onClick={register}
                    className="btn btn-primary"
                    style={{"padding": "10px", "fontSize": "16px"}}>
                        Submit
                    </button><br/><br/>
                </div>
            }

            {
                state === "validationFailed" &&
                <div className="alert alert-danger">

                    <ul>
                        {
                            errorsState.map(
                                (error) => {
                                    return <li>{error}</li>
                                }
                            )
                        }
                    </ul>

                </div>
            }

            {
                state === "successful" &&
                <div className="alert alert-success">You have a successfully created an account</div>
            }

            {
                state === "loading" &&
                <p>Loading...</p>
            }
            {
                state === "unsuccessful" &&
                <div className="alert alert-danger">An error occured. Please try again.</div>
            }

        </div>
    )
};

export default RegistrationForm;