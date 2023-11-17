"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Logo from "@assets/logo.png";
import Link from "next/link";
import CountrySelectionMenu from "./CountrySelectionMenu";

export default function DesktopHeader() {
	return (
		<div className="bg-gradient-to-bl from-header to-black px-5 py-5 grid grid-cols-10 justify-center items-center rounded-sm shadow-sm">
			<div className="col-span-2 relative">
				<Link href={"/"}>
					<Image
						src={Logo}
						alt="Logo"
						priority
						className="object-contain"
					/>
				</Link>
			</div>
			<div className="col-span-5 flex gap-2 md:gap-5 xl:gap-7 text-white font-opensans font-semibold md:text-[12px] xl:text-sm">
				<Link href="#" className="py-0.5 hover:border-b">
					Live
				</Link>
				<Link href="#" className="py-0.5 hover:border-b">
					Sports Betting
				</Link>
				<Link href="#" className="py-0.5 hover:border-b">
					Casino
				</Link>
				<Link href="#" className="py-0.5 hover:border-b">
					Lucky Drops
				</Link>
				<Link href="#" className="py-0.5 hover:border-b">
					Live Casino
				</Link>
				<Link href="#" className="py-0.5 hover:border-b">
					Promotions
				</Link>
			</div>
			<div className="col-span-3 flex items-center justify-end gap-3">
				<CountrySelectionMenu />

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
	);
}
