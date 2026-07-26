import { useState, useRef, useEffect } from "react";
import "./styles/MusicPlayer.css";
import { TbMusic, TbMusicOff } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error(e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const hasInteracted = useRef(false);

  useEffect(() => {
    // Attempt autoplay on first user interaction anywhere on the page
    const handleInteraction = () => {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            // Play prevented, wait for explicit click on the toggle
          });
        }
      }
      window.removeEventListener("click", handleInteraction);
    };
    
    window.addEventListener("click", handleInteraction);
    
    return () => {
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <div className="music-player" onClick={togglePlay} data-cursor="disable">
      <audio ref={audioRef} loop src="/bgm.mp3" />
      <HoverLinks text={isPlaying ? "ON" : "OFF"} cursor={false} />
      <span className="music-icon">
        {isPlaying ? <TbMusic /> : <TbMusicOff />}
      </span>
    </div>
  );
};

export default MusicPlayer;
