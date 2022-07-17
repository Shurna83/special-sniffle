import { useContext } from "react";
import { VideosContext } from "../context";
import { VideoItem } from "./video-item";

export const Videos = () => {
  const { filteredVideos } = useContext(VideosContext);
  return (
    <main className="vbox main">
      {filteredVideos.map((v) => (
        <VideoItem key={v._id} video={v} />
      ))}
    </main>
  );
};
