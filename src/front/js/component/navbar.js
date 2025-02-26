import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate()
		
	function handleLogout(){
		actions.logout()
		navigate("/")
	}
			
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<button className="btn btn-primary ms-auto"  onClick={()=>handleLogout()}>Logout</button> 
			</div>
		</nav>
	);
};
