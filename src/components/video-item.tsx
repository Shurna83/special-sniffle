import { Video } from "../model/video";
import { TextDate } from "./text-date";
import { Thumbnail } from "./thumbnail";

type VideoItemProps = { video: Video };

export const VideoItem = ({ video }: VideoItemProps) => {
  return (
    <div className="vbox videoItem">
      <Thumbnail videoId={video._id} videoTitle={video.title} />
      <TextDate dateStr={video.publishDate} />
      <p>{video.title}</p>
    </div>
  );
};
