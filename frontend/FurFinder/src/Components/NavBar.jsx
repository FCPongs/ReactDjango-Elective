import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

import LogoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";

import { useState } from "react";

const NavBar = () => {
	const [isOpen, setOpen] = useState(false);
	const { authTokens } = useContext(AuthContext);
	console.log(authTokens);
	return (
		<>
			{/** Div wrapper    */}

			<div className="flex items-center justify-between bg-[#ffffff] shadow-xl h-24">
				<div className="flex items-center">
					<img src={LogoImage} alt="Logo" className="h-20 ml-5 mr-5" />
					<h1 className="text-2xl font-bold">FurFinder</h1>
				</div>

				<ul className="flex text-l ">
					{/** Home */}
					<li className="p-4 hover:underline">
						<Link to="/">Home</Link>
					</li>
					{/** About Us */}
					<li className="p-4 hover:underline" href="#">
						<a href="">About us</a>
					</li>
					{/** Contact Us */}
					<li className="p-4 hover:underline">
						<a href="#">Contact us</a>
					</li>
					{/** Find a Pet */}
					<li className="p-4 hover:underline">
						<Link to="/FindAPet">Find a pet</Link>
					</li>

					{/** Manage Pets */}
					{authTokens && (
						<div className="p-4 relative hover:underline cursor-pointer">
							{/** Button dropdown*/}
							<div className="" onClick={() => setOpen((prev) => !prev)}>
								Manage pets
							</div>

							{isOpen && (
								<>
									<div className="absolute w-40 mt-2 bg-slate-100 shadow-md">
										<Link to="/AddPet">
											<li className="cursor-pointer hover:bg-indigo-500 hover:text-white p-1">
												Add Pet
											</li>
										</Link>

										<Link to="/EditPets">
											<li className="cursor-pointer hover:bg-orange-500 hover:text-white p-1">
												Edit Pet
											</li>
										</Link>

										<Link to="/DeletePet">
											<li className="cursor-pointer hover:bg-red-500 hover:text-white p-1">
												Delete Pet
											</li>
										</Link>
									</div>
								</>
							)}
						</div>
					)}
				</ul>

				<div className="flex items-center">
					<div className="mr-10 ml-10">
						<Link to="/logout">
							<p className="p-4 hover:underline">Logout</p>
						</Link>
					</div>
					<h1 className="mr-5">
						{authTokens ? "Hello, Admin!" : "Hello, Customer!"}
					</h1>
				</div>
			</div>
		</>
	);
};

export default NavBar;
