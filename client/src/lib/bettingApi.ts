import axios from "axios";

// An api key is emailed to you when you sign up to a plan
// Get a free API key at https://api.the-odds-api.com/
const apiKey = process.env.NEXT_PUBLIC_BETTING_API;
console.log(apiKey);

// Get Prematch Leagues
axios
	.get("https://api.betting-api.com/1xbet/football/line/leagues", {
		headers: {
			Authorization: apiKey,
		},
	})
	.then((response) => {
		console.log(response.data);
	})
	.catch((error: { response: { status: any; data: any } }) => {
		console.log("Error status", error.response.status);
		console.log(error.response.data);
	});

// Get Prematch events
axios
	.get("https://api.betting-api.com/1xbet/football/line/all", {
		headers: {
			Authorization: apiKey,
		},
	})
	.then((response) => {
		console.log(response.data);
	})
	.catch((error: { response: { status: any; data: any } }) => {
		console.log("Error status", error.response.status);
		console.log(error.response.data);
	});
