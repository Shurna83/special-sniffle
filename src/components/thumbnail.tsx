const URL = `https://img.youtube.com/vi/#VIDEO_ID#/mqdefault.jpg`;

type ThumbnailProps = { videoId: string; videoTitle: string };

export const Thumbnail = ({ videoId, videoTitle }: ThumbnailProps) => {
  const videoImgSrc = URL.replace("#VIDEO_ID#", videoId);
  return <img src={videoImgSrc} alt={videoTitle} />;
};
