import "./Mainvedio.css";
import React, { useRef, useEffect } from "react";

import vedioo from "../../Assets/Pictures/Dresso Intro vedio.mp4";
export default function MainVedio() {
  function VideoComponent() {
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;

      // Autoplay the video when component mounts
      video.autoplay = true;

      // Mute the video to improve autoplay chances
      video.muted = true;

      // Loop the video
      video.loop = true;

      // Function to handle fullscreen mode
      const handleFullscreen = () => {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      };

      // Add event listener to handle fullscreen when video is clicked
      video.addEventListener("click", handleFullscreen);

      // Cleanup function to remove event listener
      return () => {
        video.removeEventListener("click", handleFullscreen);
      };
    }, []);

    return (
      <>
        <div>
          <video ref={videoRef} width="100%" height="100%" autoPlay>
            <source src={vedioo} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }

  return <VideoComponent />;
}
