import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "./Context/AuthContext";

import Home from "./Pages/Home.jsx"; //* Home Page
import FindAPet from "./Pages/FindAPet.jsx"; //* Find a Pet Page
import PetProfile from "./Pages/PetProfile.jsx"; //* Pet Profile Page
import Login from "./Pages/Login.jsx"; //* Login Page
import Application from "./Pages/Application.jsx"; //* Application Page
import ContactUs from "./Pages/ContactUs.jsx"; //*Contact Us Page
import AboutUs from "./Pages/AboutUs.jsx"; //* About Us Page

import AddPet from "./Pages/AddPet.jsx"; //* Add Pet Page
import EditPet from "./Pages/EditPet.jsx"; //* Edit Pet Page
import EditPets from "./Pages/EditPets.jsx"; //* Edit Pet Page
import DeletePet from "./Pages/DeletePet.jsx"; //* Delete Pet Page
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <div>404 Not Found</div>,
	},
	{
		path: "/AboutUs",
		element: <AboutUs />,
	},
	{
		path: "/ContactUs",
		element: <ContactUs />,
	},
	{
		path: "/FindAPet",
		element: <FindAPet />,
	},
	{
		path: "/PetProfile",
		element: <PetProfile />,
	},
	{
		path: "/Login",
		element: <Login />,
	},
	{
		path: "/AddPet",
		element: <AddPet />,
	},
	{
		path: "/Application",
		element: <Application />,
	},
	{
		path: "/EditPets",
		element: <EditPets />,
	},
	{
		path: "/EditPet",
		element: <EditPet />,
	},
	{
		path: "/DeletePet",
		element: <DeletePet />,
	},
	{
		path: "/Logout",
		element: <Login />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);
