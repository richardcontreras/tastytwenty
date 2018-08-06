import { combineReducers } from "redux";
import FetchOverall from "./reducer_fetch_overall";
import CalcFirstOverallWinner from "./reducer_calc_first_overall_winner";

const rootReducer = combineReducers({
  overallData: FetchOverall,
  firstOverallUpdatedData: CalcFirstOverallWinner
});

export default rootReducer;
