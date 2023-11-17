"use client";
import Link from "next/link";
import {
	IoHomeOutline,
	IoAmericanFootballOutline,
	IoBasketballOutline,
	IoFootballOutline,
	IoSearchCircleOutline,
	IoStarOutline,
	IoBaseballOutline,
	IoCalendarClearOutline,
} from "react-icons/io5";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import { usePathname } from "next/navigation";
import { GiTennisBall, GiHockey, GiHorseHead } from "react-icons/gi";
import { TbPlayHandball } from "react-icons/tb";
import { SiNike } from "react-icons/si";

type SubHeaderLinkType = {
	linkName: string;
	url?: string;
	Icon: any;
};

const LINKS: SubHeaderLinkType[] = [
	{
		linkName: "Home",
		url: "/",
		Icon: IoHomeOutline,
	},
	{
		linkName: "Live",
		url: "#",
		Icon: HiMiniRocketLaunch,
	},
	{
		linkName: "Today",
		url: "#",
		Icon: IoCalendarClearOutline,
	},
	{
		linkName: "Football",
		url: "#",
		Icon: IoFootballOutline,
	},
	{
		linkName: "Tennis",
		url: "#",
		Icon: GiTennisBall,
	},
	{
		linkName: "Basketball",
		url: "#",
		Icon: IoBasketballOutline,
	},
	{
		linkName: "Ice Hockey",
		url: "#",
		Icon: GiHockey,
	},
	{
		linkName: "Handball",
		url: "#",
		Icon: TbPlayHandball,
	},
	{
		linkName: "American Football",
		url: "#",
		Icon: IoAmericanFootballOutline,
	},
	{
		linkName: "Baseball",
		url: "#",
		Icon: IoBaseballOutline,
	},
	{
		linkName: "Horse Racing",
		url: "#",
		Icon: GiHorseHead,
	},
	{
		linkName: "Virtuals",
		url: "#",
		Icon: SiNike,
	},
	{
		linkName: "Search",
		url: "#",
		Icon: IoSearchCircleOutline,
	},
	{
		linkName: "Favourite",
		url: "#",
		Icon: IoStarOutline,
	},
];

function SubHeaderLink({ linkName, url = "#", Icon }: SubHeaderLinkType) {
	const pathname = usePathname();
	const smallScreen = useMediaQuery({ query: "(max-width: 1400px)" });

	return (
		<>
			{smallScreen ? (
				<div
					className={`flex flex-col bg-header p-3 px-10 rounded-md justify-start items-center gap-2 lg:text-[13px]  font-inter font-medium ${
						pathname == url ? "text-white" : "text-blue-400"
					} whitespace-nowrap `}
				>
					{<Icon className="text-[20px]" />}

					<Link href={url} className={`font-opensans`}>
						{linkName}
					</Link>
				</div>
			) : (
				<div
					className={`flex justify-start items-center gap-1 lg:text-[13px] xl:text-[14px] font-sans font-medium ${
						pathname == url ? "text-white" : "text-blue-400"
					} whitespace-nowrap `}
				>
					{<Icon />}

					<Link href={url} className={`font-opensans`}>
						{linkName}
					</Link>
				</div>
			)}
		</>
	);
}

export default function SubHeader() {
	const smallScreen = useMediaQuery({ query: "(max-width: 1400px)" });
	return (
		<div
			className={`bg-primary px-5 ${
				smallScreen ? "overflow-x-scroll" : "overflow-hidden"
			} scrollbar scrollbar-h-0.5 scrollbar-thumb-orange-900 scrollbar-track-header scrollbar-thumb-rounded-md cursor-pointer `}
		>
			<div>
				<div className={`flex items-center gap-5 py-5`}>
					{LINKS.map(({ linkName, url, Icon }, index) => (
						<SubHeaderLink
							key={linkName + index}
							linkName={linkName}
							url={url}
							Icon={Icon}
						/>
					))}
					<div className={`${smallScreen && "w-10 h-10 px-5"}`}></div>
				</div>
			</div>
		</div>
	);
}
