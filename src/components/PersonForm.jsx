import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonForm = props => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const createUser = e => {
        e.preventDefault();
        const user = {
            first_name, last_name, email, password, conpassword};
        props.setUser(user);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConPassword("");
    };
    return (
        <div className="col-sm-4 mt-5">
            <form onSubmit={createUser}>
                <div className="form-group">
                    <label>First name:</label>
                    <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)} value={first_name} />
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input type="text" className="form-control" onChange={e => setLastName(e.target.value)} value={last_name} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" onChange={e => setConPassword(e.target.value)} value={conpassword}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary btn-block" />
                </div>
            </form>
        </div>
    );
}

export default PersonForm;