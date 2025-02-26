const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			auth: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			logout: () => {
				console.log("logout")	
				localStorage.removeItem("token");
				setStore({ auth: false});
			},

			login: (email, password) => {
				const requestOptions = {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify({email, password}),
				};
		
				return fetch(process.env.BACKEND_URL+ "/api/login", requestOptions)
					.then(response => {
						console.log(response.status)
						if (response.status == 200){
							return response.json().then(data => {
								localStorage.setItem("token", data.access_token);
								setStore({ auth: true });
								return true; // Exito
							});
						} else{
								setStore({ auth: false });
								return false; //fallo el login
						}
			})
		},

			signup: (email, password) => {
				const requestOptions = {
					method: "POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(
						{
							"email":email,
							"password":password
						}
					)
				};
		
				fetch(process.env.BACKEND_URL+ "/api/signup", requestOptions)
					.then(response => response.text())
  					.then((result) => console.log(result))
					
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
