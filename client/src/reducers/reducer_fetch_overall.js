export default function(state = null, action) {
  switch (action.type) {
    case "FETCH_OVERALL":
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
