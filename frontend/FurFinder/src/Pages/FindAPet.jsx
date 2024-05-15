import React, { useState, useEffect } from "react";

import NavBar from "../Components/NavBar";
import FindAPetContainer from "../Components/FindAPetContainer";
import AnimatedPage from "./AnimatedPage";

const FindAPet = () => {
	const baseUrl = "http://localhost:8000/api/";
	const [pets, setPets] = useState([]);

	useEffect(() => {
		fetchPets(baseUrl + "pets/");
	}, []);

	function fetchPets(baseUrl) {
		fetch(baseUrl)
			.then((response) => response.json())
			.then((data) => {
				setPets(data);
			});
	}

	return (
		<>
			<NavBar />
			<AnimatedPage>
				<div className="container mx-auto px-1">
					<main className="mt-4">
						<div className="grid font-montserrat grid-cols-5 sm:grid-cols-2 md:grid-cols-3 gap-3">
							{pets &&
								pets.map((pet) => (
									<div key={pet.id} className="">
										<FindAPetContainer pet={pet} />
									</div>
								))}
						</div>
					</main>
				</div>
			</AnimatedPage>
		</>
	);
};

export default FindAPet;
