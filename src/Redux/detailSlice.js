const initialState = {
  post: {},
};

//Reducer
export default function details(state = initialState, action) {
  switch (action.type) {
    case "showDetails":
      return { ...state, post: action.payload };
    default:
      return state;
  }
}

// Action Creator
export function showDetails(obj) {
  return { type: "showDetails", payload: obj };
}
