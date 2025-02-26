import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";

const Private = () => {
    const {store, actions} = useContext(Context);

return (
    <>
        {store.auth === true ? (
        <div className="private-container">
            <div className="img"> 
                <img src={rigoImageUrl}/>
            </div>
            <h2>¡Bienvenido a la zona secreta! </h2>            
        </div>
        ) : (
            <Navigate to = "/"/>
        )}
    </>

)
}

export default Private