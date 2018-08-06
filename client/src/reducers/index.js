import { combineReducers } from "redux";
import FetchOverall from "./reducer_fetch_overall";
import FirstOverallWon from "./reducer_first_overall_won";

const rootReducer = combineReducers({
  overallData: FetchOverall,
  firstOverallWonUpdatedData: FirstOverallWon
});

export default rootReducer;
