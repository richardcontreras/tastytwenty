import axios from "axios";

export function fetchOverallData() {
  const request = axios.get(`http://localhost:3000/api/get`);

  return {
    type: "FETCH_OVERALL",
    payload: request
  };
}

export function calcFirstOverallWinner(
  winnersELO,
  winnersID,
  losersELO,
  losersID
) {
  return {
    type: "FIRST_OVERALL_WON",
    payload: [winnersELO, winnersID, losersELO, losersID]
  };
}
