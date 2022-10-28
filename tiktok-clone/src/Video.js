import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, , setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/ce71d08c15bdca4af67cc97a6f937052/61ddecb2/video/tos/useast2a/tos-useast2a-ve-0068c003/c7840c29806a4e088554f8504d05807f/?a=1988&br=2934&bt=1467&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_FlWkag3-I&l=20220111144622010223072158111F4947&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anlzZzo6ZmZrOjMzNzczM0ApNDk4aDo8PDw0NzZnaWdnaWcvMV8xcjRncl9gLS1kMTZzcy1gLTBhYTBhLzMtYTReNV46Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter />

      {/* VideoFooter */}
      {/* Sidebar */}
    </div>
  );
}

export default Video;
