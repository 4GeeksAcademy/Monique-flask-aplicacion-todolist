import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navigate } from "react-router-dom";
import LoginForm from "../component/form";
import Signup from "../component/signup";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [isSignup, setIsSignup] = useState(false); //Corrección del nombre de estado

	// Cambiar entre login y signup
	const handleSignup = () => setIsSignup(true);
	const handleGoToLogin = () => setIsSignup(false);


	return (
		<div className="text-center mt-5">
			<h1>¡Bienvenido!</h1>
			{/* Si está autenticado, redirige a la página privada */}
			{store.auth ? (
				<Navigate to="/demo" />
			) : (
				<>
					{/* Si estamos en proceso de signup, mostramos Signup */}
					{isSignup ? (
						<div>
							<Signup />
							<div className="button-container">
							<button onClick={handleGoToLogin} aria-label="Ir a login" className="btn btn-link text-primary">¿Ya tienes cuenta? Inicia sesión</button>
						 	</div>
						</div>
					) : (
						<div>
							<LoginForm />
							<button onClick={handleSignup} aria-label="Ir a signup" className="btn btn-link text-primary">¿No tienes cuenta? Regístrate</button>
						</div>
					)}
				</>
			)}
		</div>
	);
};
