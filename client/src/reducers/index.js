import { combineReducers } from "redux";
import FetchMatchupData from "./reducer_fetch_matchup_data";
import CalcMatchupWinner from "./reducer_calc_matchup_winner";
import FetchRankings from "./reducer_fetch_rankings";

const rootReducer = combineReducers({
  matchupData: FetchMatchupData,
  updatedDataAfterMatch: CalcMatchupWinner,
  rankings: FetchRankings
});

export default rootReducer;
