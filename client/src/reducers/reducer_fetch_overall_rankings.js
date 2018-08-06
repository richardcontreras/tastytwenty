export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_OVERALL_RANKINGS":
      return action.payload.data;
    default:
      return state;
  }
}
