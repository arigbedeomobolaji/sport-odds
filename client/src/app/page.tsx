"use client";
import axios from "axios";
import Homebody from "@/components/HomeBody";
import Header from "@components/header";
import { useEffect, useState } from "react";

interface PreMatchLeagues {
	isCyber?: boolean;
	country_id: number;
	isSimulated: false;
	league_id: number;
	title: string;
	title_rus: string;
}
export default function Home() {
	const apiKey = process.env.NEXT_PUBLIC_BETTING_API;
	// const [prematchLeagues, setPrematchLeagues] = useState<PreMatchLeagues[]>(
	// 	[]
	// );

	useEffect(() => {
		if (!localStorage.getItem("leagues")) {
			axios
				.get(
					"https://api.betting-api.com/1xbet/football/line/leagues",
					{
						headers: {
							Authorization: apiKey,
						},
					}
				)
				.then((response) => {
					localStorage.setItem(
						"leagues",
						JSON.stringify(response.data)
					);
				})
				.catch((error: { response: { status: any; data: any } }) => {
					console.log("Error status", error.response.status);
					console.log(error.response.data);
				});

			axios
				.get(
					"https://api.betting-api.com/1xbet/football/line/league/88637/matches",
					{
						headers: {
							Authorization: apiKey,
						},
					}
				)
				.then((response) => {
					console.log("Prematch events", response.data);
				})
				.catch((error: { response: { status: any; data: any } }) => {
					console.log("Error status", error.response.status);
					console.log(error.response.data);
				});
		}
	}, []);

	return (
		<>
			<Header />
			<Homebody />
		</>
	);
}
