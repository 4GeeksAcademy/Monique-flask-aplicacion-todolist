import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectoToLogin, setRedirectToLogin] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.signup(email, password)
        setRedirectToLogin(true); //redirige al login despues de crear el usuario   

    };

    if (redirectoToLogin) {
        return <Navigate to="/login"/>
    }

    return (
        <div className="form-container">
        <div className="form-wrapper">
            <h2>Crear Cuenta</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Registro</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
