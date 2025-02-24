import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {store, actions} = useContext(Context);
    
    function sendData(e){
        e.preventDefault();
        console.log("send data")
        console.log(email, password)

      actions.login(email, password)
       
   }

    return (
        <div className="form-container">
            <form className="w-50 mx-auto"  onSubmit={sendData}>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)}required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}required/>
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        );
};


export default LoginForm;