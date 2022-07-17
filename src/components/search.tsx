import React, { useContext, useState } from "react";
import { VideosContext } from "../context";

export const Search = () => {
  const [input, setInput] = useState("");

  const { setVideos, allVideos } = useContext(VideosContext);

  const searchBy = (filter: string) =>
    setVideos(
      !filter
        ? allVideos
        : allVideos.filter((v) => !!v.title.match(new RegExp(filter, "i")))
    );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    setInput(filter);
    searchBy(filter);
  };

  const handleClick = () => {
    searchBy(input);
  };

  return (
    <div className="hbox search">
      <input
        type="text"
        className="searchBox"
        placeholder="Search for videos"
        value={input}
        onChange={handleChange}
      ></input>
      <img src="../img/search.png" alt="Search" onClick={handleClick} />
    </div>
  );
};
