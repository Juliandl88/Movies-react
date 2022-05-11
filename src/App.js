import "./App.css";
import {MoviesGrid} from "./MoviesGrid";

export function App() {
  return <div className="App">
    <header>
      <h1 className="title">AppMovies</h1>
    </header>
    <main>
      <MoviesGrid />
    </main>
  </div>;
}


