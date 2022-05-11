import styles from "./MovieCard.module.css";
import React from 'react';

export function MovieCard({ movie }) {
  const imagenUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
  return (
    <li className={styles.ovieCard}>
      <img
        className={styles.movieImage}
        src={imagenUrl}
        alt={movie.title}
        width={230}
        height={345}
      />
      <div>{movie.title}</div>
    </li>
  );
}
