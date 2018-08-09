export default function(state = [], action) {
  switch (action.type) {
    case "REMOVED_RESTAURANT":
      console.log(state);
      return state.concat([action.payload]);
    default:
      return state;
  }
}
