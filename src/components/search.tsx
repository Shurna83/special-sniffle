import React, { useContext, useState } from "react";
import { VideosContext } from "../context";

export const Search = () => {
  const [input, setInput] = useState("");

  const { setVideos, allVideos } = useContext(VideosContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const filter = input;
    setVideos(
      !filter
        ? allVideos
        : allVideos.filter((v) => !!v.title.match(new RegExp(filter, "i")))
    );
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
