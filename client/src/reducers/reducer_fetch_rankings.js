export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_RANKINGS":
      return action.payload.data;
    default:
      return state;
  }
}
