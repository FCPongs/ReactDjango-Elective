import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import AnimatedPage from "./AnimatedPage";

const DeletePet = () => {
	const baseUrl = "http://localhost:8000/api/";
	const [pets, setPets] = useState([]);

	useEffect(() => {
		fetchPets();
	}, []);

	function fetchPets() {
		fetch(baseUrl + "pets/")
			.then((response) => response.json())
			.then((data) => {
				setPets(data);
			});
	}

	const handleDelete = async (e) => {
		e.preventDefault();
		const response = await fetch(baseUrl + `pets/${e.target.id}`, {
			method: "DELETE",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		});

		fetchPets();
	};

	return (
		<>
			<NavBar />
			<AnimatedPage>
				<div className="flex justify-center h-screen">
					<div className="flex flex-col w-[55vw] h-[60vh] mt-[10vh] rounded-md shadow-[5px_5px_10px_rgba(8,_112,_184,_0.7)] ">
						<div className="flex w-[100%] items-center bg-red-500 text-3xl font-bold rounded-t-lg shadow-md">
							<div className="m-[2vh] text-white">Delete Pet</div>
						</div>

						<div className="w-[100%] h-[80%] scrollbar-thin overflow-y-scroll overflow-x-hidden scrollbar-thumb-sky-500 scrollbar-track-white">
							<table className="min-w-full bg-white shadow-md rounded-lg  ">
								<thead>
									{/** Name, animal type, breed, age*/}
									<tr className="font-extrabold">
										<th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
											Name
										</th>
										<th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
											Animal Type
										</th>
										<th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
											Breed
										</th>
										<th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">
											Age
										</th>
									</tr>
								</thead>
								<tbody>
									{pets &&
										pets.map((pet) => (
											<tr className="hover:bg-gray-200" key={pet.id}>
												<td className="py-3 px-4 text-center">{pet.name}</td>
												<td className="py-3 px-4 text-center capitalize">
													{pet.type}
												</td>
												<td className="py-3 px-4 text-center capitalize">
													{pet.breed}
												</td>
												<td className="py-3 px-4 text-center">{pet.age}</td>
												<td className="py-3 px-4 text-center">
													<button
														type="button"
														onClick={handleDelete}
														id={pet.id}
														className="w-[20vh] h-[5vh] flex items-center justify-center text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
														Delete
													</button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
						<div className="flex justify-end p-4"></div>
					</div>
				</div>
			</AnimatedPage>
		</>
	);
};

export default DeletePet;
