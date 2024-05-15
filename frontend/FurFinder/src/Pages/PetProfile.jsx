import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import PetProfileContainer from "../Components/PetProfileContainer";
import background from "../Images/PetProfile (Background).png";
import AnimatedPage from "./AnimatedPage";

const PetProfile = () => {
	const baseUrl = "http://localhost:8000/api/";
	const [pet, setPet] = useState({});

	const query = new URLSearchParams(window.location.search);
	const petId = query.get("id");

	useEffect(() => {
		fetchPet(baseUrl + `pets/${petId}`);
	}, []);

	function fetchPet(baseUrl) {
		fetch(baseUrl)
			.then((response) => response.json())
			.then((data) => {
				setPet(data);
			});
	}

	return (
		<>
			<div
				className="bg-cover bg-center min-h-screen"
				style={{ backgroundImage: `url(${background})` }}>
				<NavBar />
				<AnimatedPage>
					<PetProfileContainer pet={pet} />
				</AnimatedPage>
			</div>
		</>
	);
};

export default PetProfile;
