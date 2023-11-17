import React, { useState } from "react";
import Table from "./Table";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { IoBasketballOutline, IoFootballOutline } from "react-icons/io5";
import { GiHockey, GiTennisBall } from "react-icons/gi";
import { TbHorseToy, TbPlayVolleyball } from "react-icons/tb";
interface Highlights {
	highlightsName: string;
}
type BetLinkType = {
	linkName: string;
	Icon: any;
};

export default function Highlights({ highlightsName }: Highlights) {
	const smallScreen = useMediaQuery({ query: "(max-width: 1400px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 995px)" });
	const [currentBetLink, setCurrentBetLink] = useState("Soccer");
	function BetLink({ linkName, Icon }: BetLinkType) {
		return (
			<div
				className={`flex flex-col justify-center items-center relative ${
					currentBetLink === linkName
						? "text-orange-500"
						: "text-gray-400"
				}`}
				onClick={() => setCurrentBetLink(linkName)}
			>
				<Icon className="text-[20px]" />
				<Link href="#" className="text-sm whitespace-nowrap">
					{linkName}
				</Link>
				{currentBetLink === linkName && (
					<div className="absolute -bottom-[9px] w-0 h-0 border-l-[4px] border-l-transparent border-b-[8px] border-orange-500 border-r-[4px] border-r-transparent"></div>
				)}
			</div>
		);
	}
	return (
		<div className={`mb-5`}>
			<div className="flex justify-between items-center w-full p-3 bg-header text-sm font-normal rounded-t-md">
				<h1>{highlightsName}</h1>
				<Link href="#" className="text-orange-600 text-xs sm:text-sm">
					View {highlightsName} Betting
				</Link>
			</div>
			<div className={`bg-header/50 px-5 py-3`}>
				<div className="flex justify-start items-center font-normal gap-3 md:gap-5 overflow-x-scroll scrollbar-hide ">
					<BetLink Icon={IoFootballOutline} linkName="Soccer" />

					<BetLink Icon={GiTennisBall} linkName="Tennis" />

					<BetLink Icon={IoBasketballOutline} linkName="Basketball" />
					<BetLink Icon={TbPlayVolleyball} linkName="Volleyball" />
					<BetLink Icon={GiHockey} linkName="Ice Hockey" />
					<BetLink Icon={TbHorseToy} linkName="Horse racing" />
					<div className="pr-4"></div>
				</div>
			</div>
			<Table />
		</div>
	);
}
