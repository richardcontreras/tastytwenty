import { combineReducers } from "redux";
import FetchOverall from "./reducer_fetch_overall";
import CalcFirstOverallWinner from "./reducer_calc_first_overall_winner";
import FetchOverallRankings from "./reducer_fetch_overall_rankings";

const rootReducer = combineReducers({
  overallData: FetchOverall,
  firstOverallUpdatedData: CalcFirstOverallWinner,
  overallRankings: FetchOverallRankings
});

export default rootReducer;
