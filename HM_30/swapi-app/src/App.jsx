import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData, clearTodo } from "./store/swapiActions";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.swapi);

  useEffect(() => {
    dispatch(fetchSwapiData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>SWAPI Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
        </div>
      )}
      <footer>
        <button onClick={() => dispatch(clearTodo())}>Clear TODO</button>
      </footer>
    </div>
  );
}

export default App;
