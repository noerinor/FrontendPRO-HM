export const fetchSwapiData = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_SWAPI_REQUEST" });

    try {
      const response = await fetch("https://swapi.py4e.com/api/people/1/");
      const data = await response.json();
      dispatch({ type: "FETCH_SWAPI_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_SWAPI_FAILURE", error });
    }
  };
};

export const clearTodo = () => {
  return { type: "CLEAR_TODO" };
};
