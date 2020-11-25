import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonCard = props => {
    return (
        <div className="col-sm-4 mt-5">
            <div className="card">
                <div className="card-header bg-dark text-light">User Informations</div>
                <div className="card-body">
                    <p>First Name: {props.user.first_name}</p>
                    <p>Last Name: {props.user.last_name}</p>
                    <p>Email: {props.user.email}</p>
                    <p>Password: {props.user.password}</p>
                    <p>Confirm Password: {props.user.conpassword}</p>
                </div>
            </div>
        </div>
    );
}


export default PersonCard;