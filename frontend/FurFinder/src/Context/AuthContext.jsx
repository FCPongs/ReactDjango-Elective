import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	);

	const [customer, setCustomer] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	);

	const [loading, setLoading] = useState(true);

	const loginCustomer = async (e) => {
		e.preventDefault();
		if (e.target.username.value == "customer") {
			logoutCustomer();
			return;
		}

		const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: e.target.username.value,
				password: e.target.password.value,
			}),
		});

		try {
			const data = await response.json();
			if (response.status === 200) {
				setError(false);
				setErrorMessage("");
				setAuthTokens(data);
				setCustomer(data.access);
				localStorage.setItem("authTokens", JSON.stringify(data));
				window.location.href = "/";
			} else {
				setError(true);
				setErrorMessage(
					data.message || "Invalid username or password. Please try again!"
				);
			}
		} catch (error) {
			setError(true);
			setErrorMessage("An error occurred. Please try again later.");
			console.error("Login error:", error);
		}
	};

	const logoutCustomer = () => {
		setAuthTokens(null);
		setCustomer(null);
		localStorage.removeItem("authTokens");
		window.location.href = "/";
	};

	const updateToken = async () => {
		console.log("Update token!");
		try {
			const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify({
					refresh: authTokens?.refresh,
				}),
			});

			if (response.ok) {
				const data = await response.json();
				setAuthTokens(data);
				setCustomer(data.access);
				localStorage.setItem("authTokens", JSON.stringify(data));
			} else {
				logoutCustomer();
			}
			if (loading) {
				setLoading(false);
			}
		} catch (error) {
			console.error("Error updating token:", error);
		}
	};

	const contextData = {
		customer: customer,
		authTokens: authTokens,
		loginCustomer: loginCustomer,
		logoutCustomer: logoutCustomer,
		error: error,
		errorMessage: errorMessage,
	};

	return (
		<AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
	);
};
