"use client";

import { Button } from "@material-tailwind/react";
import { useEffect, useState, ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";
import { IoFootballOutline } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

type SingleBetType = {
	id: number;
	homeTeam: string;
	awayTeam: string;
	odds: number;
	selectedTeam: string;
	selection: string;
	Icon?: any;
	lastChild?: boolean;
};

const BETS: SingleBetType[] = [
	{
		id: 1,
		homeTeam: "Arsenal",
		awayTeam: "West ham",
		odds: 50.2,
		selectedTeam: "Arsenal",
		selection: "1x2",
		Icon: IoFootballOutline,
	},
	{
		id: 2,
		homeTeam: "Man. City",
		awayTeam: "Liverpool",
		odds: 3.02,
		selectedTeam: "Liverpool",
		selection: "1x2",
		Icon: IoFootballOutline,
	},
];

export default function BetSlip() {
	const smallScreen = useMediaQuery({ query: "(max-width: 1400px)" });
	const [betType, setBetType] = useState("");
	const [bets, setBets] = useState(BETS);
	const [betAmount, setBetAmount] = useState("");
	const totalOdds = bets
		.reduce((accumulator, curValue) => accumulator * curValue.odds, 1)
		.toFixed(2);
	const potentialWinning = (
		parseFloat(betAmount) * Number(totalOdds) +
		0.3 * Number(totalOdds)
	).toFixed(2);

	function handleBetAmount(event: ChangeEvent<HTMLInputElement>) {
		const regex = /^[1-9]{0,1}\d*(\.\d+)?$/;

		if (regex.test(event.target.value)) {
			setBetAmount(event.target.value);
		}
	}

	useEffect(() => {
		if (!bets.length) {
			setBetType("");
		} else if (bets.length === 1) {
			setBetType("single");
		} else {
			setBetType("multiple");
		}
	}, [bets]);

	function SingleBet({
		id,
		homeTeam,
		awayTeam,
		odds,
		selectedTeam,
		selection,
		Icon,
		lastChild = false,
	}: SingleBetType) {
		function handleRemoveBet(id: number) {
			setBets(bets.filter((bet) => bet.id !== id));
		}

		return (
			<div className="px-5 pb-1">
				<div
					className={`text-gray-500 font-xs font-opensans flex justify-between items-center pt-3`}
				>
					<div className="flex gap-1 items-center">
						{<Icon className="text-lg" />}
						<p className="max-w-[280px] text-sm whitespace-nowrap overflow-hidden">
							{homeTeam.substring(0, 15)} vs{" "}
							{awayTeam.substring(0, 15)}
						</p>
					</div>

					<FaTimes
						className={`text-md font-opensans font-light cursor-pointer mr-5`}
						onClick={() => handleRemoveBet(id)}
					/>
				</div>
				<div className="flex justify-between items-center py-2">
					<div className="text-[10px] text-gray-400 font-opensans font-semibold text-center pl-2">
						<p className="text-gray-100 text-xs font-inter">
							{selectedTeam}
						</p>
						<p>{selection}</p>
					</div>
					<div className="bg-header/90 px-4 py-3 text-gray-300 text-sm rounded-lg">
						{odds}
					</div>
				</div>
				<div
					className={`${!lastChild && "border-b border-gray-500"}`}
				></div>
			</div>
		);
	}
	function handleBetTypeSelection(type: string) {
		if (bets.length < 1) {
			setBetType("");
			return;
		}
		if (type === "system") {
			setBetType("system");
			return;
		}
		if (bets.length < 2) {
			setBetType("single");
			return;
		}
		if (type === "multiple") {
			setBetType("multiple");
			return;
		}
		if (bets.length > 1) {
			setBetType("multiple");
			return;
		}
	}

	function AddToBetAmount({ value }: { value: string }) {
		return value === "clear" ? (
			<div
				className="px-3 py-2 bg-header rounded-full text-xs cursor-pointer text-gray-300"
				onClick={() => setBetAmount("")}
			>
				{value}
			</div>
		) : (
			<div
				className="px-3 py-2 bg-header rounded-full text-xs cursor-pointer text-gray-300"
				onClick={() =>
					setBetAmount((Number(betAmount) + Number(value)).toString())
				}
			>
				{value}
			</div>
		);
	}

	function BetTypeSelection({ selection }: { selection: string }) {
		return (
			<h2
				className={`${
					betType === selection.toLowerCase() &&
					"border-b border-b-blue-500"
				} h-full flex items-center cursor-pointer`}
				onClick={() => handleBetTypeSelection(selection.toLowerCase())}
			>
				{selection}
			</h2>
		);
	}

	return (
		<div
			className={`fixed ${
				smallScreen ? "top-[30vh]" : "top-[23.5vh]"
			} right-0 max-w-[350px] w-[250px] -mt-12 z-20`}
		>
			<div className={`flex flex-col justify-center items-start w-full`}>
				<h1 className="bg-header font-medium p-3 font-inter w-full">
					Betslip
				</h1>
				<div className="bg-primary w-full font-opensans font-sm">
					<div>
						{bets.length < 1 ? (
							<div className="px-10 py-5 text-center text-xs font-inter">
								<p className="pb-3">Your betslip is empty</p>
								<p className="text-gray-500">
									Please make one or more selections in order
									to place a bet
								</p>
							</div>
						) : (
							bets.map(
								(
									{
										id,
										homeTeam,
										awayTeam,
										odds,
										selectedTeam,
										selection,
										Icon,
									},
									index
								) => (
									<SingleBet
										key={index + "_" + id}
										id={id}
										homeTeam={homeTeam}
										awayTeam={awayTeam}
										odds={odds}
										selectedTeam={selectedTeam}
										selection={selection}
										lastChild={index === bets.length - 1}
										Icon={Icon}
									/>
								)
							)
						)}
						{bets.length && (
							<>
								<div className="flex justify-between items-center bg-header/70 gap-2 px-3 h-10 border-b border-b-gray-600 text-sm font-bold">
									<BetTypeSelection selection="Single" />
									<BetTypeSelection selection="Multiple" />
									<BetTypeSelection selection="System" />
								</div>
								<div className="px-5">
									<div className="flex justify-between items-center text-xs py-2">
										<p>
											Total Odds:
											<span className="text-orange-400 font-bold font-opensans pl-2">
												{totalOdds}
											</span>
										</p>
										<div className="flex justify-start items-center">
											<p className="px-2 py-1 rounded-l-xl bg-header">
												₦
											</p>
											<input
												type="text"
												value={betAmount}
												onChange={handleBetAmount}
												className="px-2 py-1 rounded-r-md w-24 text-cs text-primary font-semibold font-inter outline-none text-end"
											/>
										</div>
									</div>
									<div className="flex gap-3 items-center justify-start py-4 border-b border-b-gray-700">
										<AddToBetAmount value="clear" />
										<AddToBetAmount value="100" />
										<AddToBetAmount value="200" />
										<AddToBetAmount value="500" />
										<AddToBetAmount value="1000" />
									</div>
									<div className="py-4 px-3 ">
										<div className="text-xs flex justify-between items-center pb-2">
											<p>Total Stake:</p>
											<p>
												{betAmount
													? parseFloat(
															betAmount
													  ).toFixed(2)
													: "0.00"}
											</p>
										</div>
										<div className="text-xs font-semibold flex justify-between items-center">
											<p>Potential Winning:</p>
											<p>
												{betAmount
													? potentialWinning
													: "0.00"}
											</p>
										</div>
									</div>
									<div className="pb-3">
										{false ? (
											<Button
												variant="gradient"
												color="orange"
												fullWidth
												size="sm"
											>
												Place a Bet
											</Button>
										) : (
											<Button
												variant="gradient"
												color="orange"
												fullWidth
												size="sm"
											>
												Book a Bet
											</Button>
										)}
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
