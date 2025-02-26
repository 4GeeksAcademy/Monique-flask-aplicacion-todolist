import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const {store, actions} = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // estado para msg de error caso el usuario no tenga cuenta registrada
    const navigate = useNavigate();
    
    function sendData(e){
        e.preventDefault();
        console.log("send data", email, password);

      actions.login(email, password).then(success => {
        if (success) {
          navigate("/private");
        } else {
          setError("Usuario no encontrado! Necesitas crear una cuenta primero.");
          console.error("Error al iniciar sesion");
        }
      });
       
   }

    return (
        <div className="form-container">
          <div className="form-wrapper">
            <h2>Iniciar sesión</h2>
            <form onSubmit={sendData}>
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)}required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}required/>
              </div>
              {error && <div className="alert alert-danger">{error}</div>} {/*mostrar el msg de error*/}
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
        );
};


export default Login;