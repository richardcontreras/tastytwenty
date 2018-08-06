import axios from "axios";

export function fetchMatchupData(category) {
  const request = axios.get(`http://localhost:3000/api/matchups/${category}`);

  return {
    type: "FETCH_MATCHUP_DATA",
    payload: request
  };
}

export function calcMatchupWinner(
  winnersELO,
  winnersID,
  losersELO,
  losersID,
  category
) {
  return {
    type: "CALCULATED_MATCHUP_WINNER",
    payload: [winnersELO, winnersID, losersELO, losersID, category]
  };
}

export function fetchRankings(category) {
  const request = axios.get(`http://localhost:3000/api/rankings/${category}`);

  return {
    type: "FETCH_RANKINGS",
    payload: request
  };
}
