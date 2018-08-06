export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_MATCHUP_DATA":
      return action.payload.data;
    default:
      return state;
  }
}
