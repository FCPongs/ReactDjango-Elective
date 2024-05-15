import React, { useState, useContext } from "react";
import AuthContext from "../Context/AuthContext";
import NavBar from "../Components/NavBar";
import AnimatedPage from "./AnimatedPage";
import Cookies from "js-cookie";

const AddPet = () => {
	const { authTokens } = useContext(AuthContext);

	const [petData, setPetData] = useState({
		name: "",
		type: "",
		breed: "",
		age: 0,
		photo_url: "miming.jpeg",
		description: "",
		csrftoken: Cookies.get("csrftoken"),
	});

	const handleChange = (e) => {
		setPetData({
			...petData,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://127.0.0.1:8000/api/pets/", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + authTokens.key,
				},
				body: JSON.stringify(petData),
			});
			if (response.ok) {
				const data = await response.json();
				console.log("Received data:", data);
				window.location.href = `http://localhost:5173/PetProfile?id=${data.id}`;
			}
		} catch (error) {
			console.error("Error adding pet:", error);
		}
	};

	return (
		<>
			<NavBar />
			<AnimatedPage>
				{/** Name, animal type, breed, age, image, description */}

				{/** Outside div to consume the whole width and height*/}
				<div className="flex justify-center h-screen">
					{/** Div box*/}

					<form
						onSubmit={handleSubmit}
						className="flex flex-col w-[55vw] h-[70vh] mt-[10vh] rounded-md shadow-[5px_5px_10px_rgba(8,_112,_184,_0.7)] ">
						{/** Title */}
						<div className="w-[100%] bg-indigo-600 text-3xl font-bold rounded-t-lg shadow-md">
							<div className="m-[2vh] text-white">Add Pet</div>
						</div>

						<div className=" w-[100%] h-[70%] scrollbar-thin overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
							{/** Name and Type*/}
							<div className="flex justify-start space-x-4 p-2 w-[100%] mt-2 mx-4">
								{/** Name */}
								<div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
									<div className="font-bold">Name: </div>
									<div className="p-2">
										<input
											onChange={handleChange}
											type="text"
											id="name"
											className="border border-gray-400 rounded w-[20vw] h-[5vh] py-2 px-2"
											placeholder="Name"></input>
									</div>
								</div>
								{/** Type */}
								<div className="p-2 border rounded-lg border-slate-200 shadow-md">
									<div className="font-bold">Type: </div>
									<div className="p-2">
										<input
											onChange={handleChange}
											type="text"
											id="type"
											className="border border-gray-400  rounded w-[15vw] h-[5vh] py-4 px-2"
											placeholder="Type"></input>
									</div>
								</div>
							</div>

							{/** Breed, Age, Image*/}
							<div className="flex justify-start space-x-4 p-2 mx-4">
								{/** Breed */}
								<div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
									<div className="font-bold">Breed: </div>
									<div className="1">
										<input
											onChange={handleChange}
											type="text"
											id="breed"
											className="border border-gray-400  rounded w-[15vw] h-[5vh] py-4 px-2"
											placeholder="Breed"></input>
									</div>
								</div>
								{/** Age */}
								<div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
									<div className="font-bold">Age: </div>
									<div className="p-1">
										<input
											onChange={handleChange}
											type="number"
											id="age"
											className="border border-gray-400  rounded w-[15vw] h-[5vh] py-4 px-2"
											placeholder="Age"
											min="0"
											max="30"></input>
									</div>
								</div>
								{/** Image */}
								<div className="p-2 border rounded-lg border-slate-500/25 shadow-md">
									<div className="font-bold">Image: </div>
									<div className="p-1">
										<input
											type="file"
											id="photo_url"
											className="rounded w-[15vw] h-[6vh] py-2 px-1"
											placeholder="Age"
											min="0"
											max="30"></input>
									</div>
								</div>
							</div>

							{/** Description */}
							<div className="p-2 flex justify-start mx-4">
								<div>
									<div className="font-bold">Description: </div>
									<textarea
										onChange={handleChange}
										id="description"
										rows="2"
										className="shadow-md block p-2.5 w-[52vw] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Write the description here..."
									/>
								</div>
							</div>
						</div>
						{/** Add Button */}
						<div className="flex justify-end p-5">
							<button
								type="submit"
								className="w-[20vh] h-[5vh] flex items-center justify-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
								Add
							</button>
						</div>
					</form>
				</div>
			</AnimatedPage>
		</>
	);
};

export default AddPet;
