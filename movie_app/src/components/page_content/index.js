import React, { useContext } from "react";
import MovieCard from "../movie_card";
import { mainContext } from "../../contexts";

const PageContent = () => {
  const { moviesData } = useContext(mainContext);

  return (
    <div>
      {moviesData.map((object) => {
        return <MovieCard movieObject={object} />;
      })}
    </div>
  );
};

export default PageContent;
