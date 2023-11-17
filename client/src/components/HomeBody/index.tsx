"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LeftSideBar from "../LeftSideBar";
import BetSlip from "../BetSlip";
import LiveMatch from "../LiveMatch";
import Highlights from "../Highlights";

function Homebody() {
	const smallScreen = useMediaQuery({ query: "(max-width: 1400px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 995px)" });
	const [currentBetLink, setCurrentBetLink] = useState("Soccer");

	return (
		<div
			className={`relative font-opensans sm:p-3 ${
				smallScreen ? "top-[21vh]" : "top-[13.5vh]"
			}`}
		>
			{!isTabletOrMobile && <LeftSideBar />}
			<div
				className={` p-5 ${
					isTabletOrMobile ? "mx-0" : "ml-[185px] mr-[235px]"
				}`}
			>
				<div className="flex items-center justify-start gap-3 overflow-hidden overflow-x-scroll scrollbar-hide pb-2 mb-5 relative w-full">
					<LiveMatch />
					<LiveMatch />
					<LiveMatch />
					<LiveMatch />
					<LiveMatch />
					<LiveMatch />
					<LiveMatch />
					<LiveMatch />
					<div className={`${!isTabletOrMobile && "ml-12"}`}></div>
				</div>
				{/* Highlights */}
				<Highlights highlightsName="Live" />
				<Highlights highlightsName="Soccer" />
				<Highlights highlightsName="Basketball" />
			</div>
			{!isTabletOrMobile && (
				<div className="-mt-[22vh] -z-10">
					<BetSlip />
				</div>
			)}
		</div>
	);
}

export default dynamic(() => Promise.resolve(Homebody), { ssr: false });
