import { IoFootballOutline } from "react-icons/io5";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LiveMatch() {
	function Predict({ team, odd }: { team: string; odd: number }) {
		return (
			<div className="flex justify-start gap-1 sm:gap-3 bg-primary text-gray-200 p-1 sm:px-3 py-2 rounded-md shadow-md  text-[10px] sm:text-xs font-medium">
				<p>{team}</p>
				<>{odd}</>
			</div>
		);
	}
	return (
		<div className="max-w-[250px] sm:max-w-xs p-3 rounded-lg  bg-header text-gray-600">
			<div className="flex justify-between items-center text-xs">
				<div className="flex items-center gap-1">
					<IoFootballOutline />
					<p>World Cup</p>
				</div>
				<p>Today / 22:00</p>
			</div>
			<div className="py-4 flex justify-center items-center gap-2 text-gray-500 text-xs sm:text-sm">
				<p>Argentina</p>
				<span
					className={`fi fi-${"ag".toLowerCase()} fis rounded-full text-3xl`}
				></span>
				<p>VS</p>
				<span
					className={`fi fi-${"fr".toLowerCase()} fis rounded-full text-3xl`}
				></span>
				<p>France</p>
			</div>
			<div className="flex items-center gap-4 text-gray-500 text-sm">
				<div className="flex-1 border-t border-gray-700"></div>
				<p className="text-xs">Match News</p>
				<div className="flex-1 border-t border-gray-700"></div>
			</div>
			<div className="w-full overflow-hidden overflow-x-scroll scrollbar scrollbar-h-[2px] scrollbar-thumb-deep-orange-100 scrollbar-track-blue-gray-600 cursor-pointer flex flex-nowrap py-3">
				<div className="pr-5"></div>
				<div className="flex justify-around items-center gap-2 sm:gap-4">
					<Predict team={"H"} odd={8.55} />
					<Predict team="X" odd={6.77} />
					<Predict team="A" odd={5.44} />
				</div>
				<div className="pl-5"></div>
			</div>
		</div>
	);
}
