import React from "react";
import { Video } from "./model/video";

type VideosStore = {
  allVideos: Video[];
  filteredVideos: Video[];
  setVideos: (vidz: Video[]) => void;
};

export const VideosContext = React.createContext<VideosStore>({
  allVideos: [],
  filteredVideos: [],
  setVideos: (vidz) => {},
});
