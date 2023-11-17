import { FaChevronDown } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";
type MarketOddsType = {
	betDetails?: BetDetails;
	homeOdds: string;
	awayOdds: string;
	bothOdds: string;
	bgColor?: boolean;
	header?: boolean;
	others?: boolean;
	isLast?: boolean;
};

type BetDetails = {
	homeTeam: string;
	awayTeam: string;
	predictions?: string[];
};

type BetTableRowType = {
	isLast?: boolean;
	homeTeam: string;
	awayTeam: string;
	startTimeorDuration: string;
	homeScore: string;
	awayScore: string;
};
export default function Table() {
	const isTablet = useMediaQuery({ query: "(max-width: 1100px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
	const isVerySmall = useMediaQuery({ query: "(max-width: 550px)" });

	function BetTableRow({
		homeTeam,
		awayTeam,
		startTimeorDuration,
		homeScore,
		awayScore,
		isLast = false,
	}: BetTableRowType) {
		return (
			<div className="table-row">
				<div
					className={`table-cell ${
						!isLast && "border-b border-b-gray-800"
					}`}
				>
					<div className="flex justify-between items-center px-3">
						<div className="text-indigo-500">
							{startTimeorDuration}
						</div>
						<div
							className={`text-gray-300 ${
								isTablet
									? "text-[12px] font-semibold"
									: `text-sm`
							}`}
						>
							<p>{homeTeam}</p>
							<p>{awayTeam}</p>
						</div>
						<div className="flex items-center justify-center gap-3">
							{!isTablet && <GiSoccerField className="text-md" />}{" "}
							<div className="text-indigo-500 text-xs">
								<p>{homeScore}</p>
								<p>{awayScore}</p>
							</div>
						</div>
					</div>
				</div>
				<MarketOdds
					homeOdds="2.02"
					bothOdds="3.45"
					awayOdds="4.4"
					bgColor
					isLast={isLast}
					betDetails={{
						homeTeam,
						awayTeam,
						predictions: ["1:2.02", "X:3.45", "2:4.4"],
					}}
				/>
				{!isMobile && (
					<MarketOdds
						homeOdds="1.52"
						bothOdds="2.43"
						awayOdds="3.4"
						bgColor
						isLast={isLast}
						betDetails={{
							homeTeam,
							awayTeam,
							predictions: ["1X:1.52", "12:2.43", "2x:3.4"],
						}}
					/>
				)}
				{!isTablet && (
					<MarketOdds
						homeOdds="2.5"
						bothOdds="2.43"
						awayOdds="3.4"
						betDetails={{
							homeTeam,
							awayTeam,
							predictions: ["over:2.43", "under:3.4"],
						}}
						bgColor
						others
						isLast={isLast}
					/>
				)}
			</div>
		);
	}
	function handlePrediction(odds: string, betDetails?: BetDetails) {
		const prediction = betDetails?.predictions
			?.find((val) => val.includes(odds))
			?.split(":")[0];
		console.log(odds, betDetails, prediction);
	}
	function MarketOdds({
		homeOdds,
		bothOdds,
		awayOdds,
		bgColor = false,
		header = false,
		others = false,
		isLast,
		betDetails,
	}: MarketOddsType) {
		return (
			<div
				className={`table-cell ${
					!isLast && "border-b border-b-gray-800"
				}  px-2 py-3 font-xs ${header && "font-medium border-none"} ${
					isTablet ? "text-[11px] font-semibold" : "text-xs"
				}`}
			>
				<div
					className={`text-center flex items-center justify-center ${
						bgColor && "bg-orange-500 cursor-pointer"
					} rounded-md h-8`}
				>
					<button
						className={`flex-1 w-full h-full flex items-center justify-center rounded-l-md   ${
							bgColor && "border-r border-r-gray-700/40"
						} ${others && "bg-body cursor-default"}`}
						onClick={() => handlePrediction(homeOdds, betDetails)}
						disabled={others || header}
					>
						{homeOdds ? homeOdds : <p className="invisible">.</p>}
					</button>
					<button
						className={`flex-1  ${
							bgColor && "border-r border-r-gray-700/40"
						}`}
						onClick={() => handlePrediction(bothOdds, betDetails)}
						disabled={others || header}
					>
						{bothOdds}
					</button>
					<button
						className="flex-1"
						onClick={() => handlePrediction(awayOdds, betDetails)}
						disabled={header}
					>
						{awayOdds}
					</button>
				</div>
			</div>
		);
	}
	return (
		<div className="table w-full bg-primary p-4">
			<div className="table-header-group">
				<div className="table-row">
					<div className="table-cell text-left">Today</div>
					<div
						className={`table-cell text-center ${
							isMobile ? "w-[120px]" : "w-[170px]"
						}`}
					>
						3way
					</div>
					{!isMobile && (
						<div className="table-cell text-center w-[170px]">
							Double Chance
						</div>
					)}
					{!isTablet && (
						<div className="table-cell text-center w-[170px]">
							<div className="flex items-center justify-center flex-1 text-center">
								Total <FaChevronDown />
							</div>
						</div>
					)}
				</div>
				<div className="table-row">
					<div className="table-cell text-left"></div>
					<MarketOdds header homeOdds="1" awayOdds="2" bothOdds="X" />
					{!isMobile && (
						<MarketOdds
							header
							homeOdds="1X"
							awayOdds="12"
							bothOdds="X2"
						/>
					)}
					{!isTablet && (
						<MarketOdds
							header
							homeOdds=""
							awayOdds="Under"
							bothOdds="Over"
						/>
					)}
				</div>
			</div>
			<div className="table-row-group">
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
				/>
				<BetTableRow
					homeTeam="Man United"
					awayTeam="Liverpool"
					startTimeorDuration="64'"
					homeScore="2"
					awayScore="2"
					isLast
				/>
			</div>
		</div>
	);
}
