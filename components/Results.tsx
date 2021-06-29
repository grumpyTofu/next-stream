import React from "react";
import Thumbnail from "./Thumbnail";

export interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: "en" | string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ResultsProps {
  results: IMovieResult[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((movie) => (
        <Thumbnail movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default Results;
