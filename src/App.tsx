import { useEffect, useRef, useState } from "react";
import { loadVideos } from "./api/loadVideos";
import { Header } from "./components/header";
import { Videos } from "./components/videos";
import { VideosContext } from "./context";
import { Video } from "./model/video";

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  const allVideosRef = useRef<Video[]>([]);

  async function start(): Promise<void> {
    const videos = await loadVideos();
    setVideos(videos);
    allVideosRef.current = videos;
  }

  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) {
      return;
    }
    startedRef.current = true;
    start();
  }, []);

  return (
    <VideosContext.Provider
      value={{
        filteredVideos: videos,
        setVideos,
        allVideos: allVideosRef.current,
      }}
    >
      <Header />
      <Videos />
    </VideosContext.Provider>
  );
}

export default App;
