import VideoCard from "./VideoCard";

export default function VideoCards() {
  const videos = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
}
