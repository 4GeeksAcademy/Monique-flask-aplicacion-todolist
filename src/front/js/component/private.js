import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";

const Private = () => {
    const {store} = useContext(Context);

    if(!store.auth){
        //si no esta logueado, redirige a la pagina de login
        return <Navigate to="/login"/>;
    }

return (
    
        <div className="private-container">
            <div className="img"> 
                <img src={rigoImageUrl}/>
            </div>
            <h2>¡Bienvenido a la zona secreta! </h2>            
        </div>
    
)
}

export default Private