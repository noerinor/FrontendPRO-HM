const initialState = {
  data: null,
  loading: false,
  error: null,
};

const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SWAPI_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SWAPI_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_SWAPI_FAILURE":
      return { ...state, loading: false, error: action.error };
    case "CLEAR_TODO":
      return { ...state, data: null };
    default:
      return state;
  }
};

export default swapiReducer;
