import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonForm = props => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const createUser = e => {
        e.preventDefault();
        const user = {
            first_name, last_name, email, password, conpassword
        };

        // set it to true to change the header fo the form
        setHasBeenSubmitted(true);

        // pass the user to the App
        props.setUser(user);

        // clean the form after creating the user
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConPassword("");
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    const nameErrors = e => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = "Name is required!"
        } else if (value.length < 2) {
            message = "Name must be 2 characters or longer!"
        }
        setErrors({ ...errors, name: message });
    }

    const emailErrors = e => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = "Email is required!"
        } else if (value.length < 5) {
            message = "Email must be 5 characters or longer!"
        }
        setErrors({ ...errors, email: message });
    }

    const passWErrors = e => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = "Password is required!"
        } else if (value.length < 8) {
            message = "Password must be 8 characters or longer!"
        }
        setErrors({ ...errors, password2: message });
    }

    const conpassWErrors = e => {
        let value = e.target.value;
        let message = "";
        if (!value) {
            message = "Please Confirm your Password!"
        } else if (value == password) {
            message = "This should be identecal to your Password!"
        }
        setErrors({ ...errors, conpassword2: message });
    }

    return (
        <div className="col-sm-4 mt-5">
            <h3>{formMessage()}</h3>
            <form onSubmit={createUser}>
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)} onBlur={nameErrors} value={first_name} />
                    <p className="text-danger">{errors.name}</p>
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" className="form-control" onChange={e => setLastName(e.target.value)} onBlur={nameErrors} value={last_name} />
                    <p className="text-danger">{errors.name}</p>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} onBlur={emailErrors} value={email} />
                    <p className="text-danger">{errors.email}</p>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} onBlur={passWErrors} value={password} />
                    <p className="text-danger">{errors.password2}</p>
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" onChange={e => setConPassword(e.target.value)} onBlur={conpassWErrors} value={conpassword} />
                    <p className="text-danger">{errors.conpassword2}</p>
                </div>
                <div className="form-group">
                    {
                        first_name.length >= 2 && last_name.length >= 2 && email.length >= 5 && password.length >= 8 && conpassword.length >= 8 ?
                            <input type="submit" value="Register" className="btn btn-primary btn-block" /> :
                            <input type="submit" value="Register" className="btn btn-primary btn-block" disabled />
                    }</div>
            </form>
        </div>
    );
}

export default PersonForm;