import React from "react";
import "./App.css";
import Counter from "./features/counter/Counter";
import { useGetPokemonByNameQuery } from "./services/pokemon";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <>
      <Counter />
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </>
  );
}

export default App;

{
  /* <Grid container spacing={3} className={classes.list}>
  {places?.map((place, index) => (
    <Grid item key={index} xs={12}>
      <PlaceDetails place={place} />
    </Grid>
  ))}
</Grid>; */
}
