import React from 'react';
import "./App.css";
import { MoviesGrid } from "./components/MoviesGrid";

export function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Lista de películas</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
