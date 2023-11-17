"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import WorldCup from "@assets/cup.png";
import EuroLeague from "@assets/europ.png";
import Favourite from "@assets/start.png";
import {
	IoBasketballOutline,
	IoFootballOutline,
	IoTennisballOutline,
} from "react-icons/io5";
import { FaChevronDown, FaVolleyballBall } from "react-icons/fa";
import { LiaTableTennisSolid } from "react-icons/lia";
import { TbPlayHandball } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";

type ListType = {
	image: StaticImageData;
	imageAlt: string;
	listText: string;
	lastChild?: boolean;
};

const LIVELISTITEM: ListItemType[] = [
	{
		listName: "Soccer",
		Icon: IoFootballOutline,
		numberAvailable: 2,
	},
	{
		listName: "Tennis",
		Icon: IoTennisballOutline,
		numberAvailable: 20,
	},
	{
		listName: "Basketball",
		Icon: IoBasketballOutline,
		numberAvailable: 12,
	},
	{
		listName: "Table Tennis",
		Icon: LiaTableTennisSolid,
		numberAvailable: 25,
	},
	{
		listName: "Volleyball",
		Icon: FaVolleyballBall,
		numberAvailable: 265,
	},
	{
		listName: "Handball",
		Icon: TbPlayHandball,
		numberAvailable: 34,
	},
];

const PREMATCHLISTITEM: ListItemType[] = [
	{
		listName: "Soccer",
		Icon: IoFootballOutline,
		numberAvailable: 76,
	},
	{
		listName: "Tennis",
		Icon: IoTennisballOutline,
		numberAvailable: 760,
	},
	{
		listName: "Basketball",
		Icon: IoBasketballOutline,
		numberAvailable: 176,
	},
	{
		listName: "Table Tennis",
		Icon: LiaTableTennisSolid,
		numberAvailable: 765,
	},
	{
		listName: "Volleyball",
		Icon: FaVolleyballBall,
		numberAvailable: 265,
	},
	{
		listName: "Handball",
		Icon: TbPlayHandball,
		numberAvailable: 34,
	},
];

function List({ image, imageAlt, listText, lastChild = false }: ListType) {
	return (
		<div
			className={`flex items-center flex-start px-2 py-3 bg-header/50 ${
				!lastChild && "border-b"
			} border-gray-600 gap-3 cursor-pointer`}
		>
			<Image src={image} alt={imageAlt} />
			<p>{listText}</p>
		</div>
	);
}

type ListItemType = {
	listName: string;
	Icon: any;
	numberAvailable: number;
	isLastItem?: boolean;
};

function ListItem({
	listName,
	Icon,
	numberAvailable,
	isLastItem = false,
}: ListItemType) {
	return (
		<div
			className={`flex justify-between items-center bg-subheader h-12 px-3 pr-5 ${
				isLastItem ? "border-none" : "border-b border-gray-700"
			}`}
		>
			<div className="flex justify-start items-center gap-1 cursor-pointer font-opensans text-sm">
				<Icon className="text-[25px] text-gray-500" />
				<p>{listName}</p>
			</div>

			<div className="flex items-center gap-1 text-gray-500 text-[11px] cursor-pointer">
				<span>{numberAvailable}</span>
				<FaChevronDown />
			</div>
		</div>
	);
}
export default function LeftSideBar() {
	const smallScreen = useMediaQuery({ query: "(max-width: 1400px)" });
	const [isLive, setIsLive] = useState(true);
	return (
		<div
			className={`fixed ${
				smallScreen ? "top-[24.7vh]" : "top-[16.7vh]"
			}  left-0 max-w-[200px] w-[200px] flex flex-col gap-3 justify-center items-start`}
		>
			<div className="w-full">
				<h1 className="bg-header pl-2 py-3 border-b border-b-gray-600 font-inter font-medium text-md cursor-pointer">
					Popular events
				</h1>
				<List image={WorldCup} imageAlt="W-Cup" listText="World Cup" />
				<List
					image={EuroLeague}
					imageAlt="Euro-Cup"
					listText="Champions League"
					lastChild={true}
				/>
			</div>
			<div className="w-full">
				<List
					image={Favourite}
					imageAlt="fav"
					listText="Favourites"
					lastChild={true}
				/>
			</div>
			<div className="w-full bg-header/70">
				<div className="h-10 flex justify-start items-center px-3 gap-2 border-b border-gray-600 font-bold">
					<h2
						className={`${
							isLive && "border-b border-blue-600"
						} h-full py-2 px-2 cursor-pointer`}
						onClick={() => {
							setIsLive(true);
						}}
					>
						Live
					</h2>
					<h2
						className={`${
							!isLive && "border-b border-blue-600"
						} h-full py-2 px-2 cursor-pointer`}
						onClick={() => {
							setIsLive(false);
						}}
					>
						Prematch
					</h2>
				</div>

				{isLive ? (
					<div
						className={`transition-all ease-in-out duration-150 delay-700 ${
							isLive ? "opacity-100" : "opacity-0"
						}`}
					>
						{LIVELISTITEM.map(
							({ listName, Icon, numberAvailable }, index) => (
								<ListItem
									key={listName + index}
									listName={listName}
									Icon={Icon}
									numberAvailable={numberAvailable}
									isLastItem={
										index === LIVELISTITEM.length - 1
									}
								/>
							)
						)}
					</div>
				) : (
					<div
						className={`transition- ease-in-out duration-150 delay-700 ${
							isLive ? "opacity-0" : "opacity-100"
						}`}
					>
						{PREMATCHLISTITEM.map(
							({ listName, Icon, numberAvailable }, index) => (
								<ListItem
									key={listName + index}
									listName={listName}
									Icon={Icon}
									numberAvailable={numberAvailable}
									isLastItem={
										index === LIVELISTITEM.length - 1
									}
								/>
							)
						)}
					</div>
				)}
			</div>
		</div>
	);
}
