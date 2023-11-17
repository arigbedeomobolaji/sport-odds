"use client";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import DesktopHeader from "./DesktopHeader";
import TabletorMobileHeader from "./TabletorMobileHeader";
import SubHeader from "./SubHeader";

function Header() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 995px)" });

	return (
		<>
			(
			<div className="fixed top-0 w-full z-50">
				{isTabletOrMobile ? (
					<TabletorMobileHeader />
				) : (
					<DesktopHeader />
				)}
				<SubHeader />
			</div>
			)
		</>
	);
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
