import { Video } from "../model/video";

export async function loadVideos(): Promise<Video[]> {
  const res = await fetch("https://www.globalcyclingnetwork.com/api/devtask");
  const videos: Video[] = await res.json();
  return videos;
}
