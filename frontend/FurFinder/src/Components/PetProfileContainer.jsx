import React from "react";
import { Link } from "react-router-dom";
import AdoptButton from "./Button";

const PetProfileContainer = ({ pet }) => {
	const getImage = (s = "lol") => {
		let counter = 0;
		for (let c of s) {
			counter += c.charCodeAt(0);
		}

		counter = (counter % 7) + 1;

		return "src/Images/miming" + counter.toString() + ".jpeg";
	};

	return (
		<>
			{/** Parent Container Div */}
			<div className="flex items-center justify-center w-[100vw] h-[85vh] overflow-hidden">
				{/** Main container- Flex Row */}
				<div className="flex w-[70vw] h-[80vh] items-center">
					{/** Image */}
					<img
						className="shadow-2xl rounded-xl h-[320px] w-[25vw] object-cover mr-5"
						src={getImage(pet.name)}
						alt="Profile"
					/>

					{/** Name and Details- Flex Col */}
					{/** Parent Div */}
					<div className="flex flex-col p-5 rounded-lg border-2 w-[100%] h-[55vh] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
						{/** Name */}
						<div className="text-5xl font-semibold mb-5">{pet.name}</div>

						{/** Details */}
						<div className="flex gap-5 mb-5 font-medium text-l ">
							<div className="bg-red-200 rounded-xl w-auto h-10 flex items-center">
								<div className="p-4">Age: {pet.age}</div>
							</div>
							<div className="bg-blue-200 rounded-xl w-auto h-10 flex items-center">
								<div className="p-4">Breed: {pet.breed}</div>
							</div>
							<div className="bg-green-200 rounded-xl w-auto h-10 flex items-center">
								<div className="p-4">Date Added: {pet.date_added}</div>
							</div>
						</div>

						<div className="flex flex-col justify-between h-[60%] overflow-hidden ">
							{/** Description */}
							<div className="text-justify text-xl w-[100%] h-[90%]  pr-4 scrollbar-thin overflow-auto scrollbar-thumb-custom scrollbar-track-custom-light hover:scrollbar-thumb-[#059669] active:scrollbar-thumb-emerald-500/50">
								{pet.description}
							</div>
						</div>
						<div className="flex justify-end items-end mt-auto">
							<Link to="/Application">
								<AdoptButton buttonText="Adopt" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PetProfileContainer;
