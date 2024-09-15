import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSwapiData, clearTodo } from "./store/swapiActions";

function Swapi() {
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
          <p>Hair Color: {data.hair_color}</p>
          <p>Skin Color: {data.skin_color}</p>
          <p>Eye Color: {data.eye_color}</p>
          <p>Birth Year: {data.birth_year}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
      <footer>
        <button onClick={() => dispatch(clearTodo())}>Clear TODO</button>
      </footer>
    </div>
  );
}

export default Swapi;
