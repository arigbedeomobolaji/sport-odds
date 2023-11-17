import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useMediaQuery } from "react-responsive";

export default function CountrySelectionMenu() {
	const [country, setCountry] = useState("Cy");
	const [isOpened, setIsOpened] = useState(false);
	const isVerySmallScreen = useMediaQuery({ query: "(max-width: 280px)" });
	return (
		<>
			<div
				className=" relative flex items-center font-opensans cursor-pointer"
				onClick={() => setIsOpened(!isOpened)}
			>
				{!isVerySmallScreen && (
					<div className="rounded-sm pr-2">
						<span
							className={`fi fi-${country.toLowerCase()} fib pr-2 `}
						></span>
					</div>
				)}

				<div className="flex items-center gap-1">
					<p>{country}</p>
					{isOpened ? (
						<FaChevronUp className="text-sm" />
					) : (
						<FaChevronDown className="text-sm" />
					)}
				</div>
				{isOpened && (
					<div className="absolute z-10 left-1 right-0 top-8 w-20 bg-primary text-white">
						<div
							onClick={() => setCountry("Gb")}
							className={`px-2 py-1 text-center hover:bg-subheader ${
								country === "Gb" && "bg-brown-400/25"
							}`}
						>
							Gb
						</div>
						<div
							onClick={() => setCountry("Cy")}
							className={`px-2 py-1 text-center hover:bg-subheader ${
								country === "Cy" && "bg-brown-400/25"
							}`}
						>
							Cy
						</div>
						<div
							onClick={() => setCountry("Us")}
							className={`px-2 py-1 text-center hover:bg-subheader ${
								country === "Us" && "bg-brown-400/25"
							}`}
						>
							Us
						</div>
					</div>
				)}
			</div>
		</>
	);
}
