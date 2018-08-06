export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_OVERALL":
      if (action.payload.data[0]._id === action.payload.data[1]._id) {
        return "Same Parties";
      }
      return action.payload.data;
    default:
      return state;
  }
}
