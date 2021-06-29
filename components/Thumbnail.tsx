import React, { forwardRef } from "react";
import Image from "next/image";
import { IMovieResult } from "./Results";
import { ThumbUpIcon } from "@heroicons/react/outline";

interface ThumbnailProps {
  movie: IMovieResult;
}

const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(
  ({ movie }, ref) => {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    return (
      <div
        ref={ref}
        className="group cursor-pointer m-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
      >
        <Image
          src={
            movie.backdrop_path
              ? `${baseUrl}${movie.backdrop_path}`
              : `${baseUrl}${movie.poster_path}`
          }
          layout="responsive"
          height={1080}
          width={1920}
          alt="Movie Poster"
        />
        <div className="p-2">
          <p className="truncate max-w-md">{movie.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
            {movie.title || movie.original_title || movie.original_name}
          </h2>
          <div className="flex items-center opacity-0 group-hover:opacity-100">
            <p className="capitalize">
              {movie.media_type && movie.media_type} - {movie.release_date}
            </p>
            <ThumbUpIcon className="h-5 mx-2" /> {movie.vote_count}
          </div>
        </div>
      </div>
    );
  }
);

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
