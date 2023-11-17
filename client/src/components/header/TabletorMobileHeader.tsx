"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Logo from "@assets/logo.png";
import Link from "next/link";
import CountrySelectionMenu from "./CountrySelectionMenu";
import { IoReorderThreeOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import { useMediaQuery } from "react-responsive";

export default function TabletorMobileHeader() {
	const [openModal, setOpenModal] = useState(false);
	const isVerySmallScreen = useMediaQuery({ query: "(max-width: 280px)" });
	return (
		<div className="relative bg-gradient-to-bl from-header to-black px-5 py-5 grid grid-cols-2 justify-between items-center rounded-sm shadow-sm">
			<div
				className={`col-span-1 relative ${
					isVerySmallScreen ? "w-20" : "w-28"
				} md:w-full`}
			>
				<Link href={"/"}>
					<Image
						src={Logo}
						alt="Logo"
						priority
						className="object-contain"
					/>
				</Link>
			</div>
			<div className="col-span-1 flex items-center justify-end gap-3">
				<CountrySelectionMenu />
				{openModal ? (
					<LiaTimesSolid
						onClick={() => setOpenModal(!openModal)}
						className={`text-[35px] ease-in duration-300 transition-all translate-x-1`}
					/>
				) : (
					<IoReorderThreeOutline
						onClick={() => setOpenModal(!openModal)}
						className={`text-[35px]  transition-all translate-x-1 ease-in duration-300 delay-150`}
					/>
				)}
			</div>

			{openModal && (
				<div className="absolute top-16 left-0 right-0 bg-gradient-to-bl from-header to-black transition-all duration-150 ease-linear">
					<div className="flex flex-col items-start font-opensans font-semibold text-xs sm:text-sm md:text-md">
						<Link
							href="#"
							className="py-3 flex w-full border-b-blue-gray-400 border-b rounded-md p-2 px-5"
						>
							Live
						</Link>
						<Link
							href="#"
							className="py-3 flex w-full border-b-blue-gray-400 border-b rounded-md p-2 px-5"
						>
							Sports Betting
						</Link>
						<Link
							href="#"
							className="py-3 flex w-full border-b-blue-gray-400 border-b rounded-md p-2 px-5"
						>
							Casino
						</Link>
						<Link
							href="#"
							className="py-3 flex w-full border-b-blue-gray-400 border-b rounded-md p-2 px-5"
						>
							Lucky Drops
						</Link>
						<Link
							href="#"
							className="py-3 flex w-full border-b-blue-gray-400 border-b rounded-md p-2 px-5"
						>
							Live Casino
						</Link>
						<Link
							href="#"
							className="py-3 flex w-full border-b-blue-gray-400 border-b rounded-md p-2 px-5"
						>
							Promotions
						</Link>
					</div>
					<div
						className={`flex ${
							isVerySmallScreen && "flex-col"
						} gap-3 p-3`}
					>
						<div>
							<Button
								variant="gradient"
								color="red"
								size="sm"
								ripple={true}
							>
								Login
							</Button>
						</div>
						<div>
							<Button
								variant="gradient"
								color="orange"
								size="sm"
								ripple={true}
							>
								Register
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
