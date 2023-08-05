const initialState = {
  isLoading: false,
  posts: [],
  error: "",
};

// Reducer
export default function posts(state = initialState, action) {
  switch (action.type) {
    case "fetchRequest":
      return { ...state, isLoading: true };
    case "fetchSucess":
      return { ...state, isLoading: false, posts: action.payload, error: "" };
    case "fetchFail":
      return { ...state, isLoading: false, posts: [], error: action.payload };
    default:
      return state;
  }
}

// Action Creators
export function fetchRequest() {
  return { type: "fetchRequest" };
}

export function fetchSucess(postArr) {
  return { type: "fetchSucess", payload: postArr };
}

export function fetchFail(errorMessage) {
  return { type: "fetchFail", payload: errorMessage };
}

export function fetchPosts() {
  return async function (dispatch, getState) {
    try {
      dispatch(fetchRequest());
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!res.ok) throw new Error("Something Wrong With Response");
      //   console.log(res);
      const data = await res.json();
      dispatch(fetchSucess(data));
    } catch (err) {
      dispatch(fetchFail(err.message));
      // console.log(err);
    }
  };
}
